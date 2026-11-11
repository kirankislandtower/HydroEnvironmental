// SEO configuration for heesllc.ae — keyword map from the capability profile (p.12).
// TODO: confirm the live domain before launch.
import { company, divisionNav, faqs } from "./content";

export const siteUrl = "https://www.heesllc.ae";

export const seo = {
  title: "Hydro Environmental & Engineering Services | UAE",
  shortTitle: "Chem-Mechanical Process Engineering in UAE",
  description:
    "UAE chem-mechanical process engineering since 2008: chilled water flushing, pre-commissioning, hydrotesting, chemical treatment and equipment rental.",
};

/** Primary + secondary keywords (grouped by search intent). */
export const keywords = [
  // primary
  "chem-mechanical engineering UAE", "chilled water flushing UAE", "pipeline pre-commissioning UAE",
  "hydrotesting services UAE", "chemical cleaning UAE", "industrial commissioning UAE",
  "fluid systems engineering", "district cooling flushing", "equipment rental UAE", "engineered pump packages",
  // district cooling
  "district cooling network flushing", "ETS works", "chilled water system flushing", "DCP piping support",
  "CHW chemical treatment", "chilled water hydrotesting", "side stream filtration", "thermal utility commissioning",
  // industrial
  "factory utility installation", "process piping UAE", "industrial plant commissioning", "RO plant commissioning",
  "STP installation support", "boiler cleaning UAE", "heavy fuel line flushing", "industrial water treatment",
  "contaminated water treatment", "chemical pickling UAE", "passivation services UAE",
  // cleaning
  "UHP water jetting UAE", "hydro-demolition UAE", "heat exchanger cleaning UAE", "wet abrasive blasting",
  // equipment
  "pump rental UAE", "diesel pump rental", "flushing skid rental", "filtration skid rental", "hydrotest pump rental",
  "generator rental UAE", "air compressor rental UAE", "dewatering pump rental", "UHP pump rental", "water jetting equipment",
  // local
  "chilled water flushing Dubai", "chilled water flushing Abu Dhabi", "pre-commissioning company Sharjah",
];

/** JSON-LD for Google rich results: Organization/LocalBusiness, WebSite and FAQ. */
export function structuredData() {
  const org = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    alternateName: ["HEES", "Hydro Environmental", "Hydro Engineering & Environmental Services"],
    url: siteUrl,
    logo: `${siteUrl}/opengraph-image`,
    image: `${siteUrl}/opengraph-image`,
    description: seo.description,
    slogan: company.tagline,
    foundingDate: company.established,
    email: company.email,
    telephone: company.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Sajaa Industrial Area",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      postOfficeBoxNumber: "61204",
      addressCountry: "AE",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    parentOrganization: { "@type": "Organization", name: "Island Tower Group of Companies" },
    knowsAbout: [
      "Chem-mechanical process engineering", "Pipeline pre-commissioning", "Chilled water flushing", "District cooling",
      "Hydrotesting", "Leak testing", "Chemical cleaning", "Chemical pickling", "Passivation", "Side-stream filtration",
      "Industrial commissioning", "Factory utilities", "RO plant commissioning", "Sewage treatment plants",
      "UHP water jetting", "Hydro-demolition", "Heat exchanger cleaning", "Pump packages", "Equipment rental",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core business divisions",
      itemListElement: divisionNav.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.title, description: d.desc, url: `${siteUrl}${d.href}`, areaServed: "AE" },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-AE",
  };

  return { "@context": "https://schema.org", "@graph": [org, website] };
}

/** FAQPage JSON-LD — published on /resources, where the FAQ is visible. */
export function faqStructuredData() {
  const faq = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/resources#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { "@context": "https://schema.org", ...faq };
}

/** Serialise JSON-LD safely for a <script type="application/ld+json"> tag. */
export const ldJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

/** BreadcrumbList for inner pages (the current page is the last item, without a URL). */
export function breadcrumbData(trail: { name: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", href: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      ...(t.href ? { item: `${siteUrl}${t.href === "/" ? "" : t.href}` } : {}),
    })),
  };
}

/** Service schema for a division / equipment page, linked to the Organization on the home page. */
export function serviceData(p: { name: string; description: string; path: string; type: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.name,
    serviceType: p.type,
    description: p.description,
    url: `${siteUrl}${p.path}`,
    provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#organization`, name: company.name, telephone: company.phone.replace(/\s/g, "") },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
  };
}
