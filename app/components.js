import Link from "next/link";
import { email, navItems, socialLinks } from "./site-data";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Uchechukwu Ajuzieogu home">
        <span className="wordmark-mark">A</span>
        <span className="wordmark-name">UCHECHUKWU<br />AJUZIEOGU</span>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Start a conversation <Arrow />
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow light">Speaking · Research · Ventures</p>
        <h2>Bring me a question<br />worth building around.</h2>
        <a className="footer-email" href={`mailto:${email}`}>{email} <Arrow /></a>
      </div>
      <div className="footer-bottom">
        <Link className="wordmark wordmark-light" href="/">
          <span className="wordmark-mark">A</span>
          <span className="wordmark-name">UCHECHUKWU<br />AJUZIEOGU</span>
        </Link>
        <p>Technologist · Author · Researcher · Entrepreneur</p>
        <div className="social-links">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
        <small>© 2026 Uchechukwu Ajuzieogu</small>
      </div>
    </footer>
  );
}

export function PageHero({ index, eyebrow, title, italic, intro, children }) {
  return (
    <section className="page-hero">
      <div className="page-index">{index}</div>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}<br /><em>{italic}</em></h1>
        <p className="page-intro">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ index, eyebrow, title, intro, light = false }) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <div className="section-number">{index}</div>
      <div>
        <p className={`eyebrow ${light ? "light" : ""}`}>{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function ContactBand({ title = "Let’s make the next conversation useful." }) {
  return (
    <section className="contact-band">
      <p className="eyebrow light">Available for selected engagements</p>
      <h2>{title}</h2>
      <Link href="/contact">Start a conversation <Arrow /></Link>
    </section>
  );
}
