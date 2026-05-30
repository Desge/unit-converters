'use client';

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { ConversionPair, CONVERSION_FACTORS, CATEGORIES } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';

interface Props {
  pair: ConversionPair;
  locale: Locale;
}

export default function ConverterTool({ pair, locale }: Props) {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>(pair.from.key);
  const [toUnit, setToUnit] = useState<string>(pair.to.key);
  const [result, setResult] = useState<string>('');

  const category = CATEGORIES.find(c => c.key === pair.categoryKey)!;
  const units = category.units;

  // Precompute nearby common conversions
  const commonValues = useMemo(() => [0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000], []);

  const convert = useCallback((val: number, from: string, to: string): number => {
    if (from === to) return val;

    // Temperature special handling
    if (pair.categoryKey === 'temperature') {
      // Convert to Celsius first, then to target
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

    // Multiplicative conversion
    const factors = CONVERSION_FACTORS[pair.categoryKey];
    if (!factors) return val;
    const baseValue = val * factors[from];
    return baseValue / factors[to];
  }, [pair.categoryKey]);

  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) { setResult(''); return; }
    const converted = convert(num, fromUnit, toUnit);
    // Smart decimal display
    if (Math.abs(converted) < 0.000001 && converted !== 0) {
      setResult(converted.toExponential(6));
    } else if (Math.abs(converted) >= 1e6) {
      setResult(converted.toExponential(6));
    } else {
      setResult(converted.toLocaleString('en-US', { maximumFractionDigits: 10 }));
    }
  }, [value, fromUnit, toUnit, convert]);

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const fromU = units.find(u => u.key === fromUnit)!;
  const toU = units.find(u => u.key === toUnit)!;
  const fromName = fromU.name[locale] || fromU.name.en;
  const toName = toU.name[locale] || toU.name.en;
  const formulaKey = `${fromUnit}_${toUnit}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* ── Converter Card ── */}
      <div className="card p-6 sm:p-8 space-y-6">
        {/* Value Input */}
        <div>
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {localeLabels[locale]?.enterValue || 'Enter Value'}
          </label>
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="input-field text-2xl"
            placeholder="1"
            autoFocus
          />
        </div>

        {/* From Unit */}
        <div className="flex items-end gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              {localeLabels[locale]?.from || 'From'}
            </label>
            <select
              value={fromUnit}
              onChange={e => setFromUnit(e.target.value)}
              className="select-field w-full"
            >
              {units.map(u => (
                <option key={u.key} value={u.key}>
                  {u.name[locale] || u.name.en} ({u.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={swap}
            className="btn-secondary p-3 mb-0.5"
            title="Swap units"
            aria-label="Swap units"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          {/* To Unit */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              {localeLabels[locale]?.to || 'To'}
            </label>
            <select
              value={toUnit}
              onChange={e => setToUnit(e.target.value)}
              className="select-field w-full"
            >
              {units.map(u => (
                <option key={u.key} value={u.key}>
                  {u.name[locale] || u.name.en} ({u.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="p-4 sm:p-6 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-200 dark:border-brand-800">
          <div className="text-sm text-[var(--text-secondary)] mb-1">
            {localeLabels[locale]?.result || 'Result'}
          </div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl sm:text-4xl font-bold text-brand-600 dark:text-brand-400">
              {result || '—'}
            </span>
            <span className="text-xl text-[var(--text-secondary)]">
              {toU.symbol}
            </span>
          </div>
          {result && (
            <div className="mt-2 text-sm text-[var(--text-tertiary)]">
              {value} {fromU.symbol} = {result} {toU.symbol}
            </div>
          )}
        </div>

        {/* Formula */}
        <div className="text-sm text-[var(--text-tertiary)] text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-tertiary)] rounded-lg">
            <span className="font-mono font-medium">{fromName}</span>
            <span className="text-brand-500">→</span>
            <span className="font-mono font-medium">{toName}</span>
            <span className="mx-1 text-[var(--text-tertiary)]">:</span>
            <code className="font-mono text-brand-600 dark:text-brand-400">
              {pair.formula}
            </code>
          </span>
        </div>
      </div>

      {/* ── Common Conversions Table ── */}
      <div className="card p-6">
        <h3 className="font-semibold text-lg mb-4">
          {localeLabels[locale]?.commonConversions || 'Common Conversions'}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-[var(--border-color)]">
                <th className="pb-3 font-medium text-[var(--text-secondary)]">
                  {fromName} ({fromU.symbol})
                </th>
                <th className="pb-3 font-medium text-[var(--text-secondary)]">
                  {toName} ({toU.symbol})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {commonValues.map((v, i) => {
                const c = convert(v, fromUnit, toUnit);
                return (
                  <tr key={i} className="hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
                    onClick={() => { setValue(String(v)); }}>
                    <td className="py-2.5 font-mono">{v}</td>
                    <td className="py-2.5 font-mono text-brand-600 dark:text-brand-400">
                      {c.toLocaleString('en-US', { maximumFractionDigits: 6 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Related Categories ── */}
      <div className="card p-6">
        <h3 className="font-semibold text-lg mb-4">
          {localeLabels[locale]?.moreConverters || 'More Converters'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.filter(c => c.key !== pair.categoryKey).map(c => (
            <a
              key={c.key}
              href={`/${locale}/convert/${c.units[0].key}-to-${c.units[1].key}/`}
              className="btn-secondary text-sm"
            >
              {c.icon} {c.name[locale] || c.name.en}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Simple inline labels (i18n light for component) ──
const localeLabels: Record<string, Record<string, string>> = {
  zh: { enterValue: '输入数值', from: '从', to: '到', result: '换算结果', commonConversions: '常用换算', moreConverters: '更多换算器' },
  ja: { enterValue: '値を入力', from: '変換元', to: '変換先', result: '変換結果', commonConversions: 'よく使う変換', moreConverters: '他の変換ツール' },
  ko: { enterValue: '값 입력', from: '변환 전', to: '변환 후', result: '변환 결과', commonConversions: '자주 사용하는 변환', moreConverters: '더 많은 변환기' },
  es: { enterValue: 'Ingresar valor', from: 'De', to: 'A', result: 'Resultado', commonConversions: 'Conversiones comunes', moreConverters: 'Más conversores' },
  pt: { enterValue: 'Digite o valor', from: 'De', to: 'Para', result: 'Resultado', commonConversions: 'Conversões comuns', moreConverters: 'Mais conversores' },
  en: { enterValue: 'Enter Value', from: 'From', to: 'To', result: 'Result', commonConversions: 'Common Conversions', moreConverters: 'More Converters' },
};
