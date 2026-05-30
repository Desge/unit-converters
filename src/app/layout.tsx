import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'UnitConvert — Free Online Unit Converter',
  description: 'Free online unit converter. Length, weight, temperature, area, volume, speed, data, time & currency.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme init — inline script to prevent FOUC */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
        }} />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
