import React from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../index.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://quickbills.vercel.app"),
  title: {
    default: "QuickBills - Free Online Invoice Generator & Invoicing Guides",
    template: "%s | QuickBills",
  },
  description:
    "Create professional invoices in minutes with QuickBills. Free browser-based invoice generator, invoice templates, and step-by-step invoicing guides for freelancers and small businesses.",
  keywords: [
    "invoice generator",
    "free invoice generator",
    "create invoice online",
    "invoice templates",
    "billing software",
    "freelance invoice",
    "small business invoice",
    "quickbills",
  ],
  authors: [{ name: "QuickBills Team" }],
  creator: "QuickBills",
  publisher: "QuickBills",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QuickBills - Free Online Invoice Generator & Invoicing Guides",
    description:
      "Create professional invoices in minutes with QuickBills. Free browser-based invoice generator, invoice templates, and step-by-step invoicing guides.",
    url: "https://quickbills.vercel.app",
    siteName: "QuickBills",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "QuickBills Free Invoice Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickBills - Free Online Invoice Generator & Invoicing Guides",
    description:
      "Create professional invoices in minutes with QuickBills. Free browser-based invoice generator, invoice templates, and step-by-step invoicing guides.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google AdSense Site Verification */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6821531199235214"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HJX9630DVF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HJX9630DVF');
          `}
        </Script>
      </head>
      <body>
        <div className="App">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
