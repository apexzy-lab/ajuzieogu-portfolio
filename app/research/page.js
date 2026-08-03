import { Arrow, ContactBand, JsonLd, PageHero, SectionHeading } from "../components";
import { pageMetadata, research, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Research",
  "Research by Uchechukwu Ajuzieogu on AI economics, African technology policy, labor, education, cloud infrastructure and digital sovereignty.",
  "/research"
);

export default function ResearchPage() {
  const schema = {
    ...webPageSchema({
      type: "CollectionPage",
      path: "/research",
      name: "Research by Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    name: "Research by Uchechukwu Ajuzieogu",
    author: { "@id": `${siteUrl}/#person` },
    hasPart: research.map((item) => ({
      "@type": "ScholarlyArticle",
      headline: item.title,
      datePublished: item.year,
      url: item.href,
      author: { "@id": `${siteUrl}/#person` },
    })),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        index="03"
        breadcrumb="Research"
        path="/research"
        eyebrow="Research"
        title="Study the systems"
        italic="beneath the story."
        intro="Research on the economics, labor, infrastructure and governance of artificial intelligence—seen from Africa and the Global South."
      >
        <a className="inline-link" href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer">
          Full record on ResearchGate <Arrow />
        </a>
      </PageHero>

      <section className="research-focus">
        <SectionHeading index="04" eyebrow="Research agenda" title="Four connected questions." />
        <div className="focus-grid">
          <article><span>01</span><h3>Who captures the value?</h3><p>AI markets, investment, compute economics and the concentration of infrastructure and returns.</p></article>
          <article><span>02</span><h3>Who supplies the labor?</h3><p>Data work, platform power, global supply chains and the conditions behind automated systems.</p></article>
          <article><span>03</span><h3>Who writes the rules?</h3><p>Continental strategies, institutional capacity, governance frameworks and digital sovereignty.</p></article>
          <article><span>04</span><h3>Who gets to participate?</h3><p>Education, vocational systems, access to opportunity and technology adoption in emerging markets.</p></article>
        </div>
      </section>

      <section className="publication-section">
        <SectionHeading
          index="05"
          eyebrow="Selected publications"
          title="Current work."
          intro="A selection from the public research record. Each title opens the source publication."
          light
        />
        <div className="publication-list">
          {research.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span>0{index + 1}</span>
              <small>{item.year} / {item.field}</small>
              <h3>{item.title}</h3>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="research-method">
        <div>
          <p className="eyebrow">Method</p>
          <h2>Evidence, context<br />and political economy.</h2>
        </div>
        <div>
          <p className="lead">Technology does not arrive in a vacuum.</p>
          <p>
            The research combines market analysis, policy reading, institutional
            comparison and the lived realities behind aggregate numbers. It asks
            not only what a technology can do, but how its benefits, risks and
            bargaining power are distributed.
          </p>
          <p>
            Collaboration is welcome with academic institutions, policy
            organizations, investors and technology companies committed to
            rigorous, evidence-led work.
          </p>
        </div>
      </section>
      <ContactBand title="Commission research, invite a contribution or propose a collaboration." />
    </main>
  );
}
