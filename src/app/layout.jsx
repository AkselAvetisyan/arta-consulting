import amMessages from "../../public/locales/am.json";
import enMessages from "../../public/locales/en.json";
import ruMessages from "../../public/locales/ru.json";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";
import RootPage from "@/app/RootPage";

const messages = {
  en: enMessages,
  am: amMessages,
  ru: ruMessages,
};

export const metadata = {
  metadataBase: new URL('https://artaconsulting.am'),
  openGraph: {
    type: 'website',
    url: 'https://artaconsulting.am/',
    images: ['https://artaconsulting.am/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://artaconsulting.am/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default async function RootLayout({children}) {

  const locale = await getLocale();

  return (
      <html lang={locale}>
      <head>
        <meta charSet="utf-8"/>
        <meta name="author" content="artaconsulting.am"/>
        <meta name="apple-mobile-web-app-title" content="Arta Consulting"/>
        <meta property="og:type" content="website"/>
      </head>
      <body suppressHydrationWarning={true}>
      <NextIntlClientProvider messages={messages[locale]} locale={locale}>
        <RootPage pages={children}/>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
