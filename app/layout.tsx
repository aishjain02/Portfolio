import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aishwarye Jain — Product Builder",
  description:
    "Product builder at the intersection of AI, Consumer Tech & Automation. Building products that turn messy workflows into simple, measurable systems.",
  keywords: [
    "Product Manager",
    "AI Products",
    "Consumer Tech",
    "Zepto",
    "Product Builder",
    "APM",
    "Aishwarye Jain",
  ],
  authors: [{ name: "Aishwarye Jain" }],
  openGraph: {
    title: "Aishwarye Jain — Product Builder",
    description:
      "Building products at the intersection of AI, Consumer Tech & Automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishwarye Jain — Product Builder",
    description:
      "Building products at the intersection of AI, Consumer Tech & Automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
