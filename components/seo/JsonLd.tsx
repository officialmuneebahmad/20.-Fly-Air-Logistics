import React from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FreightForwarder",
  name: "Fly Air Logistics",
  legalName: "Fly Air Logistics (International Freight Forwarders)",
  url: "https://flyairlogistics.com",
  logo: "https://flyairlogistics.com/logo.png",
  description:
    "Moving Your Cargo Worldwide from Pakistan Since 2012 (Roots from 1980s). International air freight, sea freight, customs clearance, and door-to-door delivery.",
  telephone: "+923255577711",
  email: "flyairlogistics.official@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "84 Brandreth Road",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  foundingDate: "2012",
  areaServed: [
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
  ],
  knowsAbout: [
    "Air Freight",
    "Sea Freight",
    "Customs Clearance",
    "LCL and FCL Consolidation",
    "Door to Door Cargo",
    "Export and Import Documentation",
    "Pakistan Single Window",
    "WeBOC",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fly Air Logistics",
  url: "https://flyairlogistics.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://flyairlogistics.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function createServiceSchema(service: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `https://flyairlogistics.com/services/${service.slug}`,
    provider: {
      "@type": "FreightForwarder",
      name: "Fly Air Logistics",
      url: "https://flyairlogistics.com",
      telephone: "+923255577711",
      email: "flyairlogistics.official@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "84 Brandreth Road",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://flyairlogistics.com/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://flyairlogistics.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Fly Air Logistics",
      logo: {
        "@type": "ImageObject",
        url: "https://flyairlogistics.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://flyairlogistics.com/blog/${post.slug}`,
    },
  };
}

export default JsonLd;

