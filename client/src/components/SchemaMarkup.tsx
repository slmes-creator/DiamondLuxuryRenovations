const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Diamond Luxury Renovation",
  "image": "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop",
  "url": "https://diamondluxuryrenovation.com",
  "telephone": "+1-416-414-9170",
  "email": "diamondluxuryrenovations@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.7315,
    "longitude": -79.7624
  },
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://facebook.com/diamondluxuryrenovation",
    "https://instagram.com/diamondluxuryrenovation"
  ],
  "areaServed": [
    { "@type": "City", "name": "Brampton" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Caledon" },
    { "@type": "City", "name": "Toronto" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Renovation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Staircase Refinishing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Framing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Renovations" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Renovations" } }
    ]
  }
};

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
