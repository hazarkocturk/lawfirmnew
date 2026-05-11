import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "sonner";

import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["300", "400", "700"],
});

const siteUrl = "https://kocturksahinhukuk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ankara Avukat | Koçtürk & Şahin Hukuk Bürosu",
  description:
    "Ankara Koçtürk & Şahin Hukuk Bürosu — ceza, aile, iş ve gayrimenkul hukuku alanlarında uzman avukat kadrosuyla hukuki danışmanlık ve dava takibi.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Koçtürk & Şahin Hukuk Bürosu",
    title: "Ankara Avukat | Koçtürk & Şahin Hukuk Bürosu",
    description:
      "Ankara Koçtürk & Şahin Hukuk Bürosu — ceza, aile, iş ve gayrimenkul hukuku alanlarında uzman avukat kadrosuyla hukuki danışmanlık ve dava takibi.",
    images: [
      {
        url: "/hero-section.jpeg",
        width: 1920,
        height: 1080,
        alt: "Koçtürk & Şahin Hukuk Bürosu — Ankara Avukatlık Ofisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankara Avukat | Koçtürk & Şahin Hukuk Bürosu",
    description:
      "Ankara Koçtürk & Şahin Hukuk Bürosu — ceza, aile, iş ve gayrimenkul hukuku alanlarında uzman avukat kadrosuyla hukuki danışmanlık ve dava takibi.",
    images: ["/hero-section.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Koçtürk & Şahin Hukuk Bürosu",
  description:
    "Ankara'da faaliyet gösteren, bireysel ve kurumsal müvekkillere ceza, aile, iş, gayrimenkul ve şirketler hukuku alanlarında geniş kapsamlı hukuki hizmetler sunan avukatlık bürosu.",
  url: siteUrl,
  telephone: "+90 312 435 68 86",
  email: "kocturksahinhukukburosu@gmail.com",
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/hero-section.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mustafa Kemal Mahallesi Barış Sitesi 2161. Sokak No:6",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06510",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9104446,
    longitude: 32.7584637,
  },
  sameAs: [
    "https://www.linkedin.com/company/kocturk-sahin-law-office",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: {
    "@type": "City",
    name: "Ankara",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hukuki Hizmetler",
    itemListElement: [
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Ceza Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Aile Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "İş ve Sosyal Güvenlik Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Gayrimenkul Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Şirketler Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Tüketici Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Kişisel Verilerin Korunması Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "İdare Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Fikri ve Sınai Mülkiyet Hukuku" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Arabuluculuk" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${robotoCondensed.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
