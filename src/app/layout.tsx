import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'UnitConvert — Free Online Unit Converter',
  description: 'Free online unit converter. Length, weight, temperature, area, volume, speed, data, time & currency.',
  openGraph: {
    type: 'website',
    siteName: 'UnitConvert',
    images: [{ url: 'https://unit.toolconv.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@toolconv',
    images: ['https://unit.toolconv.com/og-image.png'],
  },
};

/// Root layout — minimal shell. [locale]/layout.tsx sets <html lang> dynamically.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
