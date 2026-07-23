import { Arrow, JsonLd } from "../components";
import { email, pageMetadata, siteUrl, socialLinks } from "../site-data";

export const metadata = pageMetadata(
  "Contact",
  "Contact Uchechukwu Ajuzieogu for speaking, research, advisory work, partnerships, interviews and selected technology engagements.",
  "/contact"
);

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}/contact`,
    name: "Contact Uchechukwu Ajuzieogu",
    mainEntity: { "@id": `${siteUrl}/#person` },
  };

  const subject = encodeURIComponent("Inquiry via ajuzieogu.com");

  return (
    <main className="contact-page">
      <JsonLd data={schema} />
      <section className="contact-hero">
        <p className="eyebrow light">Contact / 07</p>
        <h1>Bring a question<br />worth <em>building around.</em></h1>
        <a className="contact-email" href={`mailto:${email}?subject=${subject}`}>{email} <Arrow /></a>
      </section>

      <section className="contact-options">
        <div className="contact-intro">
          <p className="eyebrow">A useful first message</p>
          <h2>Context makes the conversation better.</h2>
          <p>
            Share what you are working on, why you think Uchechukwu is a fit,
            your expected outcome, location or format, and the relevant timeline.
          </p>
        </div>
        <div className="inquiry-grid">
          <a href={`mailto:${email}?subject=${encodeURIComponent("Speaking invitation")}`}>
            <span>01</span><h3>Speaking & media</h3><p>Keynotes, panels, briefings, podcasts and interviews.</p><Arrow />
          </a>
          <a href={`mailto:${email}?subject=${encodeURIComponent("Research collaboration")}`}>
            <span>02</span><h3>Research</h3><p>Commissioned work, academic collaboration and policy analysis.</p><Arrow />
          </a>
          <a href={`mailto:${email}?subject=${encodeURIComponent("Advisory inquiry")}`}>
            <span>03</span><h3>Advisory</h3><p>AI strategy, digital transformation and institutional design.</p><Arrow />
          </a>
          <a href={`mailto:${email}?subject=${encodeURIComponent("Partnership inquiry")}`}>
            <span>04</span><h3>Partnerships</h3><p>Mission-aligned ventures, programs and public-interest initiatives.</p><Arrow />
          </a>
        </div>
      </section>

      <section className="contact-social">
        <p className="eyebrow light">Elsewhere on the web</p>
        <div>
          {socialLinks.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.label}>
              {item.label} <Arrow />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
