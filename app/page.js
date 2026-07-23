"use client";

import { useEffect, useState } from "react";

const concepts = [
  { id: "authority", number: "01", label: "Obsidian Authority", note: "Best overall" },
  { id: "editorial", number: "02", label: "The Editorial", note: "For ideas & books" },
  { id: "lab", number: "03", label: "Future Lab", note: "For innovation" },
  { id: "story", number: "04", label: "The Human Story", note: "Warm & personal" },
  { id: "stage", number: "05", label: "Speaker Stage", note: "For bookings" },
  { id: "os", number: "06", label: "Apex OS", note: "Fastest to explore" }
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#top" aria-label="Apex home">
      <span className="brand-mark">A</span>
      <span>AJUZIEOGU</span>
    </a>
  );
}

function Authority() {
  return (
    <main className="concept authority" id="top">
      <header className="site-nav">
        <Brand light />
        <nav><a href="#work">Work</a><a href="#ideas">Ideas</a><a href="#about">About</a></nav>
        <a className="nav-cta" href="mailto:hello@ajuzieogu.com">Start a conversation <Arrow /></a>
      </header>
      <section className="authority-hero">
        <div className="hero-art" />
        <div className="hero-copy">
          <p className="eyebrow">Technologist · Author · Researcher</p>
          <h1>Ideas that move<br />Africa <em>forward.</em></h1>
          <p className="lede">I’m Uchechukwu “Apex” Ajuzieogu. I build at the intersection of technology, education, research and enterprise.</p>
          <div className="hero-actions">
            <a className="button button-copper" href="#work">Explore my work <Arrow /></a>
            <a className="text-link" href="mailto:hello@ajuzieogu.com">Invite me to speak</a>
          </div>
        </div>
        <p className="side-note">Lagos, Nigeria · Working globally</p>
      </section>
      <section className="proof-strip" id="work">
        <div><strong>02</strong><span>Published books</span></div>
        <div><strong>10+</strong><span>Years building</span></div>
        <div><strong>∞</strong><span>Curiosity</span></div>
        <p>Founder of <b>Rovamedia</b> and creator of ideas, platforms and research shaping the next generation.</p>
      </section>
      <section className="selected-work" id="ideas">
        <div className="section-intro"><p className="eyebrow">Selected work</p><h2>Proof, not<br />just potential.</h2></div>
        <div className="work-grid">
          <article className="work-card work-card-orange"><span>Book · 2024</span><h3>Artificial Intelligence in Modern Education</h3><a href="https://amzn.to/" target="_blank">Discover the book <Arrow /></a></article>
          <article className="work-card work-card-paper"><span>Book · Culture</span><h3>Igbo Business Moguls</h3><a href="https://amzn.to/" target="_blank">Discover the book <Arrow /></a></article>
          <article className="work-card work-card-dark"><span>Company · Technology</span><h3>Rovamedia</h3><p>Digital products and intelligent systems built for tomorrow.</p><a href="https://rovamedia.com" target="_blank">Visit Rovamedia <Arrow /></a></article>
        </div>
      </section>
      <footer className="authority-footer" id="about">
        <p className="eyebrow">The next idea starts here</p>
        <h2>Let’s build something<br /><em>worth remembering.</em></h2>
        <a className="button button-copper" href="mailto:hello@ajuzieogu.com">Get in touch <Arrow /></a>
      </footer>
    </main>
  );
}

function Editorial() {
  return (
    <main className="concept editorial" id="top">
      <header className="editorial-head">
        <p>VOL. 01 — 2026</p><Brand /><p>LAGOS / GLOBAL</p>
      </header>
      <nav className="editorial-nav"><a href="#dispatch">Dispatches</a><a href="#books">Books</a><a href="#research">Research</a><a href="#profile">Profile</a><a href="mailto:hello@ajuzieogu.com">Contact</a></nav>
      <section className="editorial-hero">
        <p className="kicker">THE IDEAS ISSUE</p>
        <h1>UCHECHUKWU<br /><i>AJUZIEOGU</i></h1>
        <div className="editorial-grid">
          <div className="editorial-portrait"><div className="editorial-art" /><span>APEX · TECHNOLOGIST & AUTHOR</span></div>
          <div className="editorial-story">
            <p className="dropcap">I build systems, stories and scholarship for a continent whose future is being written right now.</p>
            <p>Technologist. Multi-published author. Academic. Researcher. Entrepreneur. Each title is a different lens on one obsession: how ideas become useful.</p>
            <a href="#dispatch">Read the cover story <Arrow /></a>
          </div>
          <aside><span>IN THIS ISSUE</span><h3>Education after AI</h3><p>What learning needs from technology—and what it doesn’t.</p><hr/><h3>The Igbo enterprise code</h3><p>Lessons from builders who turned resilience into scale.</p></aside>
        </div>
      </section>
      <section className="editorial-features" id="dispatch">
        <article><span>01 / ESSAY</span><h2>Technology should enlarge human possibility.</h2><p>A field note on building tools people can actually use.</p></article>
        <article id="books"><span>02 / BOOKSHELF</span><h2>Two books.<br/>One restless mind.</h2><p>Explore published work across education, enterprise and culture.</p></article>
        <article id="research"><span>03 / RESEARCH</span><h2>Questions worth pursuing.</h2><p>Artificial intelligence and vocational education systems.</p></article>
      </section>
      <footer className="editorial-footer" id="profile"><h2>Stay curious.</h2><a href="mailto:hello@ajuzieogu.com">WRITE TO APEX <Arrow /></a></footer>
    </main>
  );
}

function Lab() {
  return (
    <main className="concept lab" id="top">
      <header className="lab-nav"><Brand light/><div className="lab-status"><i/> OPEN TO COLLABORATIONS</div><button aria-label="Open menu">MENU +</button></header>
      <section className="lab-hero">
        <div className="lab-orbit lab-orbit-one"/><div className="lab-orbit lab-orbit-two"/>
        <div className="lab-code">APX_001<br/>6.5244° N<br/>3.3792° E</div>
        <p className="eyebrow">Technologist / Researcher / Founder</p>
        <h1>BUILDING<br/><span>TOMORROW,</span><br/>IN PUBLIC.</h1>
        <p className="lab-lede">Apex turns emerging technology, original research and bold questions into tools, companies and books that advance human potential.</p>
        <a className="lab-button" href="#systems">ENTER THE LAB <Arrow /></a>
      </section>
      <section className="lab-marquee"><div>AI × EDUCATION × ENTERPRISE × CULTURE × RESEARCH × </div></section>
      <section className="lab-systems" id="systems">
        <div className="lab-heading"><span>[ SELECTED SYSTEMS ]</span><h2>Ideas are only<br/>interesting when<br/><i>they move.</i></h2></div>
        <div className="lab-list">
          <a href="https://rovamedia.com" target="_blank"><span>01</span><h3>ROVAMEDIA</h3><p>FOUNDER / TECHNOLOGY</p><b>↗</b></a>
          <a href="#books"><span>02</span><h3>AI IN MODERN EDUCATION</h3><p>AUTHOR / BOOK</p><b>↗</b></a>
          <a href="#research"><span>03</span><h3>VOCATIONAL FUTURES</h3><p>RESEARCH / EDUCATION</p><b>↗</b></a>
        </div>
      </section>
      <footer className="lab-footer"><p>HAVE A HARD PROBLEM?</p><a href="mailto:hello@ajuzieogu.com">LET’S EXPERIMENT <Arrow /></a></footer>
    </main>
  );
}

function Story() {
  return (
    <main className="concept story" id="top">
      <header className="story-nav"><Brand/><nav><a href="#journey">My journey</a><a href="#library">Library</a><a href="#notes">Notes</a></nav><a href="mailto:hello@ajuzieogu.com">Say hello <Arrow /></a></header>
      <section className="story-hero">
        <div className="story-copy"><p className="script">Hello, I’m Apex.</p><h1>I follow curiosity<br/>wherever it leads.</h1><p>Across technology, research, education, business and books, I’ve built a life around asking better questions—and doing something useful with the answers.</p><a href="#journey">Here’s my story <span>↓</span></a></div>
        <div className="story-photo"><div className="story-art"/><p>“Grow your passion, regardless.”</p></div>
      </section>
      <section className="story-journey" id="journey">
        <p className="script">A life in chapters</p>
        <div className="story-chapters">
          <article><span>01</span><h2>The builder</h2><p>Creating digital products and companies that solve real problems.</p></article>
          <article><span>02</span><h2>The scholar</h2><p>Researching how AI and vocational education can expand opportunity.</p></article>
          <article><span>03</span><h2>The storyteller</h2><p>Writing books that make complex ideas accessible and culture visible.</p></article>
        </div>
      </section>
      <section className="story-library" id="library"><div><p className="script">From my desk</p><h2>Books for curious<br/>people.</h2><p>Writing is how I slow an idea down long enough to understand it—and share it.</p><a href="#books">Visit the library <Arrow /></a></div><div className="book-stack"><div>ARTIFICIAL<br/><b>INTELLIGENCE</b><br/>IN MODERN<br/>EDUCATION</div><div>IGBO<br/><b>BUSINESS</b><br/>MOGULS</div></div></section>
      <footer className="story-footer" id="notes"><p className="script">Let’s make something meaningful.</p><a href="mailto:hello@ajuzieogu.com">hello@ajuzieogu.com</a></footer>
    </main>
  );
}

function Stage() {
  return (
    <main className="concept stage" id="top">
      <header className="stage-nav"><Brand light/><p>AUTHOR · TECHNOLOGIST · SPEAKER</p><a href="mailto:hello@ajuzieogu.com">BOOK APEX <Arrow /></a></header>
      <section className="stage-hero">
        <div className="stage-number">01</div>
        <div className="stage-copy"><p>MEET YOUR NEXT KEYNOTE SPEAKER</p><h1>BIG IDEAS.<br/><i>HUMAN STORIES.</i><br/>REAL IMPACT.</h1><p className="stage-lede">Uchechukwu “Apex” Ajuzieogu helps ambitious audiences understand what AI, education and African enterprise mean for the future.</p><div><a className="stage-cta" href="mailto:hello@ajuzieogu.com">INVITE APEX TO SPEAK <Arrow /></a><a className="stage-watch" href="#topics">EXPLORE TOPICS ↓</a></div></div>
        <div className="stage-art"><span>APEX<br/>ON<br/>STAGE</span></div>
      </section>
      <section className="stage-proof"><p>TRUSTED VOICE ON</p><div><span>ARTIFICIAL INTELLIGENCE</span><span>MODERN EDUCATION</span><span>AFRICAN ENTERPRISE</span><span>INNOVATION</span></div></section>
      <section className="stage-topics" id="topics">
        <div><p>KEYNOTE 01</p><h2>Education in the age of intelligent machines</h2><span>For universities · policy leaders · educators</span></div>
        <div><p>KEYNOTE 02</p><h2>Building with what you have</h2><span>For founders · teams · emerging leaders</span></div>
        <div><p>KEYNOTE 03</p><h2>The hidden operating system of Igbo enterprise</h2><span>For business audiences · cultural institutions</span></div>
      </section>
      <footer className="stage-footer"><h2>GIVE YOUR AUDIENCE<br/><i>AN IDEA THEY’LL KEEP.</i></h2><a href="mailto:hello@ajuzieogu.com">CHECK AVAILABILITY <Arrow /></a></footer>
    </main>
  );
}

function OS() {
  return (
    <main className="concept os" id="top">
      <header className="os-nav"><Brand/><div className="os-command">⌘ <span>Search Apex’s world</span><kbd>/</kbd></div><div className="os-live"><i/> AVAILABLE FOR SELECT PROJECTS</div></header>
      <section className="os-hero">
        <div className="os-intro"><span className="os-avatar">UA</span><div><p>Uchechukwu “Apex” Ajuzieogu</p><small>Technologist, author, researcher & founder in Lagos</small></div></div>
        <h1>Everything I’m<br/>building, learning<br/>& thinking.</h1>
        <p>Welcome to my digital home. Pick a door.</p>
      </section>
      <section className="os-grid">
        <a className="os-card os-feature" href="#now"><span className="os-icon">◎</span><div><small>START HERE</small><h2>What I’m doing now</h2><p>Current projects, research questions and things occupying my mind.</p></div><b>↗</b></a>
        <a className="os-card os-green" href="#books"><span className="os-icon">▤</span><div><small>LIBRARY</small><h2>Published books</h2><p>AI, education, enterprise and culture.</p></div><b>02</b></a>
        <a className="os-card os-dark" href="https://rovamedia.com" target="_blank"><span className="os-icon">R</span><div><small>COMPANY</small><h2>Rovamedia</h2><p>Technology made useful.</p></div><b>↗</b></a>
        <a className="os-card" href="#research"><span className="os-icon">⌁</span><div><small>RESEARCH</small><h2>Open questions</h2><p>AI and vocational education systems.</p></div><b>↗</b></a>
        <a className="os-card os-wide" href="mailto:hello@ajuzieogu.com"><span className="os-icon">✦</span><div><small>COLLABORATE</small><h2>Bring me an interesting problem.</h2><p>Speaking, advisory, research and select ventures.</p></div><b>LET’S TALK ↗</b></a>
      </section>
      <section className="os-now" id="now"><span>LAST UPDATED · JULY 2026</span><h2>Currently exploring how African institutions can use AI without surrendering judgment, context or agency.</h2></section>
      <footer className="os-footer"><p>Built with curiosity in Lagos.</p><div><a href="https://linkedin.com">LinkedIn</a><a href="https://github.com">GitHub</a><a href="mailto:hello@ajuzieogu.com">Email</a></div></footer>
    </main>
  );
}

const screens = { authority: Authority, editorial: Editorial, lab: Lab, story: Story, stage: Stage, os: OS };

export default function Home() {
  const [active, setActive] = useState("authority");
  const [drawer, setDrawer] = useState(false);
  const ActiveScreen = screens[active];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (screens[hash]) setActive(hash);
  }, []);

  function selectConcept(id) {
    setActive(id);
    setDrawer(false);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const current = concepts.find((item) => item.id === active);

  return (
    <>
      <button className="concept-launcher" onClick={() => setDrawer(!drawer)} aria-expanded={drawer}>
        <span>DESIGN {current.number} / 06</span>
        <b>{current.label}</b>
        <i>{drawer ? "×" : "＋"}</i>
      </button>
      <aside className={`concept-drawer ${drawer ? "open" : ""}`}>
        <div className="drawer-head"><span>CHOOSE A DIRECTION</span><button onClick={() => setDrawer(false)}>CLOSE ×</button></div>
        <div className="concept-list">
          {concepts.map((item) => (
            <button className={item.id === active ? "active" : ""} onClick={() => selectConcept(item.id)} key={item.id}>
              <span>{item.number}</span><strong>{item.label}</strong><small>{item.note}</small><i>→</i>
            </button>
          ))}
        </div>
        <p className="drawer-tip">Tip: compare the purpose, not just the palette. Each direction solves a different business goal.</p>
      </aside>
      {drawer && <button className="drawer-backdrop" aria-label="Close concept menu" onClick={() => setDrawer(false)} />}
      <ActiveScreen />
    </>
  );
}
