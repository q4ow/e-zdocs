import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { FloatingIcon } from '@/components/floating-icon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://e-z.software'),
  title: 'E-Z Services Documentation',
  description: 'Unofficial documentation for E-Z Services',
  openGraph: {
    title: 'E-Z Services Documentation',
    description: 'Unofficial documentation for E-Z Services',
    images: [
      {
        url: 'https://assets.e-z.gg/e-ztransparent.png'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <div className="flex h-screen">
            <Navigation />
            <main className="flex-1 overflow-y-auto relative bg-gradient-to-b from-black via-blue-950/20 to-black">
              <FloatingIcon />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}