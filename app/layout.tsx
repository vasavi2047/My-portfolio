import { ThemeProvider } from "@/components/layout/ThemeProvider";
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
  title: "Kongara Vasavi — Software Engineer",
  description:
    "Portfolio of Kongara Vasavi — Software Engineer specializing in full-stack development, system design, and modern web technologies.",
  keywords: [
    "Kongara Vasavi",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kongara Vasavi" }],
  openGraph: {
    title: "Kongara Vasavi — Software Engineer",
    description:
      "Building scalable, user-centric applications with clean architecture and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
