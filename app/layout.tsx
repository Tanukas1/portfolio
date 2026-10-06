import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tanukashyap.dev"),
  title: {
    default: "Tanu Kashyap | Full-Stack Developer (Laravel, React.js, Next.js)",
    template: "%s | Tanu Kashyap",
  },
  description:
    "Portfolio of Tanu Kashyap — Full-Stack Developer crafting responsive interfaces, scalable web applications, custom Laravel admin panels, and Next.js digital experiences based in Lucknow, India.",
  keywords: [
    "Tanu Kashyap",
    "Full-Stack Developer",
    "Laravel Developer",
    "React.js Developer",
    "Next.js Developer",
    "Web Developer Lucknow",
    "Admin Panel Developer",
    "PHP MySQL Developer",
    "Frontend Engineer",
    "MCA Developer",
  ],
  authors: [{ name: "Tanu Kashyap" }],
  creator: "Tanu Kashyap",
  publisher: "Tanu Kashyap",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tanukashyap.dev",
    siteName: "Tanu Kashyap Portfolio",
    title: "Tanu Kashyap | Full-Stack Developer (Laravel, React.js, Next.js)",
    description:
      "Full-Stack Developer crafting responsive interfaces, dynamic web applications, powerful admin panels, and API-driven digital experiences.",
    images: [
      {
        url: "/images/projects/knk-awadh.webp",
        width: 1440,
        height: 900,
        alt: "Tanu Kashyap Full-Stack Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanu Kashyap | Full-Stack Developer",
    description:
      "Crafting responsive interfaces, dynamic web apps, and custom Laravel admin panels with Next.js, React, and Laravel.",
    images: ["/images/projects/knk-awadh.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#08090e] text-slate-100 antialiased selection:bg-violet-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
