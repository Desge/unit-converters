#!/usr/bin/env node

/**
 * Build-time OG image generator for UnitConvert
 * 
 * Generates per-tool and per-category SVG OG images for social sharing.
 * Compatible with Next.js SSG (static export).
 * 
 * Usage: node scripts/generate-og-images.mjs
 * Output: public/og/*.svg
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'public', 'og');

// ──── Data mirror of src/lib/conversions.ts (must stay in sync) ────

const CATEGORIES = [
  {
    key: 'length',
    name: { en: 'Length', zh: '长度', ja: '長さ', ko: '길이', es: 'Longitud', pt: 'Comprimento' },
    icon: '📏',
    units: [
      { key: 'mm', name: { en:'Millimeter', zh:'毫米' }, symbol:'mm' },
      { key: 'cm', name: { en:'Centimeter', zh:'厘米' }, symbol:'cm' },
      { key: 'm', name: { en:'Meter', zh:'米' }, symbol:'m' },
      { key: 'km', name: { en:'Kilometer', zh:'千米' }, symbol:'km' },
      { key: 'inch', name: { en:'Inch', zh:'英寸' }, symbol:'in' },
      { key: 'foot', name: { en:'Foot', zh:'英尺' }, symbol:'ft' },
      { key: 'yard', name: { en:'Yard', zh:'码' }, symbol:'yd' },
      { key: 'mile', name: { en:'Mile', zh:'英里' }, symbol:'mi' },
    ]
  },
  {
    key: 'weight',
    name: { en: 'Weight', zh: '重量', ja: '重さ', ko: '무게', es: 'Peso', pt: 'Peso' },
    icon: '⚖️',
    units: [
      { key: 'mg', name: { en:'Milligram', zh:'毫克' }, symbol:'mg' },
      { key: 'g', name: { en:'Gram', zh:'克' }, symbol:'g' },
      { key: 'kg', name: { en:'Kilogram', zh:'千克' }, symbol:'kg' },
      { key: 'ton', name: { en:'Metric Ton', zh:'吨' }, symbol:'t' },
      { key: 'oz', name: { en:'Ounce', zh:'盎司' }, symbol:'oz' },
      { key: 'lb', name: { en:'Pound', zh:'磅' }, symbol:'lb' },
    ]
  },
  {
    key: 'temperature',
    name: { en: 'Temperature', zh: '温度', ja: '温度', ko: '온도', es: 'Temperatura', pt: 'Temperatura' },
    icon: '🌡️',
    units: [
      { key: 'celsius', name: { en:'Celsius', zh:'摄氏度' }, symbol:'°C' },
      { key: 'fahrenheit', name: { en:'Fahrenheit', zh:'华氏度' }, symbol:'°F' },
      { key: 'kelvin', name: { en:'Kelvin', zh:'开尔文' }, symbol:'K' },
    ]
  },
  {
    key: 'area',
    name: { en: 'Area', zh: '面积', ja: '面積', ko: '면적', es: 'Área', pt: 'Área' },
    icon: '📐',
    units: [
      { key: 'sqmm', name: { en:'Sq Millimeter', zh:'平方毫米' }, symbol:'mm²' },
      { key: 'sqcm', name: { en:'Sq Centimeter', zh:'平方厘米' }, symbol:'cm²' },
      { key: 'sqm', name: { en:'Sq Meter', zh:'平方米' }, symbol:'m²' },
      { key: 'sqkm', name: { en:'Sq Kilometer', zh:'平方公里' }, symbol:'km²' },
      { key: 'sqinch', name: { en:'Sq Inch', zh:'平方英寸' }, symbol:'in²' },
      { key: 'sqft', name: { en:'Sq Foot', zh:'平方英尺' }, symbol:'ft²' },
      { key: 'sqyard', name: { en:'Sq Yard', zh:'平方码' }, symbol:'yd²' },
      { key: 'acre', name: { en:'Acre', zh:'英亩' }, symbol:'ac' },
      { key: 'hectare', name: { en:'Hectare', zh:'公顷' }, symbol:'ha' },
    ]
  },
  {
    key: 'volume',
    name: { en: 'Volume', zh: '体积/容量', ja: '体積', ko: '부피', es: 'Volumen', pt: 'Volume' },
    icon: '🧪',
    units: [
      { key: 'ml', name: { en:'Milliliter', zh:'毫升' }, symbol:'mL' },
      { key: 'cl', name: { en:'Centiliter', zh:'厘升' }, symbol:'cL' },
      { key: 'l', name: { en:'Liter', zh:'升' }, symbol:'L' },
      { key: 'cubic_m', name: { en:'Cubic Meter', zh:'立方米' }, symbol:'m³' },
      { key: 'tsp', name: { en:'Teaspoon', zh:'茶匙' }, symbol:'tsp' },
      { key: 'tbsp', name: { en:'Tablespoon', zh:'汤匙' }, symbol:'tbsp' },
      { key: 'cup', name: { en:'Cup', zh:'杯' }, symbol:'cup' },
      { key: 'fl_oz', name: { en:'Fluid Ounce', zh:'液盎司' }, symbol:'fl oz' },
      { key: 'pint', name: { en:'Pint', zh:'品脱' }, symbol:'pt' },
      { key: 'quart', name: { en:'Quart', zh:'夸脱' }, symbol:'qt' },
      { key: 'gallon', name: { en:'Gallon', zh:'加仑' }, symbol:'gal' },
    ]
  },
  {
    key: 'speed',
    name: { en: 'Speed', zh: '速度', ja: '速度', ko: '속도', es: 'Velocidad', pt: 'Velocidade' },
    icon: '🚀',
    units: [
      { key: 'mps', name: { en:'Meter/sec', zh:'米/秒' }, symbol:'m/s' },
      { key: 'kmh', name: { en:'Km/hour', zh:'千米/小时' }, symbol:'km/h' },
      { key: 'mph', name: { en:'Mile/hour', zh:'英里/小时' }, symbol:'mph' },
      { key: 'knot', name: { en:'Knot', zh:'节' }, symbol:'kn' },
      { key: 'mach', name: { en:'Mach', zh:'马赫' }, symbol:'M' },
    ]
  },
  {
    key: 'data',
    name: { en: 'Data Storage', zh: '数据存储', ja: 'データ容量', ko: '데이터 저장', es: 'Almacenamiento', pt: 'Armazenamento' },
    icon: '💾',
    units: [
      { key: 'bit', name: { en:'Bit', zh:'位' }, symbol:'b' },
      { key: 'byte', name: { en:'Byte', zh:'字节' }, symbol:'B' },
      { key: 'kb', name: { en:'Kilobyte', zh:'千字节' }, symbol:'KB' },
      { key: 'mb', name: { en:'Megabyte', zh:'兆字节' }, symbol:'MB' },
      { key: 'gb', name: { en:'Gigabyte', zh:'吉字节' }, symbol:'GB' },
      { key: 'tb', name: { en:'Terabyte', zh:'太字节' }, symbol:'TB' },
      { key: 'pb', name: { en:'Petabyte', zh:'拍字节' }, symbol:'PB' },
    ]
  },
  {
    key: 'time',
    name: { en: 'Time', zh: '时间', ja: '時間', ko: '시간', es: 'Tiempo', pt: 'Tempo' },
    icon: '⏱️',
    units: [
      { key: 'ms', name: { en:'Millisecond', zh:'毫秒' }, symbol:'ms' },
      { key: 'second', name: { en:'Second', zh:'秒' }, symbol:'s' },
      { key: 'minute', name: { en:'Minute', zh:'分' }, symbol:'min' },
      { key: 'hour', name: { en:'Hour', zh:'时' }, symbol:'h' },
      { key: 'day', name: { en:'Day', zh:'天' }, symbol:'d' },
      { key: 'week', name: { en:'Week', zh:'周' }, symbol:'wk' },
      { key: 'month', name: { en:'Month', zh:'月' }, symbol:'mo' },
      { key: 'year', name: { en:'Year', zh:'年' }, symbol:'yr' },
    ]
  },
  {
    key: 'currency',
    name: { en: 'Currency', zh: '货币', ja: '通貨', ko: '통화', es: 'Moneda', pt: 'Moeda' },
    icon: '💵',
    units: [
      { key: 'usd', name: { en:'US Dollar', zh:'美元' }, symbol:'$' },
      { key: 'eur', name: { en:'Euro', zh:'欧元' }, symbol:'€' },
      { key: 'gbp', name: { en:'British Pound', zh:'英镑' }, symbol:'£' },
      { key: 'jpy', name: { en:'Japanese Yen', zh:'日元' }, symbol:'¥' },
      { key: 'cny', name: { en:'Chinese Yuan', zh:'人民币' }, symbol:'¥' },
      { key: 'aud', name: { en:'Australian Dollar', zh:'澳元' }, symbol:'A$' },
      { key: 'cad', name: { en:'Canadian Dollar', zh:'加元' }, symbol:'C$' },
      { key: 'chf', name: { en:'Swiss Franc', zh:'瑞士法郎' }, symbol:'CHF' },
      { key: 'hkd', name: { en:'Hong Kong Dollar', zh:'港币' }, symbol:'HK$' },
      { key: 'krw', name: { en:'Korean Won', zh:'韩元' }, symbol:'₩' },
    ]
  },
];

const SITE = {
  name: 'UnitConvert',
  domain: 'unit.toolconv.com',
  tagline: 'Free Online Unit Converter',
};

// ──── Helpers ────

function findCategory(key) {
  return CATEGORIES.find(c => c.key === key);
}

function findAllPairs() {
  const pairs = [];
  for (const cat of CATEGORIES) {
    const units = cat.units;
    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (i === j) continue;
        pairs.push({
          slug: `${units[i].key}-to-${units[j].key}`,
          from: units[i],
          to: units[j],
          categoryKey: cat.key,
          categoryName: cat.name.en,
          icon: cat.icon,
        });
      }
    }
  }
  return pairs;
}

// ──── SVG Template ────

/**
 * Generate a 1200×630 OG image SVG for a conversion pair.
 * 
 * Design:
 * - Dark gradient background (slate → purple)
 * - Category icon in top-left accent box
 * - Large "X to Y Converter" title
 * - Description line with symbols
 * - Site branding at bottom
 * - Subtle grid/graphic elements for visual interest
 */
function generatePairSVG(pair, locale = 'en') {
  const fromName = pair.from.name[locale] || pair.from.name.en;
  const toName = pair.to.name[locale] || pair.to.name.en;
  const fromSym = pair.from.symbol;
  const toSym = pair.to.symbol;
  const catName = pair.categoryName || pair.categoryKey;
  const icon = pair.icon || '⇄';

  // Escape XML special chars in text
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="50%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
    <linearGradient id="accentBox" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <!-- Subtle grid pattern -->
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
    <!-- Glow filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accentBar)"/>

  <!-- Border frame -->
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>

  <!-- Icon badge -->
  <g transform="translate(80, 100)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="url(#accentBox)"/>
    <text x="40" y="52" font-family="system-ui,sans-serif" font-size="36" text-anchor="middle" fill="white">${esc(icon)}</text>
  </g>

  <!-- Category label -->
  <text x="80" y="225" font-family="system-ui,sans-serif" font-size="18" fill="rgba(255,255,255,0.4)" letter-spacing="2" text-transform="uppercase">${esc(catName.toUpperCase())}</text>

  <!-- Main title: "X to Y Converter" -->
  <text x="80" y="290" font-family="system-ui,sans-serif" font-size="52" font-weight="800" fill="white">${esc(fromName)}</text>
  <text x="80" y="355" font-family="system-ui,sans-serif" font-size="48" font-weight="700" fill="url(#accentBar)">→ ${esc(toName)}</text>

  <!-- Description with symbols -->
  <text x="80" y="420" font-family="system-ui,sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">
    ${esc(`${fromName} (${fromSym}) → ${toName} (${toSym})`)} • Instant • Free
  </text>

  <!-- Bottom bar -->
  <rect x="80" y="490" width="300" height="44" rx="22" fill="rgba(255,255,255,0.06)"/>
  <text x="100" y="518" font-family="system-ui,sans-serif" font-size="18" font-weight="600" fill="rgba(255,255,255,0.8)">⚡ Free Online Converter</text>

  <!-- URL -->
  <text x="1000" y="530" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="rgba(255,255,255,0.3)" text-anchor="end">${SITE.domain}</text>

  <!-- Decorative dots -->
  <circle cx="1080" cy="100" r="4" fill="rgba(6,182,212,0.3)"/>
  <circle cx="1100" cy="100" r="4" fill="rgba(139,92,246,0.3)"/>
  <circle cx="1120" cy="100" r="4" fill="rgba(236,72,153,0.3)"/>
</svg>`;
}

/**
 * Generate a 1200×630 OG image SVG for a category page.
 */
function generateCategorySVG(category) {
  const catName = category.name.en;
  const icon = category.icon;
  const unitCount = category.units.length;
  const unitSymbols = category.units.map(u => u.symbol).join(', ');

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="50%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
    <linearGradient id="accentBox" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accentBar)"/>
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>

  <!-- Icon badge -->
  <g transform="translate(80, 100)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="url(#accentBox)"/>
    <text x="40" y="52" font-family="system-ui,sans-serif" font-size="36" text-anchor="middle" fill="white">${esc(icon)}</text>
  </g>

  <!-- Title -->
  <text x="80" y="250" font-family="system-ui,sans-serif" font-size="56" font-weight="800" fill="white">${esc(catName)}</text>
  <text x="80" y="310" font-family="system-ui,sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.6)">Unit Converter</text>

  <!-- Units preview -->
  <text x="80" y="390" font-family="system-ui,sans-serif" font-size="20" fill="rgba(255,255,255,0.5)">${esc(unitCount)} units: ${esc(unitSymbols)}</text>

  <!-- CTA -->
  <rect x="80" y="440" width="260" height="48" rx="24" fill="url(#accentBox)" opacity="0.15"/>
  <text x="210" y="471" font-family="system-ui,sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">⚡ Start Converting</text>

  <!-- URL -->
  <text x="1000" y="530" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="rgba(255,255,255,0.3)" text-anchor="end">${SITE.domain}</text>
</svg>`;
}

// ──── Main ────

function main() {
  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const pairs = findAllPairs();
  console.log(`Found ${pairs.length} conversion pairs across ${CATEGORIES.length} categories`);

  let generated = 0;

  // 1. Generate per-pair OG images (English)
  for (const pair of pairs) {
    const svg = generatePairSVG(pair, 'en');
    const filename = `pair-${pair.slug}.svg`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), svg, 'utf-8');
    generated++;
    if (generated % 50 === 0) {
      console.log(`  Generated ${generated}/${pairs.length} pair OG images...`);
    }
  }

  // 2. Generate per-category OG images
  for (const cat of CATEGORIES) {
    const svg = generateCategorySVG(cat);
    const filename = `category-${cat.key}.svg`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), svg, 'utf-8');
    generated++;
  }

  // 3. Generate home/root OG image
  const homeSVG = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accentBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="50%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
    <linearGradient id="accentBox" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#8b5cf6"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accentBar)"/>
  <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
  <g transform="translate(80, 100)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="url(#accentBox)"/>
    <text x="40" y="52" font-family="system-ui,sans-serif" font-size="36" text-anchor="middle" fill="white">⇄</text>
  </g>
  <text x="80" y="220" font-family="system-ui,sans-serif" font-size="18" fill="rgba(255,255,255,0.4)" letter-spacing="2">UNITCONVERT</text>
  <text x="80" y="290" font-family="system-ui,sans-serif" font-size="56" font-weight="800" fill="white">Any Unit → Any Unit</text>
  <text x="80" y="350" font-family="system-ui,sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.6)">Free Online Unit Converter</text>
  <text x="80" y="420" font-family="system-ui,sans-serif" font-size="22" fill="rgba(255,255,255,0.5)">🌍 6 Languages • 📊 9 Categories • ⚡ 480+ Conversions</text>
  <rect x="80" y="490" width="300" height="44" rx="22" fill="rgba(255,255,255,0.06)"/>
  <text x="100" y="518" font-family="system-ui,sans-serif" font-size="18" font-weight="600" fill="rgba(255,255,255,0.8)">⚡ Instant Conversion</text>
  <text x="1000" y="530" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="rgba(255,255,255,0.3)" text-anchor="end">${SITE.domain}</text>
</svg>`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'home.svg'), homeSVG, 'utf-8');
  generated++;

  console.log(`\n✅ Done! Generated ${generated} OG images in ${OUTPUT_DIR}`);
  console.log(`   (${pairs.length} tool pairs + ${CATEGORIES.length} categories + 1 home)`);

  // Verify
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.svg'));
  console.log(`   Total files: ${files.length}`);
}

main();
