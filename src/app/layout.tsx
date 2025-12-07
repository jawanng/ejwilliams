import './globals.css';
import './design-system.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'E. Jerry Williams Lodge No. 141',
  description: 'Official website of E. Jerry Williams Lodge No. 141',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <div className="layout-wrapper">
          {/* Navigation will go here - TODO: Extract to component */}
          <nav style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)', padding: '1rem 0' }}>
            <div className="container flex justify-between items-center">
              <div style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                E. Jerry Williams Lodge No. 141
              </div>
              <div className="flex gap-md">
                <a href="/" style={{ color: 'var(--color-white)' }}>Home</a>
                <a href="/events" style={{ color: 'var(--color-white)' }}>Events</a>
                <a href="/join" style={{ color: 'var(--color-white)' }}>Join</a>
                <a href="/login" className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}>Member Login</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
          <footer style={{ backgroundColor: '#111', color: '#888', padding: '2rem 0', marginTop: 'auto' }}>
            <div className="container text-center">
              <p>&copy; {new Date().getFullYear()} E. Jerry Williams Lodge No. 141. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
