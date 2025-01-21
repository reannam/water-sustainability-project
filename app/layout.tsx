import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "AquaAlert NI",
  description: "App for water sustainability project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main> {/* Main content takes up available space */}
        <Footer />
      </body>
    </html>
  );
}
