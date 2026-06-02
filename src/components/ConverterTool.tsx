'use client';

import React, { useState, useCallback, useEffect, useMemo, Fragment } from 'react';
import { ConversionPair, CONVERSION_FACTORS, CATEGORIES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { useExchangeRates } from '@/lib/useExchangeRates';
import { t, formatResult, formatNumber } from '@/lib/i18n';

interface Props {
  pair: ConversionPair;
  locale: Locale;
}

export default function ConverterTool({ pair, locale }: Props) {
  const [value, setValue] = useState('1');
  const [fromUnit, setFromUnit] = useState(pair.from.key);
  const [toUnit, setToUnit] = useState(pair.to.key);
  const [result, setResult] = useState('');

  const category = CATEGORIES.find(c => c.key === pair.categoryKey)!;
  const units = category.units;
  const isCurrency = pair.categoryKey === 'currency';
  const exchangeRates = useExchangeRates();
  const commonValues = useMemo(() => [0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000], []);

  const convert = useCallback((val: number, from: string, to: string): number => {
    if (from === to) return val;
    if (pair.categoryKey === 'temperature') {
      let c: number;
      switch (from) {
        case 'celsius': c = val; break;
        case 'fahrenheit': c = (val - 32) * 5 / 9; break;
        case 'kelvin': c = val - 273.15; break;
        default: return val;
      }
      switch (to) {
        case 'celsius': return c;
        case 'fahrenheit': return c * 9 / 5 + 32;
        case 'kelvin': return c + 273.15;
        default: return val;
      }
    }
    if (pair.categoryKey === 'fuel') {
      // Convert everything through km/L (distance per volume)
      // L/100km is inverse: 1 L/100km = 100 km/L
      const toKmpl: Record<string, number> = { kmpl: 1, mpg_us: 0.425144, mpg_uk: 0.354006, mpl: 1.60934 };
      let kmpl: number;
      if (from === 'l100km') {
        kmpl = val === 0 ? 0 : 100 / val;
      } else {
        kmpl = val * (toKmpl[from] || 1);
      }
      if (to === 'l100km') {
        return kmpl === 0 ? 0 : 100 / kmpl;
      }
      return kmpl / (toKmpl[to] || 1);
    }
    if (isCurrency) {
      const rates = exchangeRates.rates;
      if (!rates[from] || !rates[to]) return val;
      return val * rates[from] / rates[to];
    }
    const factors = CONVERSION_FACTORS[pair.categoryKey];
    if (!factors) return val;
    return val * factors[from] / factors[to];
  }, [pair.categoryKey, isCurrency, exchangeRates.rates]);

  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResult(''); return; }
    setResult(formatResult(convert(num, fromUnit, toUnit), locale));
  }, [value, fromUnit, toUnit, convert, locale]);

  const swap = () => { setFromUnit(toUnit); setToUnit(fromUnit); };
  const fromU = units.find(u => u.key === fromUnit)!;
  const toU = units.find(u => u.key === toUnit)!;
  const fromName = fromU.name[locale] || fromU.name.en;
  const toName = toU.name[locale] || toU.name.en;
  const unitLabel = (u: typeof units[0]) => isCurrency ? `${u.symbol} ${u.key.toUpperCase()}` : u.symbol;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Converter Card */}
      <div className="card p-6 sm:p-8 space-y-6" role="form" aria-label="Unit converter">
        <div>
          <label htmlFor="converter-input" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {t('enterValue', locale)}
          </label>
          <input
            id="converter-input"
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="input-field text-2xl"
            placeholder="1"
            aria-describedby="result-display"
          />
        </div>

        <div className="flex items-end gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="from-unit" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t('from', locale)}</label>
            <select id="from-unit" value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="select-field w-full" aria-label="From unit">
              {units.map(u => <option key={u.key} value={u.key}>{u.name[locale] || u.name.en} ({unitLabel(u)})</option>)}
            </select>
          </div>
          <button onClick={swap} className="btn-secondary p-3 mb-0.5" aria-label="Swap units" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="to-unit" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t('to', locale)}</label>
            <select id="to-unit" value={toUnit} onChange={e => setToUnit(e.target.value)} className="select-field w-full" aria-label="To unit">
              {units.map(u => <option key={u.key} value={u.key}>{u.name[locale] || u.name.en} ({unitLabel(u)})</option>)}
            </select>
          </div>
        </div>

        {/* Result */}
        <div id="result-display" className="p-4 sm:p-6 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-200 dark:border-brand-800" role="status" aria-live="polite">
          <div className="text-sm text-[var(--text-secondary)] mb-1">{t('result', locale)}</div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl sm:text-4xl font-bold text-brand-600 dark:text-brand-400">{result || '—'}</span>
            <span className="text-xl text-[var(--text-secondary)]">{toU.symbol}</span>
          </div>
          {result && <div className="mt-2 text-sm text-[var(--text-tertiary)]">{value} {fromU.symbol} = {result} {toU.symbol}</div>}
        </div>

        {/* Formula */}
        <div className="text-sm text-[var(--text-tertiary)] text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-tertiary)] rounded-lg">
            <span className="font-mono font-medium">{fromName}</span>
            <span className="text-brand-500">→</span>
            <span className="font-mono font-medium">{toName}</span>
            <span className="mx-1 text-[var(--text-tertiary)]">:</span>
            <code className="font-mono text-brand-600 dark:text-brand-400">
              {isCurrency && exchangeRates.rates[fromUnit] && exchangeRates.rates[toUnit]
                ? `× ${(exchangeRates.rates[fromUnit] / exchangeRates.rates[toUnit]).toFixed(6)}`
                : pair.formula}
            </code>
          </span>
        </div>

        {/* Exchange rate timestamp */}
        {isCurrency && (
          <div className="text-xs text-[var(--text-tertiary)] text-center flex items-center justify-center gap-1.5">
            {exchangeRates.loading ? (
              <Fragment><svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg><span>{t('loadingRates', locale)}</span></Fragment>
            ) : exchangeRates.isLive ? (
              <Fragment><span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" /><span>{t('liveRates', locale)} · {exchangeRates.lastUpdated}</span></Fragment>
            ) : (
              <span>{t('fallbackRates', locale)}</span>
            )}
          </div>
        )}
      </div>

      {/* All Conversions — show value in every unit of the category */}
      {(() => {
        const num = parseFloat(value);
        if (isNaN(num)) return null;
        return (
          <div className="card p-6">
            <h3 className="font-semibold text-lg mb-4">{t('allConversions', locale)}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {units.map(u => {
                const converted = convert(num, fromUnit, u.key);
                const isCurrent = u.key === fromUnit;
                const uName = u.name[locale] || u.name.en;
                const uLabel = isCurrency ? `${u.symbol} ${u.key.toUpperCase()}` : u.symbol;
                return (
                  <div
                    key={u.key}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                      isCurrent
                        ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800'
                        : 'bg-[var(--bg-tertiary)] border-transparent hover:border-brand-200 dark:hover:border-brand-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-sm font-medium text-[var(--text-secondary)] truncate">{uName}</span>
                      <span className="text-xs text-[var(--text-tertiary)] shrink-0">({uLabel})</span>
                    </div>
                    <span className={`font-mono text-sm font-semibold truncate ml-3 ${isCurrent ? 'text-brand-600 dark:text-brand-400' : 'text-[var(--text-primary)]'}`}>
                      {formatResult(converted, locale)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Common Conversions Table */}
      <div className="card p-6">
        <h3 className="font-semibold text-lg mb-4">{t('commonConversions', locale)}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[var(--border-color)]">
                <th className="pb-3 font-medium text-[var(--text-secondary)]">{fromName} ({fromU.symbol})</th>
                <th className="pb-3 font-medium text-[var(--text-secondary)]">{toName} ({toU.symbol})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {commonValues.map((v, i) => {
                const c = convert(v, fromUnit, toUnit);
                return (
                  <tr
                    key={i}
                    className="hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
                    onClick={() => setValue(String(v))}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setValue(String(v)); } }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${v} ${fromU.symbol} = ${formatNumber(c, locale, { maximumFractionDigits: 6 })} ${toU.symbol}`}
                  >
                    <td className="py-2.5 font-mono">{v}</td>
                    <td className="py-2.5 font-mono text-brand-600 dark:text-brand-400">{formatNumber(c, locale, { maximumFractionDigits: 6 })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related Categories */}
      <div className="card p-6">
        <h3 className="font-semibold text-lg mb-4">{t('moreConverters', locale)}</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter(c => c.key !== pair.categoryKey).map(c => (
            <a key={c.key} href={`/${locale}/convert/${c.units[0].key}-to-${c.units[1].key}/`} className="btn-secondary text-sm">
              {c.icon} {c.name[locale] || c.name.en}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
