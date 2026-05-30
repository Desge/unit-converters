import { LOCALES } from '@/lib/conversions';
import { generateHomeMeta } from '@/lib/seo';
import type { Locale } from '@/lib/conversions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return generateHomeMeta(params.locale as Locale);
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header locale={params.locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={params.locale as Locale} />
    </>
  );
}
