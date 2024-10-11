import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Link from 'next/link';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Amel-Tech',
  description: `Müslüman yazılımcı topluluğu olan Amel-Tech, birbirimizi desteklediğimiz,
  geliştirdiğimiz, paylaştığımız bir platform olduğu gibi, ümmetin ihtiyaçlarına cevap verecek,
  hayatı kolaylaştıracak, insanlığın ilerleyişine katkıda bulunacak projeler geliştirir.`,
};

export default function RootLayout({
  children,
  themeToggler,
  burger,
}: Readonly<{
  children: React.ReactNode;
  themeToggler: React.ReactNode;
  burger: React.ReactNode;
}>) {
  return (
    <html lang="tr-TR" dir="ltr">
      <body className={clsx('antialiased max-w-screen-lg mx-auto px-4', jetBrainsMono.className)}>
        <header className="flex justify-between items-center py-4">
          <p className="text-3xl font-bold">Amel-Tech</p>
          <div className="flex items-center gap-x-4">
            <Link
              className="border border-dashed border-foreground px-2 py-1 mx-4 text-center"
              href="/bagis-yapin"
            >
              Bağış Yapın
            </Link>
            {themeToggler}
            {burger}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
