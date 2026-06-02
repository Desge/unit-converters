'use client';

import { useState, useEffect, useCallback } from 'react';

// Fallback rates (hardcoded, same as CONVERSION_FACTORS.currency)
const FALLBACK_RATES: Record<string, number> = {
  usd: 1, eur: 1.08, gbp: 1.26, jpy: 0.0067, cny: 0.14,
  aud: 0.65, cad: 0.73, chf: 1.11, hkd: 0.128, krw: 0.00075,
};

const CACHE_KEY = 'unitconv_exchange_rates';
const CACHE_TTL = 4 * 60 * 60 * 1000; // 4 hours

interface CachedRates {
  rates: Record<string, number>;
  timestamp: string;
  fetchedAt: number; // Date.now()
}

export interface ExchangeRateData {
  rates: Record<string, number>;
  lastUpdated: string | null;
  isLive: boolean;
  loading: boolean;
}

// Module-scope cache — shared across component instances
let cachedRates: Record<string, number> | null = null;
let cachedTimestamp: string | null = null;
let fetchPromise: Promise<{ rates: Record<string, number>; timestamp: string }> | null = null;

/** Read persisted rates from localStorage */
function readLocalCache(): { rates: Record<string, number>; timestamp: string } | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data: CachedRates = JSON.parse(raw);
    if (Date.now() - data.fetchedAt > CACHE_TTL) return null; // expired
    return { rates: data.rates, timestamp: data.timestamp };
  } catch {
    return null;
  }
}

/** Persist rates to localStorage */
function writeLocalCache(rates: Record<string, number>, timestamp: string) {
  try {
    const data: CachedRates = { rates, timestamp, fetchedAt: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // localStorage may be unavailable (SSR, private browsing)
  }
}

/**
 * Hook to fetch live exchange rates from a free API.
 * Falls back to localStorage cache, then hardcoded rates.
 * Results are cached in module scope + localStorage.
 */
export function useExchangeRates(): ExchangeRateData {
  const [data, setData] = useState<ExchangeRateData>({
    rates: cachedRates ?? FALLBACK_RATES,
    lastUpdated: cachedTimestamp,
    isLive: cachedRates !== null,
    loading: cachedRates === null,
  });

  const fetchRates = useCallback(async () => {
    // 1. Module-scope cache (fastest)
    if (cachedRates) {
      setData({ rates: cachedRates, lastUpdated: cachedTimestamp, isLive: true, loading: false });
      return;
    }

    // 2. localStorage cache (survives page reload)
    const localCache = readLocalCache();
    if (localCache) {
      cachedRates = localCache.rates;
      cachedTimestamp = localCache.timestamp;
      setData({ rates: localCache.rates, lastUpdated: localCache.timestamp, isLive: true, loading: false });
      return;
    }

    // 3. Fetch from API (deduplicated)
    if (!fetchPromise) {
      fetchPromise = (async () => {
        try {
          const apiUrl = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_URL || 'https://open.er-api.com/v6/latest/USD';
          const res = await fetch(apiUrl, {
            next: { revalidate: 3600 },
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const json = await res.json();

          const apiRates: Record<string, number> = json.rates || {};
          const ourRates: Record<string, number> = {};
          for (const key of Object.keys(FALLBACK_RATES)) {
            if (key === 'usd') {
              ourRates.usd = 1;
            } else if (apiRates[key.toUpperCase()]) {
              ourRates[key] = 1 / apiRates[key.toUpperCase()];
            } else {
              ourRates[key] = FALLBACK_RATES[key];
            }
          }

          const timestamp = json.time_last_update_utc || new Date().toISOString();
          writeLocalCache(ourRates, timestamp);
          return { rates: ourRates, timestamp };
        } catch (err) {
          console.warn('Failed to fetch exchange rates, using fallback:', err);
          const timestamp = new Date().toISOString();
          writeLocalCache(FALLBACK_RATES, timestamp);
          return { rates: FALLBACK_RATES, timestamp };
        } finally {
          fetchPromise = null;
        }
      })();
    }

    const result = await fetchPromise;
    cachedRates = result.rates;
    cachedTimestamp = result.timestamp;
    setData({ rates: result.rates, lastUpdated: result.timestamp, isLive: true, loading: false });
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return data;
}
