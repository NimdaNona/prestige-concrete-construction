import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreviewBanner from "@/components/PreviewBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prestige Concrete and Construction LLC | Dayton, OH",
  description: "Premium residential and commercial concrete services in Dayton, Ohio. Driveways, patios, sidewalks, foundations, and more. Over 15 years of quality craftsmanship.",
  keywords: "concrete contractor, Dayton Ohio, driveways, patios, foundations, sidewalks, commercial concrete, residential concrete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PreviewBanner />
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
