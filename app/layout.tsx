import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { FloatingIcon } from '@/components/floating-icon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Z.GG Documentation',
  description: 'Official documentation for E-Z.GG platform',
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
            <main className="flex-1 overflow-y-auto relative">
              <FloatingIcon />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}