import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yair Sadan - Portfolio",
  description: "Yair Sadan's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <main className="flex flex-col flex-1">
              <SiteHeader />
              {children}
            </main>
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
