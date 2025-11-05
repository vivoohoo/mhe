import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varun Engineering | Pallet Trucks, Stackers & MHE Gujarat", // increased length + keyword-rich
  description: "Varun Engineering Supplier of hydraulic pallet trucks (3 ton, 685x1220 & 550x1150), manual & electric stackers, lift tables, and customized industrial material handling solutions. Trusted for quality, durability, and customer support.",
  keywords: "material handling equipment, pallet truck supplier, hydraulic pallet jack, industrial lifting solutions, warehouse equipment supplier, 3 ton pallet truck 685x1220, 550x1150, Varun Engineering",
  openGraph: {
    title: "Varun Engineering - Material Handling Solutions",
    description: "Premium material handling equipment suppliers in Gujarat. Specializing in hydraulic pallet trucks, stackers, and custom solutions.",
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
    canonical: "https://www.varunengineering.co.in",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTJKBDMR');`,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="your-verification-code" />

        {/* Explicit canonical (in addition to metadata.alternates) */}
        <link rel="canonical" href="https://www.varunengineering.co.in" />

        {/* Explicit viewport for mobile usability */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Explicit SEO meta tags to satisfy scanners */}
        <meta
          name="description"
          content="Varun Engineering suppliers of hydraulic pallet trucks (3 ton, 685x1220 & 550x1150), manual & electric stackers, lift tables, and customized industrial material handling solutions. Trusted for quality, durability, and customer support."
        />
        <meta
          name="keywords"
          content="material handling equipment, pallet truck supplier, hydraulic pallet jack, industrial lifting solutions, warehouse equipment supplier, 3 ton pallet truck 685x1220, 550x1150, Varun Engineering"
        />

        {/* Google Analytics (replace G-XXXXXXXXXX with your property ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
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
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTJKBDMR"
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