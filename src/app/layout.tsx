import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavBar } from "./components/NavBar";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folhas da Amazônia",
  description: "Generated by Alana Prado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
<body className={clsx("font-sans text-gray-900 bg-gray-100", geistSans, inter, geistMono)}>
      <NavBar />
      <main className=" h-screen p-16">{children}</main>
    </body>
    </html>
  );
}
