import { LOCALES, CATEGORIES, ALL_PAIRS } from '@/lib/conversions';
import type { Locale } from '@/lib/conversions';
import { SITE, generateHomeMeta } from '@/lib/seo';
import Link from 'next/link';

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateHomeMeta(params.locale as Locale);
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {SITE.tagline[locale]}
          </span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          {SITE.description[locale]}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            📊 {ALL_PAIRS.length.toLocaleString()}+ {locale === 'zh' ? '组换算' : locale === 'ja' ? '変換ペア' : locale === 'ko' ? '변환 쌍' : locale === 'es' ? 'pares' : locale === 'pt' ? 'pares' : 'pairs'}
          </span>
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            🌍 {LOCALES.length} {locale === 'zh' ? '种语言' : locale === 'ja' ? '言語' : locale === 'ko' ? '개 언어' : locale === 'es' ? 'idiomas' : locale === 'pt' ? 'idiomas' : 'languages'}
          </span>
          <span className="text-sm text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] px-3 py-1 rounded-full">
            ⚡ {locale === 'zh' ? '即时计算' : locale === 'ja' ? '即時計算' : locale === 'ko' ? '즉시 계산' : locale === 'es' ? 'Instantáneo' : locale === 'pt' ? 'Instantâneo' : 'Instant'}
          </span>
        </div>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map(cat => {
          const pairCount = ALL_PAIRS.filter(p => p.categoryKey === cat.key).length;
          const firstPair = ALL_PAIRS.find(p => p.categoryKey === cat.key)!;
          return (
            <Link
              key={cat.key}
              href={`/${locale}/convert/${firstPair.slug}/`}
              className="card p-6 group cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cat.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-500 transition-colors">
                    {cat.name[locale] || cat.name.en}
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    {pairCount} {locale === 'zh' ? '组换算' : 'pairs'}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.units.slice(0, 5).map(u => (
                      <span key={u.key} className="text-xs bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                        {u.symbol}
                      </span>
                    ))}
                    {cat.units.length > 5 && (
                      <span className="text-xs bg-[var(--bg-tertiary)] px-2 py-0.5 rounded-full">
                        +{cat.units.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* How it Works */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-8">
          {locale === 'zh' ? '如何使用' : locale === 'ja' ? '使い方' : locale === 'ko' ? '사용 방법' : locale === 'es' ? 'Cómo usar' : locale === 'pt' ? 'Como usar' : 'How to Use'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '1️⃣', title: locale === 'zh' ? '选择类别' : locale === 'ja' ? 'カテゴリを選択' : locale === 'ko' ? '카테고리 선택' : 'Pick a Category', desc: locale === 'zh' ? '长度、重量、温度等 9 大类' : locale === 'ja' ? '長さ、重さ、温度など9カテゴリ' : locale === 'ko' ? '길이, 무게, 온도 등 9개 카테고리' : 'Length, weight, temperature & more' },
            { icon: '2️⃣', title: locale === 'zh' ? '输入数值' : locale === 'ja' ? '数値を入力' : locale === 'ko' ? '값 입력' : 'Enter Value', desc: locale === 'zh' ? '输入数字，即时获得换算结果' : locale === 'ja' ? '数字を入力すると即座に変換結果が表示' : locale === 'ko' ? '숫자를 입력하면 즉시 변환 결과 표시' : 'Type a number, get instant results' },
            { icon: '3️⃣', title: locale === 'zh' ? '自由切换单位' : locale === 'ja' ? '単位を切り替え' : locale === 'ko' ? '단위 전환' : 'Swap Units', desc: locale === 'zh' ? '下拉菜单切换任意单位' : locale === 'ja' ? 'ドロップダウンで任意の単位に切替' : locale === 'ko' ? '드롭다운으로 모든 단위 전환' : 'Switch between any units instantly' },
          ].map((step, i) => (
            <div key={i} className="card p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--text-tertiary)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
