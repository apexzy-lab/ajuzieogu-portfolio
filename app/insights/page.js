import { Arrow, ContactBand, JsonLd, PageHero, SectionHeading } from "../components";
import { insightLinks, pageMetadata, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Insights",
  "Essays and analysis by Uchechukwu Ajuzieogu on AI economics, technology markets, African development, labor and innovation.",
  "/insights"
);

export default function InsightsPage() {
  const schema = {
    ...webPageSchema({
      type: "CollectionPage",
      path: "/insights",
      name: "Insights by Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    author: { "@id": `${siteUrl}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: insightLinks.map((insight, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: insight.title,
          description: insight.description,
          url: insight.href,
          author: { "@id": `${siteUrl}/#person` },
        },
      })),
    },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        index="06"
        breadcrumb="Insights"
        path="/insights"
        eyebrow="Insights"
        title="Follow the idea"
        italic="past the headline."
        intro="Essays, analysis and public thinking on the systems beneath technology and development."
      >
        <a className="inline-link" href="https://aylgorith.com/uchechukwu-ajuzieogu/" target="_blank" rel="noreferrer">
          Follow the latest on Aylgorith <Arrow />
        </a>
      </PageHero>

      <section className="insight-feature">
        <div>
          <span>Featured research theme</span>
          <h2>The political economy of artificial intelligence.</h2>
        </div>
        <p>
          The AI story is usually told through products and benchmarks. The more
          consequential story sits underneath: capital, labor, energy, compute,
          institutions and the uneven geography of who gains.
        </p>
      </section>

      <section className="insight-list-section">
        <SectionHeading index="07" eyebrow="Selected reading" title="Open notebooks." />
        <div className="insight-list">
          {insightLinks.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span>0{index + 1} / {item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="channels">
        <p className="eyebrow light">Read & follow</p>
        <div>
          <a href="https://aylgorith.com/uchechukwu-ajuzieogu/" target="_blank" rel="noreferrer"><span>Analysis</span><strong>Aylgorith</strong><Arrow /></a>
          <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><span>Short-form ideas</span><strong>LinkedIn</strong><Arrow /></a>
          <a href="https://medium.com/21-times-out" target="_blank" rel="noreferrer"><span>Essays</span><strong>Medium</strong><Arrow /></a>
          <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><span>Academic record</span><strong>ResearchGate</strong><Arrow /></a>
        </div>
      </section>
      <ContactBand title="Have an editorial commission or a question worth investigating?" />
    </main>
  );
}
