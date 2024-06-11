import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "../components/Navbar";
import { Readex_Pro } from "next/font/google";
import { Footer } from "../components/Footer";

const cairo = Readex_Pro({ subsets: ["latin"] });
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cairo.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
