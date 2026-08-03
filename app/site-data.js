export const siteUrl = "https://ajuzieogu.com";
export const siteName = "Uchechukwu Ajuzieogu";
export const email = "uche@ajuzieogu.com";
export const siteDescription =
  "The official portfolio of Uchechukwu “Apex” Ajuzieogu—technologist, author, AI economics and policy researcher, educator and entrepreneur.";
export const ogImage = `${siteUrl}/og.png`;

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/books", label: "Books" },
  { href: "/speaking", label: "Speaking" },
  { href: "/insights", label: "Insights" },
];

export const socialLinks = [
  { href: "https://www.linkedin.com/in/uchechukwu-ajuzieogu", label: "LinkedIn" },
  { href: "https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu", label: "ResearchGate" },
  { href: "https://x.com/apex_zy", label: "X / Twitter" },
  { href: "https://github.com/apexzy", label: "GitHub" },
];

export const ventures = [
  {
    type: "Policy & research",
    title: "African Institute for AI Policy",
    role: "Founder & Executive Director",
    description:
      "Advancing African participation in the rules, institutions and economic choices shaping artificial intelligence.",
    href: "https://africanaipolicy.org/",
    tone: "electric",
  },
  {
    type: "AI economics",
    title: "Aylgorith",
    role: "Founder & Editor-in-Chief",
    description:
      "Independent research and analysis on AI markets, infrastructure, labor, investment and policy.",
    href: "https://aylgorith.com/uchechukwu-ajuzieogu/",
    tone: "ink",
  },
  {
    type: "Technology",
    title: "Rova Media Digital",
    role: "Founder",
    description:
      "Digital products, technology strategy and practical systems built around real organizational needs.",
    href: "https://www.crunchbase.com/organization/rova-media-digital",
    tone: "paper",
  },
  {
    type: "Enterprise",
    title: "LANFarms",
    role: "Co-founder",
    description:
      "An entrepreneurial venture in which technology, operations and people development meet.",
    href: "https://lanfarms.com/about/",
    tone: "copper",
  },
];

export const research = [
  {
    year: "2026",
    field: "Cloud economics",
    title: "Democratizing Multi-Cloud Cost Optimization for Small and Medium Businesses",
    href: "https://www.researchgate.net/publication/403505606_Democratizing_Multi-_Cloud_Cost_Optimization_for_Small_and_Medium_Businesses",
  },
  {
    year: "2026",
    field: "AI & labor",
    title:
      "From Extraction to Ownership: Platform Cooperatives as Infrastructure for Worker Sovereignty in African AI Labor Markets",
    href: "https://www.researchgate.net/publication/400798251_From_Extraction_to_Ownership_Platform_Cooperatives_as_Infrastructure_for_Worker_Sovereignty_in_African_AI_Labor_Markets",
  },
  {
    year: "2025",
    field: "AI governance",
    title:
      "From Aspiration to Implementation: The African Union AI Continental Strategy and the Development-Governance Paradox",
    href: "https://www.researchgate.net/publication/396230260_From_Aspiration_to_Implementation_The_African_Union_AI_Continental_Strategy_and_the_Development-Governance_Paradox",
  },
  {
    year: "2025",
    field: "AI supply chains",
    title: "Kenya’s Data Workers: The $2/Hour Labor Force Training Western AI",
    href: "https://www.researchgate.net/publication/392924584_Kenya%27s_Data_Workers_The_2Hour_Labor_Force_Training_Western_AI",
  },
];

export const books = [
  {
    year: "2019",
    title: "Artificial Intelligence: Its Role in Modern Computing and Education",
    shortTitle: "Artificial Intelligence in Modern Education",
    description:
      "An accessible study of how artificial intelligence is changing computing, teaching and the design of learning.",
    image: "/ai-modern-education.jpg",
    href: "https://amzn.to/4bhivYq",
    color: "orange",
  },
  {
    year: "2020",
    title: "Igbo Business Moguls: The Secrets of Igbo Businessmen",
    shortTitle: "Igbo Business Moguls",
    description:
      "A study of enterprise culture, apprenticeship, resilience and the operating ideas behind Igbo business success.",
    image: "/igbo-business-moguls.jpg",
    href: "https://amzn.to/4eNBEnU",
    color: "green",
  },
];

export const insightLinks = [
  {
    type: "AI markets",
    title: "The Attention Extraction Machine",
    description:
      "How AI advertising created a vast economy while obscuring the low-paid labor beneath it.",
    href: "https://aylgorith.com/uchechukwu-ajuzieogu/",
  },
  {
    type: "Infrastructure",
    title: "The Custom AI Gold Rush",
    description:
      "Who builds the models, who bears the costs and who profits from the race.",
    href: "https://aylgorith.com/uchechukwu-ajuzieogu/",
  },
  {
    type: "Open ecosystems",
    title: "The GitHub for AI Models",
    description:
      "A critical look at the labor and incentives beneath essential model infrastructure.",
    href: "https://aylgorith.com/uchechukwu-ajuzieogu/",
  },
  {
    type: "Personal essay",
    title: "21 Times Out!",
    description:
      "A memoir about building something without waiting for permission or a fundable label.",
    href: "https://medium.com/21-times-out",
  },
];

export const expertise = [
  "AI economics & market dynamics",
  "Technology policy & governance",
  "African development",
  "Digital transformation",
  "Education & vocational systems",
  "Innovation strategy",
];

export const memberships = [
  "IEEE Computer Society",
  "Association for Computing Machinery",
  "Nigerian Economic Summit Group",
  "International Association of Outsourcing Professionals",
  "Teachers Registration Council of Nigeria",
  "IEEE Standards Association",
];

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Uchechukwu Chimaeze Ajuzieogu",
  alternateName: "Apex",
  url: siteUrl,
  description: siteDescription,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/apex-hero-real.jpg`,
    caption: "Uchechukwu Ajuzieogu",
  },
  jobTitle: "Technologist, Author, Researcher and Entrepreneur",
  email,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nigeria, Nsukka",
  },
  knowsAbout: expertise,
  sameAs: [
    "https://www.linkedin.com/in/uchechukwu-ajuzieogu",
    "https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu",
    "https://x.com/apex_zy",
    "https://github.com/apexzy",
    "https://aylgorith.com/uchechukwu-ajuzieogu/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: "Apex Ajuzieogu",
  description: siteDescription,
  inLanguage: "en-NG",
  publisher: { "@id": `${siteUrl}/#person` },
};

const pageKeywords = {
  "/": [
    "Uchechukwu Ajuzieogu",
    "Apex Ajuzieogu",
    "African AI policy researcher",
    "AI economics Africa",
    "technology policy expert Nigeria",
  ],
  "/about": [
    "Uchechukwu Ajuzieogu biography",
    "Apex Ajuzieogu profile",
    "African technologist and author",
    "AI policy researcher biography",
  ],
  "/work": [
    "Uchechukwu Ajuzieogu ventures",
    "African Institute for AI Policy founder",
    "Aylgorith founder",
    "African technology entrepreneur",
  ],
  "/research": [
    "African AI policy research",
    "AI economics research Africa",
    "AI labor markets Africa",
    "African Union AI strategy research",
    "technology governance Global South",
  ],
  "/books": [
    "books by Uchechukwu Ajuzieogu",
    "Artificial Intelligence in Modern Education book",
    "Igbo Business Moguls book",
  ],
  "/speaking": [
    "AI policy speaker Africa",
    "Uchechukwu Ajuzieogu speaker",
    "African technology keynote speaker",
    "AI economics conference speaker",
  ],
  "/insights": [
    "AI economics analysis",
    "African technology policy insights",
    "AI labor and infrastructure analysis",
    "Global South AI commentary",
  ],
  "/contact": [
    "contact Uchechukwu Ajuzieogu",
    "book AI policy speaker",
    "AI research collaboration Africa",
  ],
};

export function breadcrumbSchema(path, label) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${siteUrl}${path}`,
      },
    ],
  };
}

export function webPageSchema({ type = "WebPage", path, name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${siteUrl}${path}#webpage`,
    url: `${siteUrl}${path}`,
    name,
    description,
    inLanguage: "en-NG",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
    },
  };
}

export function pageMetadata(title, description, path = "") {
  const canonical = `${siteUrl}${path}`;
  const pageTitle = path
    ? title
    : { absolute: "Uchechukwu Ajuzieogu | AI Policy Researcher & Author" };
  return {
    title: pageTitle,
    description,
    keywords: pageKeywords[path] || pageKeywords["/"],
    authors: [{ name: siteName, url: `${siteUrl}/about` }],
    alternates: {
      canonical,
      languages: { "en-NG": canonical },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "en_NG",
      type: "website",
      images: [{ url: ogImage, width: 1730, height: 909, alt: `${siteName} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@apex_zy",
      images: [ogImage],
    },
  };
}
