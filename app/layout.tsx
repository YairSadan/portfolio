import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Yair Sadan - Backend & Full-Stack Engineer",
    template: "%s | Yair Sadan",
  },
  description:
    "Backend & Full-Stack Engineer crafting reliable, scalable systems with modern tooling. Specializing in C#/.NET and TypeScript/Node.js.",
  keywords: [
    "Backend Engineer",
    "Full-Stack Developer",
    "C#",
    ".NET",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Web Development",
    "API Development",
    "Yair Sadan",
  ],
  authors: [{ name: "Yair Sadan" }],
  creator: "Yair Sadan",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Yair Sadan - Backend & Full-Stack Engineer",
    description:
      "Backend & Full-Stack Engineer crafting reliable, scalable systems with modern tooling.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Yair Sadan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yair Sadan - Backend & Full-Stack Engineer",
    description:
      "Backend & Full-Stack Engineer crafting reliable, scalable systems with modern tooling.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO
  // Note: This data is from static configuration (siteConfig), not user input
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yair Sadan",
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.avatar}`,
    jobTitle: "Backend & Full-Stack Engineer",
    description:
      "Backend & Full-Stack Engineer crafting reliable, scalable systems with modern tooling.",
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
    knowsAbout: [
      "C#",
      ".NET",
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "Web Development",
      "API Development",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
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
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
