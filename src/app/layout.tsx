import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
const readexpro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yousef Saeed Portfolio",
  verification: {
    google: "LIA6kfoVjBnJ38tasY6ZNi9ingMGRdSnFTS0C3dWkdI",
  },
  description:
    "Discover the portfolio of Yousef Saeed, a skilled web developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Explore his projects, skills, and professional journey.",
  openGraph: {
    title: "Yousef Saeed Portfolio",
    description:
      "Discover the portfolio of Yousef Saeed, a skilled web developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. Explore his projects, skills, and professional journey.",
    images: [
      {
        url: "/opengraph.jpeg",
        width: 1280,
        height: 720,
        alt: "Portfolio Open Graph Image",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={readexpro.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
