import Link from "next/link";
import { Arrow, ContactBand, JsonLd, PageHero, SectionHeading } from "../components";
import { expertise, memberships, pageMetadata, siteUrl, webPageSchema } from "../site-data";

export const metadata = pageMetadata(
  "About",
  "The story, education, professional journey and working philosophy of technologist, author and AI policy researcher Uchechukwu Ajuzieogu.",
  "/about"
);

export default function AboutPage() {
  const schema = {
    ...webPageSchema({
      type: "ProfilePage",
      path: "/about",
      name: "About Uchechukwu Ajuzieogu",
      description: metadata.description,
    }),
    dateModified: "2026-08-03",
    mainEntity: { "@id": `${siteUrl}/#person` },
  };

  return (
    <main>
      <JsonLd data={schema} />
      <PageHero
        index="01"
        breadcrumb="About"
        path="/about"
        eyebrow="About Uchechukwu"
        title="A builder across"
        italic="disciplines."
        intro="Technologist. Author. Researcher. Educator. Entrepreneur. The titles change; the work remains focused on expanding human possibility."
      >
        <a className="inline-link" href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer">
          View LinkedIn profile <Arrow />
        </a>
      </PageHero>

      <section className="portrait-story">
        <div className="portrait-large">
          <img src="/apex-isi-agu.jpg" alt="Uchechukwu Ajuzieogu wearing traditional Igbo Isi Agu attire" />
          <a href="https://commons.wikimedia.org/wiki/File:Uchechukw_Ajuzieogu_(Trad)_HD.jpg" target="_blank" rel="noreferrer">
            Portrait credit · CC BY-SA 4.0
          </a>
        </div>
        <div className="story-copy">
          <p className="eyebrow">The through-line</p>
          <h2>Curiosity made<br />practical.</h2>
          <p className="lead">
            Uchechukwu Chimaeze Ajuzieogu—known as Apex—works where technology,
            economics, education and public policy meet.
          </p>
          <p>
            His journey began with computer education and hands-on programming,
            then widened into technology leadership, entrepreneurship, teaching,
            research and institutional development. He earned a Bachelor of Science
            in Computer Education from the University of Nigeria, Nsukka.
          </p>
          <p>
            Today, his research examines the political economy of artificial
            intelligence: who builds it, who supplies its labor and infrastructure,
            who captures the value, and how African institutions can shape a more
            inclusive future.
          </p>
        </div>
      </section>

      <section className="principles-section">
        <SectionHeading index="02" eyebrow="Working principles" title="How the work gets done." light />
        <div className="principle-grid">
          <article><span>01</span><h3>Evidence before theatre.</h3><p>Strong claims need strong sources. Research is treated as infrastructure, not decoration.</p></article>
          <article><span>02</span><h3>Context before copying.</h3><p>Solutions developed elsewhere must be interrogated before they are imported into African realities.</p></article>
          <article><span>03</span><h3>Usefulness before novelty.</h3><p>The best technology is not always the newest. It is the one that enlarges real human agency.</p></article>
          <article><span>04</span><h3>Institutions before moments.</h3><p>Durable impact comes from systems, people and knowledge that keep working after attention moves on.</p></article>
        </div>
      </section>

      <section className="expertise-section">
        <SectionHeading index="03" eyebrow="Expertise" title="Fields of focus." />
        <div className="tag-cloud">
          {expertise.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="journey-section">
        <SectionHeading index="04" eyebrow="Selected journey" title="A career built in layers." />
        <div className="timeline">
          <article><span>Now</span><div><h3>AI economics, policy & institution building</h3><p>Leading Aylgorith and the African Institute for AI Policy while publishing research on markets, governance and African development.</p></div></article>
          <article><span>Enterprise</span><div><h3>Technology leadership & entrepreneurship</h3><p>Founder of Rova Media Digital, co-founder of LANFarms, and earlier technology leadership across consulting and e-commerce.</p></div></article>
          <article><span>Education</span><div><h3>Teaching, curriculum & applied learning</h3><p>Experience teaching computer science, machine learning and programming, with continuing interest in vocational education systems.</p></div></article>
          <article><span>Foundation</span><div><h3>Computer Education at UNN</h3><p>Formal study at the University of Nigeria, Nsukka, grounded in the relationship between computing and practical learning.</p></div></article>
        </div>
      </section>

      <section className="membership-section">
        <div>
          <p className="eyebrow">Professional community</p>
          <h2>Connected to the disciplines shaping the work.</h2>
          <Link href="/work">See leadership & service <Arrow /></Link>
        </div>
        <ul>
          {memberships.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <ContactBand />
    </main>
  );
}
