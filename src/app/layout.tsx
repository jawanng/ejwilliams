import './globals.css';
import './design-system.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';

// Typography config
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'E. Jerry Williams Lodge No. 141',
  description: 'Official website of E. Jerry Williams Lodge No. 141',
};

import { auth } from '@/auth';
import { handleSignOut } from '@/app/lib/actions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <div className="layout-wrapper flex flex-col min-h-screen">
          <Header session={session} handleSignOut={handleSignOut} />

          <main className="flex-grow-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
