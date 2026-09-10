import { Arrow, ContactBand, JsonLd, PageHero, SectionHeading } from "../components";
import { pageMetadata, ventures, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Work & Ventures",
  "Explore Uchechukwu Ajuzieogu’s current portfolio across AI policy, cloud FinOps, immigration technology, travel infrastructure and research publishing.",
  "/work"
);

export default function WorkPage() {
  const schema = {
    ...webPageSchema({
      type: "CollectionPage",
      path: "/work",
      name: "Work and ventures led by Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ventures.map((venture, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": venture.schemaType || "Organization",
          name: venture.title,
          description: venture.description,
          url: venture.href,
          ...(venture.schemaType === "SoftwareApplication" && {
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          }),
        },
      })),
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        index="02"
        breadcrumb="Work"
        path="/work"
        eyebrow="Work & ventures"
        title="Build things that"
        italic="keep working."
        intro="A focused portfolio of research institutions and software products built around costly, consequential problems."
      />

      <section className="venture-grid-page">
        {ventures.map((item, index) => (
          <a className={`venture-card ${item.tone}`} key={item.title} href={item.href} target="_blank" rel="noreferrer">
            <div><span>0{index + 1} / {item.type}</span><Arrow /></div>
            <p>{item.role}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>Explore the work <Arrow /></b>
          </a>
        ))}
      </section>

      <section className="capabilities">
        <SectionHeading index="03" eyebrow="Capabilities" title="Where strategy meets execution." />
        <div className="capability-list">
          <article><span>01</span><h3>AI policy & research strategy</h3><p>Research agendas, policy analysis, evidence synthesis and stakeholder framing for complex technology questions.</p></article>
          <article><span>02</span><h3>Digital transformation</h3><p>Translating organizational needs into practical product, cloud, data and operating decisions.</p></article>
          <article><span>03</span><h3>Institution building</h3><p>Designing the editorial, research and partnership systems that help mission-led organizations compound impact.</p></article>
          <article><span>04</span><h3>Education & curriculum</h3><p>Developing applied learning experiences in computing, AI and entrepreneurship.</p></article>
        </div>
      </section>

      <section className="service-section">
        <SectionHeading index="04" eyebrow="Service & contribution" title="Knowledge should circulate." light />
        <div className="service-grid">
          <article><h3>Nigerian Economic Summit Group</h3><p>Technical consulting and contribution to socio-economic strategy in the technology sector.</p></article>
          <article><h3>Teaching & mentoring</h3><p>Computer science instruction, curriculum development, developer mentorship and business mentoring.</p></article>
          <article><h3>Public knowledge</h3><p>Contributions spanning Tekedia, Wikipedia, Medium, community technology groups and research platforms.</p></article>
          <article><h3>Humanitarian service</h3><p>Publicly listed volunteer involvement with the Nigerian Red Cross Society and youth development initiatives.</p></article>
        </div>
      </section>

      <section className="recognition-strip">
        <div><span>Research</span><strong>Google Scholar profile</strong><small>AI economics, policy & technology</small></div>
        <div><span>Technical writing</span><strong>Vultr contributor</strong><small>Cloud and developer documentation</small></div>
        <div><span>Mentorship</span><strong>Tony Elumelu Foundation</strong><small>Entrepreneurship mentor</small></div>
        <div><span>Policy community</span><strong>Nigerian Economic Summit Group</strong><small>Policy Commission member</small></div>
      </section>
      <ContactBand title="Have a difficult problem worth organizing around?" />
    </main>
  );
}
