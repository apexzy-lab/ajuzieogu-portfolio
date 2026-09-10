import { Arrow, ContactBand, JsonLd, PageHero, SectionHeading } from "../components";
import { mediaInterviews, pageMetadata, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "Media Interviews & Commentary",
  "Watch Uchechukwu Ajuzieogu’s television interviews on cyber safety, fraud, corruption data, technology policy and Nigeria’s global narrative.",
  "/media"
);

export default function MediaPage() {
  const videos = mediaInterviews.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${siteUrl}/media#${video.id}`,
    name: video.title,
    description: video.description,
    uploadDate: video.date,
    duration: video.duration,
    thumbnailUrl: video.thumbnail,
    contentUrl: video.url,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    about: { "@id": `${siteUrl}/#person` },
    publisher: { "@type": "Organization", name: video.outlet },
  }));
  const schema = {
    ...webPageSchema({
      type: "CollectionPage",
      path: "/media",
      name: "Media interviews with Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: videos.length,
      itemListElement: videos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": video["@id"] },
      })),
    },
  };

  return (
    <main>
      <JsonLd data={[schema, ...videos]} />
      <PageHero
        index="05"
        breadcrumb="Media"
        path="/media"
        eyebrow="Media room"
        title="Evidence for"
        italic="the airwaves."
        intro="Television interviews and public commentary where cyber safety, technology policy and Nigeria’s reputation meet the evidence."
      >
        <a className="inline-link" href="mailto:uche@ajuzieogu.com?subject=Media%20interview%20request">Request an interview <Arrow /></a>
      </PageHero>

      <section className="broadcast-lead">
        <p className="eyebrow light">Featured appearances / 2025</p>
        <h2>Three networks.<br />One data-led case.</h2>
        <p>
          Uchechukwu helps audiences move beyond easy stereotypes. His commentary
          connects cyber-enabled fraud, public perception and policy choices to the
          underlying data—clearly enough for live television, rigorously enough for decision-makers.
        </p>
      </section>

      <section className="interview-grid">
        {mediaInterviews.map((video, index) => (
          <article className={index === 0 ? "interview-card interview-featured" : "interview-card"} key={video.id}>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={`${video.title} — ${video.outlet}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="interview-copy">
              <p>{String(index + 1).padStart(2, "0")} / {video.outlet} / {video.date}</p>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <a href={video.url} target="_blank" rel="noreferrer">Watch on YouTube <Arrow /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="commentary-topics">
        <SectionHeading index="06" eyebrow="Editorial fit" title="Call for clarity, not noise." />
        <div>
          <article><span>01</span><h3>Cyber safety & digital fraud</h3><p>Human-centered explanations of online risk, public trust, prevention and the policy environment around cyber-enabled crime.</p></article>
          <article><span>02</span><h3>AI policy & economics</h3><p>Evidence-led analysis of AI markets, labor, infrastructure, governance and Africa’s negotiating position.</p></article>
          <article><span>03</span><h3>Technology & African development</h3><p>Clear context on digital transformation, education, innovation systems and the gap between strategy and implementation.</p></article>
        </div>
      </section>
      <ContactBand title="Need a prepared, evidence-led voice for your audience?" />
    </main>
  );
}
