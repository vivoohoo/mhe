import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varun Engineering - Material Handling Equipment Manufacturer Gujarat",
  description: "Leading manufacturer of hydraulic pallet trucks, stackers, and material handling equipment in Gujarat. Offering 3-ton capacity trucks, custom solutions, and 24/7 support.",
  keywords: "material handling equipment, pallet truck supplier, hydraulic pallet jack, industrial lifting solutions, warehouse equipment manufacturer, 3 ton pallet truck, material handling Gujarat, Varun Engineering",
  openGraph: {
    title: "Varun Engineering - Material Handling Solutions",
    description: "Premium material handling equipment manufacturer in Gujarat. Specializing in hydraulic pallet trucks, stackers, and custom solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varun Engineering Material Handling Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  alternates: {
    canonical: "https://www.varunengineering.com",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>{children}</body>
    </html>
  );
}