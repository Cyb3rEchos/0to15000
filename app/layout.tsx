import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0to15000 - Grow Your Business on X from Zero to 15K Followers",
  description: "Master X (Twitter) growth with proven strategies and tutorials. Learn how to build from 0 to 15,000 engaged followers and turn your audience into customers.",
  keywords: "X growth, Twitter followers, social media marketing, business growth, entrepreneur, digital marketing",
  authors: [{ name: "0to15000" }],
  openGraph: {
    title: "0to15000 - Grow Your Business on X",
    description: "Master X growth with proven strategies to reach 15,000 engaged followers",
    url: "https://0to15000.com",
    siteName: "0to15000",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0to15000 - Grow Your Business on X",
    description: "Master X growth with proven strategies to reach 15,000 engaged followers",
  },
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
