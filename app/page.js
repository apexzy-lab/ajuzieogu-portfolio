import Link from "next/link";
import { Arrow, JsonLd, SectionHeading } from "./components";
import { books, pageMetadata, research, siteUrl, ventures } from "./site-data";

export const metadata = pageMetadata(
  "Technologist, Author & AI Policy Researcher",
  "Uchechukwu “Apex” Ajuzieogu builds ideas, institutions and technology across AI policy, economics, education and African enterprise."
);

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Uchechukwu Ajuzieogu",
    description: metadata.description,
    publisher: { "@id": `${siteUrl}/#person` },
  };

  return (
    <main>
      <JsonLd data={websiteSchema} />
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="status"><i /> Independent researcher · Africa / Global</p>
          <h1><span>I turn complex</span><br />ideas into<br /><em>useful things.</em></h1>
          <div className="hero-intro">
            <p>
              Uchechukwu “Apex” Ajuzieogu is a technologist, author, researcher
              and entrepreneur working across AI, education, policy and enterprise.
            </p>
            <Link href="/about">Meet Uchechukwu <Arrow /></Link>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="hero-photo" role="img" aria-label="Portrait of Uchechukwu Ajuzieogu" />
          <div className="hero-stamp"><span>APEX / 001</span><b>BUILD.<br />WRITE.<br />QUESTION.</b></div>
        </div>
        <p className="hero-vertical">GROW YOUR PASSION, REGARDLESS®</p>
      </section>

      <div className="ticker" aria-label="Areas of practice">
        <div>ARTIFICIAL INTELLIGENCE <i>✦</i> MODERN EDUCATION <i>✦</i> AFRICAN ENTERPRISE <i>✦</i> RESEARCH <i>✦</i> TECHNOLOGY POLICY <i>✦</i></div>
      </div>

      <section className="home-manifesto">
        <SectionHeading
          index="01"
          eyebrow="The practice"
          title="Technology is not the point."
          intro="The point is what people, institutions and societies can do with it."
        />
        <div className="manifesto-copy">
          <h2>The work moves between<br />code, classrooms,<br />companies and <em>culture.</em></h2>
          <p>
            Different arenas, one consistent question: how do we turn knowledge
            into wider human possibility—especially for Africa and the Global South?
          </p>
        </div>
      </section>

      <section className="practice-grid" aria-label="Primary areas of work">
        <Link href="/work" className="practice-card">
          <span>01 / BUILD</span><Arrow />
          <h3>Technology &<br />enterprise</h3>
          <p>Building organizations and digital systems around consequential needs.</p>
        </Link>
        <Link href="/research" className="practice-card practice-card-blue">
          <span>02 / STUDY</span><Arrow />
          <h3>Research &<br />policy</h3>
          <p>Examining AI economics, governance, labor and African development.</p>
        </Link>
        <Link href="/books" className="practice-card">
          <span>03 / SHARE</span><Arrow />
          <h3>Books &<br />public ideas</h3>
          <p>Making complex technology and enterprise knowledge accessible.</p>
        </Link>
      </section>

      <section className="home-work">
        <SectionHeading
          index="02"
          eyebrow="Leadership & ventures"
          title="Institutions for the future."
          intro="Research, publishing and technology ventures designed to turn ideas into durable capacity."
          light
        />
        <div className="venture-preview">
          {ventures.slice(0, 3).map((item, index) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
              <span>0{index + 1} / {item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.role}</p>
              <Arrow />
            </a>
          ))}
        </div>
        <Link className="section-link light-link" href="/work">Explore all work <Arrow /></Link>
      </section>

      <section className="home-research">
        <SectionHeading
          index="03"
          eyebrow="Selected research"
          title="Ideas with receipts."
          intro="Evidence-led work on who benefits from artificial intelligence—and who gets to shape it."
        />
        <div className="research-list">
          {research.slice(0, 3).map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
              <span>{item.year} / {item.field}</span>
              <h3>{item.title}</h3>
              <Arrow />
            </a>
          ))}
        </div>
        <Link className="section-link" href="/research">View research profile <Arrow /></Link>
      </section>

      <section className="home-books">
        <div>
          <p className="eyebrow light">Published work</p>
          <h2>Ideas that outlive<br />the <em>scroll.</em></h2>
          <p>Books invite the sustained attention that important questions deserve.</p>
          <Link href="/books">Enter the library <Arrow /></Link>
        </div>
        <div className="book-stage">
          {books.map((book, index) => (
            <a className={`book-object book-${index + 1}`} key={book.title} href={book.href} target="_blank" rel="noreferrer">
              <img src={book.image} alt={`${book.title} book cover`} />
              <span>{book.shortTitle}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="proof-bar">
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><strong>90+</strong><span>Publications listed</span></a>
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><strong>74K+</strong><span>Research reads</span></a>
        <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><strong>64K+</strong><span>LinkedIn followers</span></a>
        <a href="/speaking"><strong>Global</strong><span>Research focus</span></a>
        <p>Approximate public profile figures reviewed July 2026. Follow the links for current records.</p>
      </section>
    </main>
  );
}
