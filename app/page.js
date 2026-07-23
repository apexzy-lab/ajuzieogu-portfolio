"use client";

import { useEffect, useState } from "react";

const concepts = [
  { id: "flagship", number: "★", label: "Apex Flagship", note: "The definitive build" },
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

function Flagship() {
  return (
    <main className="concept flagship" id="top">
      <header className="flag-nav">
        <a className="flag-wordmark" href="#top"><b>A</b><span>UCHECHUKWU<br/>AJUZIEOGU</span></a>
        <nav><a href="#practice">Practice</a><a href="#research">Research</a><a href="#recognition">Recognition</a><a href="#contact">Contact</a></nav>
        <a className="flag-contact" href="mailto:uche@ajuzieogu.com">Start a conversation <Arrow /></a>
      </header>

      <section className="flag-hero">
        <div className="flag-gridlines" />
        <div className="flag-hero-copy">
          <div className="flag-status"><i/> Independent technologist · Lagos / Global</div>
          <h1><span>I turn complex</span><br/>ideas into<br/><em>useful things.</em></h1>
          <div className="flag-intro">
            <p>Uchechukwu “Apex” Ajuzieogu is a technologist, author, researcher and entrepreneur working across AI, education and enterprise.</p>
            <a href="#practice">Explore the work <b>↓</b></a>
          </div>
        </div>
        <div className="flag-portrait">
          <div className="flag-photo" />
          <div className="flag-photo-tag"><span>APEX / 001</span><b>BUILD.<br/>WRITE.<br/>QUESTION.</b></div>
          <div className="flag-cross flag-cross-a">+</div>
          <div className="flag-cross flag-cross-b">+</div>
        </div>
        <p className="flag-vertical">GROW YOUR PASSION, REGARDLESS®</p>
      </section>

      <section className="flag-ticker" aria-label="Areas of practice">
        <div>ARTIFICIAL INTELLIGENCE <i>✦</i> MODERN EDUCATION <i>✦</i> AFRICAN ENTERPRISE <i>✦</i> RESEARCH <i>✦</i> TECHNOLOGY <i>✦</i></div>
      </section>

      <section className="flag-manifesto" id="practice">
        <div className="flag-section-label"><span>01</span><p>THE PRACTICE</p></div>
        <div className="flag-manifesto-copy">
          <p className="flag-kicker">Technology is not the point.</p>
          <h2>The point is what<br/>people can do <em>with it.</em></h2>
          <p className="flag-body">My work moves between code, classrooms, companies and culture. Different arenas—one consistent question: how do we turn knowledge into wider human possibility?</p>
        </div>
      </section>

      <section className="flag-disciplines">
        <article>
          <div className="flag-card-top"><span>01 / BUILD</span><b>↗</b></div>
          <h3>Technology &<br/>enterprise</h3>
          <p>Building digital products and companies designed around real human needs.</p>
          <a href="https://rovamedia.com/team/uchechukwu-ajuzieogu/" target="_blank">Explore Rovamedia <Arrow /></a>
        </article>
        <article className="flag-card-blue">
          <div className="flag-card-top"><span>02 / STUDY</span><b>↗</b></div>
          <h3>Research &<br/>education</h3>
          <p>Investigating AI and vocational education systems with context and agency at the center.</p>
          <a href="#research">View research focus <Arrow /></a>
        </article>
        <article>
          <div className="flag-card-top"><span>03 / SHARE</span><b>↗</b></div>
          <h3>Books &<br/>public ideas</h3>
          <p>Making complex technology, enterprise and cultural knowledge accessible.</p>
          <a href="#books">Open the library <Arrow /></a>
        </article>
      </section>

      <section className="flag-books" id="books">
        <div className="flag-books-copy">
          <div className="flag-section-label flag-section-light"><span>02</span><p>THE LIBRARY</p></div>
          <p className="flag-kicker">Published work</p>
          <h2>Ideas that<br/>outlive the<br/><em>scroll.</em></h2>
          <p>Books invite the kind of sustained attention that important questions deserve.</p>
          <a href="https://amzn.to/4bhivYq" target="_blank">Visit the bookshelf <Arrow /></a>
        </div>
        <div className="flag-bookstage">
          <a className="flag-book flag-book-one" href="https://amzn.to/4bhivYq" target="_blank">
            <img src="/ai-modern-education.jpg" alt="Artificial Intelligence: Its Role in Modern Computing and Education book cover"/>
            <span>Artificial Intelligence in Modern Education</span>
          </a>
          <a className="flag-book flag-book-two" href="https://amzn.to/4eNBEnU" target="_blank">
            <img src="/igbo-business-moguls.jpg" alt="Igbo Business Moguls book cover"/>
            <span>Igbo Business Moguls</span>
          </a>
          <div className="flag-orbit-text">READ · THINK · APPLY · REPEAT ·</div>
        </div>
      </section>

      <section className="flag-research" id="research">
        <div className="flag-section-label"><span>03</span><p>THE RESEARCH</p></div>
        <div className="flag-research-heading">
          <p className="flag-kicker">Ideas with receipts</p>
          <h2>Research for the<br/><em>world being built.</em></h2>
          <p>Public work spanning AI economics, African digital sovereignty, cloud infrastructure and the future of labor.</p>
        </div>
        <a className="flag-research-profile" href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer">
          <span>FULL PUBLIC RECORD</span><strong>ResearchGate</strong><Arrow />
        </a>
      </section>

      <section className="flag-research-list">
        <a href="https://www.researchgate.net/publication/403505606_Democratizing_Multi-_Cloud_Cost_Optimization_for_Small_and_Medium_Businesses" target="_blank" rel="noreferrer">
          <span>2026 / CLOUD ECONOMICS</span><h3>Democratizing Multi-Cloud Cost Optimization for Small and Medium Businesses</h3><b><Arrow /></b>
        </a>
        <a href="https://www.researchgate.net/publication/400798251_From_Extraction_to_Ownership_Platform_Cooperatives_as_Infrastructure_for_Worker_Sovereignty_in_African_AI_Labor_Markets" target="_blank" rel="noreferrer">
          <span>2026 / AI & LABOR</span><h3>From Extraction to Ownership: Platform Cooperatives in African AI Labor Markets</h3><b><Arrow /></b>
        </a>
        <a href="https://www.researchgate.net/publication/396230260_From_Aspiration_to_Implementation_The_African_Union_AI_Continental_Strategy_and_the_Development-Governance_Paradox" target="_blank" rel="noreferrer">
          <span>2025 / AI POLICY</span><h3>From Aspiration to Implementation: The African Union AI Continental Strategy</h3><b><Arrow /></b>
        </a>
        <a href="https://www.researchgate.net/publication/392924584_Kenya%27s_Data_Workers_The_2Hour_Labor_Force_Training_Western_AI" target="_blank" rel="noreferrer">
          <span>2025 / INVESTIGATION</span><h3>Kenya&apos;s Data Workers: The $2/Hour Labor Force Training Western AI</h3><b><Arrow /></b>
        </a>
      </section>

      <section className="flag-proof" aria-label="Public research and audience metrics">
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><strong>92</strong><span>Publications listed</span></a>
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><strong>80K+</strong><span>Research reads</span></a>
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer"><strong>123</strong><span>Research citations</span></a>
        <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><strong>65K+</strong><span>LinkedIn followers</span></a>
        <p>Public figures checked July 2026. Follow the links to see the live records.</p>
      </section>

      <section className="flag-recognition" id="recognition">
        <div className="flag-recognition-photo">
          <img src="/apex-isi-agu.jpg" alt="Uchechukwu Ajuzieogu in traditional Igbo Isi Agu attire"/>
          <a href="https://commons.wikimedia.org/wiki/File:Uchechukw_Ajuzieogu_(Trad)_HD.jpg" target="_blank" rel="noreferrer">Portrait: Apex Zy / CC BY-SA 4.0</a>
        </div>
        <div className="flag-recognition-copy">
          <div className="flag-section-label"><span>04</span><p>RECOGNITION</p></div>
          <p className="flag-kicker">Earned, not invented</p>
          <h2>Signals of<br/><em>the work.</em></h2>
          <div className="flag-awards">
            <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><span>2022</span><strong>McKinsey Forward Program</strong><small>McKinsey & Company</small><b><Arrow /></b></a>
            <a href="https://ajuzieogu.com/about/" target="_blank" rel="noreferrer"><span>2019</span><strong>Best Programmer in Computer</strong><small>NACOSS</small><b><Arrow /></b></a>
            <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><span>2019</span><strong>Alvan Villa Achievers Award</strong><small>Recognition</small><b><Arrow /></b></a>
            <a href="https://aylgorith.com/uchechukwu-ajuzieogu/" target="_blank" rel="noreferrer"><span>AI / ML</span><strong>AWS AI & ML Scholar</strong><small>Amazon Web Services</small><b><Arrow /></b></a>
          </div>
        </div>
      </section>

      <section className="flag-ventures">
        <div className="flag-section-label flag-section-light"><span>05</span><p>LEADERSHIP & VENTURES</p></div>
        <div className="flag-venture-grid">
          <a href="https://africanaipolicy.org/" target="_blank" rel="noreferrer"><span>FOUNDER / EXECUTIVE DIRECTOR</span><h3>African Institute for AI Policy</h3><p>Research and policy infrastructure for Africa&apos;s AI future.</p><b>Visit <Arrow /></b></a>
          <a href="https://aylgorith.com/uchechukwu-ajuzieogu/" target="_blank" rel="noreferrer"><span>FOUNDER / EDITOR-IN-CHIEF</span><h3>Aylgorith</h3><p>Independent research and analysis on AI, economics and society.</p><b>Visit <Arrow /></b></a>
          <a href="https://www.crunchbase.com/organization/rova-media-digital" target="_blank" rel="noreferrer"><span>FOUNDER</span><h3>Rova Media Digital</h3><p>Technology products, platforms and digital systems.</p><b>Public record <Arrow /></b></a>
          <a href="https://lanfarms.com/about/team/" target="_blank" rel="noreferrer"><span>CO-FOUNDER</span><h3>LANFarms</h3><p>Building employment and people-operations technology.</p><b>Meet the team <Arrow /></b></a>
        </div>
      </section>

      <section className="flag-media">
        <div className="flag-media-intro">
          <div className="flag-section-label"><span>06</span><p>MEDIA & IDEAS</p></div>
          <h2>One voice.<br/><em>Many rooms.</em></h2>
        </div>
        <div className="flag-media-grid">
          <a className="flag-media-feature" href="https://podcasts.apple.com/us/podcast/one-on-one/id1518666608" target="_blank" rel="noreferrer">
            <span>PODCAST / 8 EPISODES</span><h3>One On One</h3><p>Conversations on technology, enterprise and the people moving ideas forward.</p><b>Listen on Apple Podcasts <Arrow /></b>
          </a>
          <a href="https://www.tekedia.com/nigerian-entrepreneurs-startup-istanbul-2020-could-be-your-spotlight/" target="_blank" rel="noreferrer"><span>CONTRIBUTOR</span><h3>Tekedia</h3><b>Read an article <Arrow /></b></a>
          <a href="https://medium.com/21-times-out" target="_blank" rel="noreferrer"><span>PUBLICATION</span><h3>21 Times Out!</h3><b>Open on Medium <Arrow /></b></a>
          <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer"><span>GUEST SPEAKER</span><h3>W3 Technologies</h3><b>View public profile <Arrow /></b></a>
        </div>
      </section>

      <section className="flag-web-strip">
        <span>PUBLIC RECORD ACROSS</span>
        <a href="https://www.researchgate.net/profile/Uchechukwu-Ajuzieogu" target="_blank" rel="noreferrer">ResearchGate</a>
        <a href="https://podcasts.apple.com/us/podcast/one-on-one/id1518666608" target="_blank" rel="noreferrer">Apple Podcasts</a>
        <a href="https://www.linkedin.com/in/uchechukwu-ajuzieogu" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.tekedia.com/" target="_blank" rel="noreferrer">Tekedia</a>
        <a href="https://www.crunchbase.com/organization/rova-media-digital" target="_blank" rel="noreferrer">Crunchbase</a>
      </section>

      <section className="flag-contact-section" id="contact">
        <div className="flag-contact-photo"><img src="/apex-mobile.png" alt="Uchechukwu “Apex” Ajuzieogu"/></div>
        <div className="flag-contact-copy">
          <p className="flag-kicker">Speaking · Research · Ventures</p>
          <h2>Bring me a<br/>question worth<br/><em>building around.</em></h2>
          <a href="mailto:uche@ajuzieogu.com">uche@ajuzieogu.com <Arrow /></a>
        </div>
      </section>

      <footer className="flag-footer">
        <div className="flag-wordmark flag-wordmark-footer"><b>A</b><span>UCHECHUKWU<br/>AJUZIEOGU</span></div>
        <p>Technologist · Author · Researcher · Entrepreneur</p>
        <div><a href="https://linkedin.com/in/uchechukwu-ajuzieogu" target="_blank">LinkedIn</a><a href="https://x.com/apex_zy" target="_blank">X / Twitter</a><a href="https://github.com/apexzy" target="_blank">GitHub</a></div>
        <small>© 2026 Uchechukwu Ajuzieogu</small>
      </footer>
    </main>
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

const screens = { flagship: Flagship, authority: Authority, editorial: Editorial, lab: Lab, story: Story, stage: Stage, os: OS };

export default function Home() {
  const [active, setActive] = useState("flagship");
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
        <span>{active === "flagship" ? "FLAGSHIP BUILD" : `DESIGN ${current.number} / 06`}</span>
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
