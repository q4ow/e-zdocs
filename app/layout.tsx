import "./globals.css";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { FloatingIcon } from "@/components/floating-icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://e-z.software"),
  title: "E-Z Services Documentation",
  description: "Official documentation for E-Z Services",
  openGraph: {
    title: "E-Z Services Documentation",
    description: "Official documentation for E-Z Services",
    images: [
      {
        url: "https://assets.e-z.gg/e-ztransparent.png",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
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
              <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-zinc-950"></div>
              <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-transparent via-blue-950/10 to-transparent animate-pulse"></div>
              <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
              <div className="fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
