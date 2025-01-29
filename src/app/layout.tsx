"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import { metadata } from "./metadata"; // Adjust path as necessary

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Global SEO Meta Tags */}
        <meta name="description" content={metadata.description ?? "Default Description"} />
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords ?? "default, keywords"} />
        {/* <meta property="og:title" content={metadata.openGraph?.title ?? "Default Title"} /> */}
        <meta property="og:description" content={metadata.openGraph?.description ?? "Default Description"} />
        {/* <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url ?? "default-image.jpg"} /> */}
        {/* <meta name="twitter:title" content={metadata.twitter?.title ?? "Default Title"} /> */}
        <meta name="twitter:description" content={metadata.twitter?.description ?? "Default Description"} />
        {/* <meta name="twitter:image" content={metadata.twitter?.images?.[0] ?? "default-image.jpg"} /> */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-light text-primary-dark flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
