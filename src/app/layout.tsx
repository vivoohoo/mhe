import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://varunengineering.co.in"),
  title: "Varun Engineering | Material Handling Equipment Supplier Gujarat | Industrial Warehouse Solutions",
  description: "Premium material handling equipment in Gujarat. Hydraulic pallet trucks, stackers & warehouse solutions. Boost efficiency 40%. Request quote today!",
  keywords: "material handling equipment supplier Gujarat, hydraulic pallet trucks, industrial warehouse equipment, material handling solutions, warehouse stackers, pallet truck supplier Ahmedabad",
  openGraph: {
    title: "Material Handling Equipment Supplier Gujarat | Industrial Warehouse Solutions",
    description: "Get premium material handling equipment in Gujarat. Hydraulic pallet trucks, stackers & warehouse solutions. Boost efficiency 40%. Request quote today!",
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
  alternates: {
    canonical: "https://varunengineering.co.in",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
    {/* Google tag (gtag.js) - Optimized for INP */}
    <script defer src="https://www.googletagmanager.com/gtag/js?id=G-XZLDJ843TH"></script>
    <script>
      {`
        // Defer Google Analytics initialization until idle time
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZLDJ843TH');
          });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XZLDJ843TH');
          }, 2000); // Delay by 2 seconds
        }
      `}
    </script>
    {/* End Google Tag Manager */}

    <link rel="icon" href="/favicon.ico" />
    <meta name="google-site-verification" content="your-verification-code" />

    {/* Explicit canonical (self-referencing) */}
    <link rel="canonical" href="https://varunengineering.co.in" />

    {/* Mobile viewport - Emergency fix */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Explicit SEO meta tags to satisfy scanners */}
    <meta
      name="description"
      content="Varun Engineering suppliers of hydraulic pallet trucks, manual & electric stackers, lift tables, and customized industrial material handling solutions. Trusted for quality, durability, and customer support."
    />
    <meta
      name="keywords"
      content="material handling equipment supplier Gujarat, hydraulic pallet trucks, industrial warehouse equipment, material handling solutions, warehouse stackers, pallet truck supplier Ahmedabad"
    />

        {/* Local Business Schema (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Varun Engineering",
              url: "https://www.varunengineering.com",
              telephone: "+918200158816",
              email: "varunengineering24@hotmail.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: ["Ahmedabad", "Vadodara", "Surat", "Rajkot", "Bhavnagar"],
              sameAs: [
                "https://www.facebook.com/share/1A21nd3ABf/",
                "https://instagram.com",
                "https://linkedin.com"
              ]
            }),
          }}
        />
        {/* Additional Structured Data: WebPage and Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Varun Engineering - Material Handling Equipment Supplier",
              "description": "Premium material handling equipment in Gujarat including hydraulic pallet trucks, stackers, and warehouse solutions.",
              "url": "https://varunengineering.co.in",
              "publisher": {
                "@type": "Organization",
                "name": "Varun Engineering",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/logo.png"
                }
              }
            }),
          }}
        />

        {/* Hreflang Tags - Based on audit, adding en-us as primary; add more if variants exist */}
        <link rel="alternate" hrefLang="en-us" href="https://varunengineering.co.in" />
        {/* Example for Spanish variant - Remove or adjust based on actual variants */}
        <link rel="alternate" hrefLang="es-es" href="https://varunengineering.co.in/es" />

      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-XZLDJ843TH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}