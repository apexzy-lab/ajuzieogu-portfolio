import { Arrow, ContactBand, PageHero, SectionHeading } from "../components";
import { pageMetadata } from "../site-data";

export const metadata = pageMetadata(
  "Speaking & Media",
  "Invite Uchechukwu Ajuzieogu to speak on AI economics, African technology policy, education, innovation and enterprise.",
  "/speaking"
);

export default function SpeakingPage() {
  return (
    <main>
      <PageHero
        index="05"
        eyebrow="Speaking & media"
        title="One voice."
        italic="Many rooms."
        intro="Clear, evidence-led conversations about technology, power, education and Africa’s place in the artificial intelligence economy."
      >
        <a className="inline-link" href="/contact">Request an engagement <Arrow /></a>
      </PageHero>

      <section className="speaker-feature">
        <div className="speaker-photo">
          <img src="/apex-mobile.png" alt="Uchechukwu Ajuzieogu speaking" />
        </div>
        <div className="speaker-copy">
          <p className="eyebrow light">For conferences, institutions & media</p>
          <h2>Make complexity<br />legible—without<br />making it small.</h2>
          <p>
            Uchechukwu brings research depth, technical experience and an African
            political-economy lens to conversations that too often flatten the
            people and systems behind technology.
          </p>
        </div>
      </section>

      <section className="topic-section">
        <SectionHeading index="06" eyebrow="Signature themes" title="Conversations worth having." />
        <div className="topic-list">
          <article><span>01</span><h3>Who really pays for artificial intelligence?</h3><p>Labor, compute, data and the hidden supply chains beneath the AI boom.</p></article>
          <article><span>02</span><h3>Africa beyond the “skills gap” story</h3><p>What education, retention, opportunity and global benchmarking get wrong about African talent.</p></article>
          <article><span>03</span><h3>From AI strategy to institutional capacity</h3><p>Why policy ambition fails without implementation systems, bargaining power and local evidence.</p></article>
          <article><span>04</span><h3>Building useful technology</h3><p>Lessons from moving between code, classrooms, companies and public-interest research.</p></article>
        </div>
      </section>

      <section className="formats-section">
        <p className="eyebrow light">Engagement formats</p>
        <div>
          <span>Keynotes</span><span>Panels</span><span>Fireside conversations</span>
          <span>Executive briefings</span><span>Workshops</span><span>Media interviews</span>
        </div>
      </section>

      <section className="media-grid-page">
        <a className="media-primary" href="https://podcasts.apple.com/us/podcast/one-on-one/id1518666608" target="_blank" rel="noreferrer">
          <span>Podcast / 8 episodes</span><h2>One On One</h2>
          <p>Conversations on technology, enterprise and the people moving ideas forward.</p>
          <b>Listen on Apple Podcasts <Arrow /></b>
        </a>
        <a href="https://www.tekedia.com/nigerian-entrepreneurs-startup-istanbul-2020-could-be-your-spotlight/" target="_blank" rel="noreferrer">
          <span>Contributor</span><h3>Tekedia</h3><b>Read an article <Arrow /></b>
        </a>
        <a href="https://medium.com/21-times-out" target="_blank" rel="noreferrer">
          <span>Publication</span><h3>21 Times Out!</h3><b>Open on Medium <Arrow /></b>
        </a>
      </section>
      <ContactBand title="Put a rigorous, independent voice in the room." />
    </main>
  );
}
