'use client';

import { useEffect } from 'react';

/**
 * 语言检测优先级：
 * 1. localStorage 中用户之前手动选择的语言
 * 2. navigator.language（浏览器首选语言）
 * 3. navigator.languages（完整语言列表，逐项匹配）
 * 4. 默认 fallback: 'en'
 */
const SUPPORTED_LOCALES = ['en', 'zh', 'ja', 'ko', 'es', 'pt'] as const;

function normalizeLocale(raw: string): string | null {
  // 'zh-CN', 'zh-TW', 'zh-Hans' → 'zh'
  // 'en-US', 'en-GB' → 'en'
  // 'ja-JP' → 'ja'
  // 'ko-KR' → 'ko'
  // 'es-ES', 'es-MX' → 'es'
  // 'pt-BR', 'pt-PT' → 'pt'
  const base = raw.split('-')[0].toLowerCase();
  if (SUPPORTED_LOCALES.includes(base as typeof SUPPORTED_LOCALES[number])) {
    return base;
  }
  return null;
}

function detectLocale(): string {
  // Layer 1: localStorage 保存的偏好（用户之前手动切换过的）
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('locale');
      if (saved && SUPPORTED_LOCALES.includes(saved as typeof SUPPORTED_LOCALES[number])) {
        return saved;
      }
    } catch { /* localStorage 不可用时忽略 */ }
  }

  // Layer 2: navigator.language（浏览器首选语言）
  if (typeof navigator !== 'undefined') {
    const match = normalizeLocale(navigator.language);
    if (match) return match;
  }

  // Layer 3: navigator.languages（完整优先级列表）
  if (typeof navigator !== 'undefined' && navigator.languages) {
    for (const lang of navigator.languages) {
      const match = normalizeLocale(lang);
      if (match) return match;
    }
  }

  // Layer 4: 默认英文
  return 'en';
}

export default function RootPage() {
  useEffect(() => {
    const locale = detectLocale();
    window.location.replace(`/${locale}/`);
  }, []);
  return null;
}
