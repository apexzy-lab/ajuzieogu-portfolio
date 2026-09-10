import { Arrow, JsonLd, PageHero, SectionHeading } from "../components";
import { email, pageMetadata, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Work With Me — Roles, Advisory & Speaking",
  "Hire Uchechukwu Ajuzieogu for senior AI policy and technology strategy roles, research, advisory work, speaking, media commentary and institutional partnerships.",
  "/hire"
);

const opportunities = [
  {
    index: "01",
    label: "Senior roles",
    title: "Leadership with a builder’s range.",
    copy: "A fit for leadership roles spanning AI policy, research, technology strategy, innovation programs, digital transformation and mission-led institution building.",
    subject: "Senior role opportunity",
    action: "Discuss a role",
  },
  {
    index: "02",
    label: "Advisory & consulting",
    title: "Make the hard decision legible.",
    copy: "Research strategy, evidence synthesis, AI and technology policy, executive briefings, institutional design and practical digital transformation.",
    subject: "Advisory or consulting inquiry",
    action: "Share a brief",
  },
  {
    index: "03",
    label: "Speaking & media",
    title: "Bring rigor into the room.",
    copy: "Keynotes, panels, workshops and broadcast interviews on AI economics, cyber safety, African technology policy, education and enterprise.",
    subject: "Speaking or media invitation",
    action: "Request an appearance",
  },
  {
    index: "04",
    label: "Research & partnerships",
    title: "Build knowledge that travels.",
    copy: "Commissioned research, policy programs, editorial collaborations and partnerships with institutions working on consequential technology questions.",
    subject: "Research or partnership inquiry",
    action: "Propose a collaboration",
  },
];

export default function HirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/hire#services`,
    name: "Professional services by Uchechukwu Ajuzieogu",
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: "Worldwide",
    serviceType: opportunities.slice(1).map((item) => item.label),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ways to work with Uchechukwu Ajuzieogu",
      itemListElement: opportunities.slice(1).map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.label, description: item.copy },
      })),
    },
  };
  const schema = webPageSchema({
    path: "/hire",
    name: "Work with Uchechukwu Ajuzieogu",
    description: metadata.description,
    mainEntity: { "@id": serviceSchema["@id"] },
  });

  return (
    <main>
      <JsonLd data={[schema, serviceSchema]} />
      <PageHero
        index="07"
        breadcrumb="Work with me"
        path="/hire"
        eyebrow="Roles, projects & appearances"
        title="Research depth."
        italic="Builder instinct."
        intro="For organizations that need someone who can investigate the system, explain what matters and help build the next move."
      >
        <a className="inline-link" href={`mailto:${email}?subject=${encodeURIComponent("Opportunity via ajuzieogu.com")}`}>Start with the opportunity <Arrow /></a>
      </PageHero>

      <section className="fit-statement">
        <div>
          <p className="eyebrow light">The uncommon combination</p>
          <h2>Policy mind.<br />Technical roots.<br />Public voice.</h2>
        </div>
        <div>
          <p className="fit-lead">Uchechukwu works comfortably across the research paper, the leadership table, the product decision and the television studio.</p>
          <p>That range is useful when the challenge is not merely to have an idea, but to frame it credibly, organize people around it and turn it into durable capacity.</p>
        </div>
      </section>

      <section className="opportunity-section">
        <SectionHeading index="08" eyebrow="Ways to work together" title="Choose the right door." />
        <div className="opportunity-grid">
          {opportunities.map((item) => (
            <article key={item.index}>
              <div><span>{item.index}</span><b>{item.label}</b></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href={`mailto:${email}?subject=${encodeURIComponent(item.subject)}`}>{item.action} <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="hiring-proof">
        <p className="eyebrow light">Why the conversation is worth having</p>
        <div>
          <article><strong>Research</strong><p>Published work across AI governance, labor markets, cloud economics and African development.</p></article>
          <article><strong>Leadership</strong><p>Founder and executive experience across policy, publishing, technology and enterprise ventures.</p></article>
          <article><strong>Communication</strong><p>Two books, public writing, teaching, speaking and television interviews for national and pan-African media.</p></article>
          <article><strong>Execution</strong><p>A career connecting code, classrooms, companies and institutions—not treating them as separate worlds.</p></article>
        </div>
      </section>

      <section className="brief-cta">
        <p className="eyebrow">A strong first message</p>
        <h2>Send the role, problem or room.</h2>
        <p>Include the intended outcome, scope, timeline, location or format, and why this background is relevant. A clear brief gets a useful reply.</p>
        <a href={`mailto:${email}?subject=${encodeURIComponent("Opportunity via ajuzieogu.com")}`}>{email} <Arrow /></a>
      </section>
    </main>
  );
}
