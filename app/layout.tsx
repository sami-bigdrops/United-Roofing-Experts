import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "United Roofing Experts - Roofing Repair & Installation",
  description: "Looking for reliable roofing services? United Roofing Experts provides professional roof repairs and installations to keep your family safe and dry. Trust our experienced team to protect your most valuable asset - your home.",
  keywords: "roofing repair, roofing installation, roofing services, roof repair, roof installation, roof replacement, roof maintenance, roof repair services, roof installation services, roof replacement services, roof maintenance services",
  authors: [{ name: "United Roofing Experts" }],
  creator: "United Roofing Experts",
  publisher: "United Roofing Experts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unitedroofingexperts.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "United Roofing Experts - Roofing Repair & Installation",
    description: "Looking for reliable roofing services? United Roofing Experts provides professional roof repairs and installations to keep your family safe and dry. Trust our experienced team to protect your most valuable asset - your home.",
    url: 'https://unitedroofingexperts.com',
    siteName: 'United Roofing Experts',
    images: [
      {
        url: '/favicon.webp',
        width: 1200,
        height: 630,
        alt: 'United Roofing Experts Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "United Roofing Experts - Roofing Repair & Installation",
    description: "Looking for reliable roofing services? United Roofing Experts provides professional roof repairs and installations to keep your family safe and dry. Trust our experienced team to protect your most valuable asset - your home.",
    images: ['/favicon.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.webp?v=2', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon.webp?v=2', sizes: '16x16', type: 'image/webp' },
    ],
    shortcut: '/favicon.webp?v=2',
    apple: '/favicon.webp?v=2',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "language": "English",
    "rating": "general",
    "copyright": "United Roofing Experts",
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.webp?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.webp?v=3" />
        <link rel="shortcut icon" href="/favicon.webp?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.webp?v=3" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
          className="antialiased"
          style={{ fontFamily: 'Onest, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
