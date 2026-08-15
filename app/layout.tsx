import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { nurseryContact } from "@/data/contact";
import { siteUrl } from "@/data/site";

const siteDescription =
  "Krushna Nursery Satara offers indoor plants, outdoor plants, succulents, flowering plants, pots, and friendly plant care guidance near Bombay Restaurant Chowk, Satara.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Krushna Nursery Satara | Plants & Garden Nursery Near You",
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Krushna Nursery Satara",
    title: "Krushna Nursery Satara | Plants & Garden Nursery Near You",
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: "Krushna Nursery Satara | Plants & Garden Nursery Near You",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  "@id": `${siteUrl}/#local-business`,
  name: nurseryContact.name,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  telephone: `+91-${nurseryContact.phoneDisplay}`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Bombay Restaurant Chowk, Satara - Koregaon Road, Visawa Park, Sadar Bazar, Pirwadi, Vanvaswadi",
    addressLocality: "Satara",
    addressRegion: "Maharashtra",
    postalCode: "415003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.6868181,
    longitude: 74.0273218,
  },
  hasMap: nurseryContact.mapsUrl,
  areaServed: {
    "@type": "City",
    name: "Satara",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800&f[]=satoshi@400,500,600,700&display=swap"
        rel="stylesheet"
      />
    </head>

    <body className="min-h-screen font-sans antialiased">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
    <Navbar />
    {children}
    </body>
    </html>
  );
}
