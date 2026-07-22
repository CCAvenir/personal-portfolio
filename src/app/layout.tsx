import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Avenir | Web Developer Portfolio",
  description:
    "Production-ready personal portfolio of Christian Avenir, Web Developer specializing in Next.js, React, TypeScript, and modern web architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
