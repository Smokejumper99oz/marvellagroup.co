import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvella Group™ | Software, Platforms & Technology Ventures",
  description:
    "Marvella Group builds innovative software, platforms and technology ventures. Creator of CrewRules™, HOTcalc™, and FastMX™.",
  openGraph: {
    title: "Marvella Group™ | Software, Platforms & Technology Ventures",
    description:
      "Marvella Group builds innovative software, platforms and technology ventures. Creator of CrewRules™, HOTcalc™, and FastMX™.",
    url: "https://marvellagroup.co",
    siteName: "Marvella Group",
    images: [
      {
        url: "/meta-marvella.jpg",
        width: 1200,
        height: 630,
        alt: "Marvella Group – Software, Platforms & Ventures"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvella Group™ | Software, Platforms & Technology Ventures",
    description:
      "Software platforms and ventures including CrewRules™, HOTcalc™, and FastMX™.",
    images: ["/meta-marvella.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
