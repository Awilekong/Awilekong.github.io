const profileLinks = [
  { label: "Email", href: "mailto:your.email@institution.edu" },
  { label: "Google Scholar", href: "#contact" },
  { label: "GitHub", href: "#contact" },
  { label: "CV", href: "#contact" },
];

const researchAreas = [
  {
    number: "01",
    title: "Force-aware learning",
    text: "Learning policies that treat force not as a safety afterthought, but as a first-class source of information.",
  },
  {
    number: "02",
    title: "Contact-rich manipulation",
    text: "Building robust behaviors for assembly, insertion, and other tasks where contact defines the solution.",
  },
  {
    number: "03",
    title: "Multimodal perception",
    text: "Connecting vision, force, touch, and action into representations that remain useful under uncertainty.",
  },
  {
    number: "04",
    title: "Embodied intelligence",
    text: "Studying how imitation and reinforcement learning can turn interaction into transferable physical skill.",
  },
];

const publications = [
  {
    index: "01",
    visual: "force",
    badge: "[VENUE · YEAR]",
    title: "[Publication title — replace with your paper title]",
    authors: "[Your Name], [Co-author One], [Co-author Two], and [Advisor Name]",
    summary:
      "Add a two-sentence summary of the central problem, the technical idea, and the result a reader should remember. Keep it concrete enough for collaborators outside the immediate subfield.",
    tags: ["Force-aware", "Imitation learning"],
  },
  {
    index: "02",
    visual: "contact",
    badge: "[VENUE · YEAR]",
    title: "[Publication title — precision assembly and insertion]",
    authors: "[Co-author One], [Your Name], [Co-author Two], and [Advisor Name]",
    summary:
      "Use this space to explain what the robot learned, which setting was evaluated, and why the evidence matters. Supporting links can point to the paper, project page, code, and video.",
    tags: ["Assembly", "Contact-rich"],
  },
  {
    index: "03",
    visual: "vision",
    badge: "[VENUE · YEAR]",
    title: "[Publication title — vision–force multimodal learning]",
    authors: "[Your Name], [Co-author One], [Co-author Two], and [Advisor Name]",
    summary:
      "Replace this placeholder with a compact, plain-language abstract. Lead with the research question; follow with the method and the strongest validated takeaway.",
    tags: ["Multimodal", "Robot learning"],
  },
];

const projects = [
  {
    status: "ACTIVE DIRECTION",
    title: "Learning from contact",
    text: "A research thread on policies that perceive and respond to contact during precise manipulation.",
    meta: "Vision · Force · Action",
  },
  {
    status: "PROJECT PLACEHOLDER",
    title: "[Project name]",
    text: "Describe the system, the physical task, and the question that connects this project to your broader research agenda.",
    meta: "Assembly · Insertion",
  },
  {
    status: "PROJECT PLACEHOLDER",
    title: "[Project name]",
    text: "Use project entries for work that benefits from a story, demo, dataset, or ongoing collaboration beyond one paper.",
    meta: "RL · Embodied AI",
  },
];

const journey = [
  {
    year: "NOW",
    role: "[Current position]",
    place: "[University / Research Institute]",
    detail: "Robot learning · Contact-rich manipulation",
  },
  {
    year: "[20XX]",
    role: "[Previous role or degree]",
    place: "[Institution]",
    detail: "Advisor: [Advisor Name]",
  },
  {
    year: "[20XX]",
    role: "[Earlier degree or research experience]",
    place: "[Institution]",
    detail: "[Field / Lab / Research focus]",
  },
];

const news = [
  {
    date: "[YYYY.MM]",
    text: "[Paper / project / talk update]. Add one sentence and link the relevant item.",
  },
  {
    date: "[YYYY.MM]",
    text: "[New collaboration, award, or academic milestone].",
  },
  {
    date: "[YYYY.MM]",
    text: "[A concise update for visitors returning to the site].",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#research">
        Skip to research
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">YN</span>
          <span className="wordmark-text">
            <strong>Your Name</strong>
            <small>Research notes · 001</small>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#journey">Journey</a>
          <a href="#notes">Notes</a>
          <a className="nav-contact" href="#contact">
            Contact ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">ROBOT LEARNING · CONTACT-RICH MANIPULATION</p>
          <h1>
            Your Name
            <span>[中文名]</span>
          </h1>
          <p className="identity">
            [Ph.D. Student / Researcher] at{" "}
            <a href="#journey">[University or Research Institute]</a>
          </p>
          <p className="intro">
            I study how robots learn precise physical skills through vision,
            force, and interaction—especially when contact is not a disturbance,
            but the task itself.
          </p>
          <blockquote>
            “I learn from what resists: a surface, a failure, a question that
            refuses an easy answer.”
          </blockquote>
          <div className="hero-links" aria-label="Profile links">
            {profileLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src="/og.png"
            alt="A robotic arm performing a precision insertion experiment in a quiet laboratory at dawn"
          />
          <figcaption>
            <span>FIELD NOTE · 01</span>
            <p>
              Intelligence becomes visible at the moment a plan meets the
              physical world.
            </p>
          </figcaption>
        </figure>

        <div className="hero-index" aria-hidden="true">
          <span>41.1° N</span>
          <span>LAB / HOME</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      <section className="research-section section-shell" id="research">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESEARCH / WHAT I AM BUILDING TOWARD</p>
            <h2>Teaching robots to feel their way through the world.</h2>
          </div>
          <p className="section-lede">
            My work sits at the intersection of learning, control, and physical
            interaction. The goal is reliable embodied skill: precise enough
            for assembly, adaptive enough for the real world.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="publications-section section-shell" id="publications">
        <div className="section-heading publication-heading">
          <div>
            <p className="eyebrow">SELECTED PUBLICATIONS</p>
            <h2>Recent work</h2>
          </div>
          <div className="heading-aside">
            <p>* Equal contribution · † Corresponding author</p>
            <a href="#contact">Full list on Google Scholar ↗</a>
          </div>
        </div>

        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication" key={publication.index}>
              <div
                className={`paper-visual paper-visual-${publication.visual}`}
                aria-hidden="true"
              >
                <span className="paper-index">{publication.index}</span>
                <div className="paper-plot">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <p>REPLACE WITH PAPER THUMBNAIL</p>
              </div>

              <div className="paper-content">
                <div className="paper-topline">
                  <span>{publication.badge}</span>
                  <span>SELECTED WORK · {publication.index}</span>
                </div>
                <h3>{publication.title}</h3>
                <p className="authors">{publication.authors}</p>
                <p className="paper-summary">{publication.summary}</p>
                <div className="paper-footer">
                  <div className="paper-actions">
                    <a href="#contact">Paper ↗</a>
                    <a href="#contact">Project ↗</a>
                    <a href="#contact">Code ↗</a>
                    <a href="#contact">Video ↗</a>
                  </div>
                  <div className="paper-tags">
                    {publication.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESEARCH PROJECTS</p>
            <h2>Questions that continue beyond one paper.</h2>
          </div>
          <p className="section-lede">
            Projects connect individual results to a longer research direction.
            They can host demos, datasets, failures, and the next unanswered
            question.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.title}-${index}`}>
              <div className="project-number">0{index + 1}</div>
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-bottom">
                <span>{project.meta}</span>
                <a href="#contact" aria-label={`Open ${project.title}`}>
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section section-shell" id="journey">
        <div className="journey-intro">
          <p className="eyebrow">ACADEMIC JOURNEY</p>
          <h2>
            A path shaped by difficult problems, generous mentors, and patient
            iteration.
          </h2>
          <p>
            This timeline is intentionally concise. Replace each placeholder
            with a verified position, degree, lab, advisor, or formative
            research experience.
          </p>
        </div>

        <div className="timeline">
          {journey.map((item, index) => (
            <article className="timeline-row" key={`${item.year}-${index}`}>
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-section section-shell" id="notes">
        <div className="notes-heading">
          <p className="eyebrow">FIELD NOTES / GROWING THROUGH RESEARCH</p>
          <h2>Small notes from a long experiment.</h2>
          <p>
            Personal reflection stays close to the work: not a separate
            philosophy blog, but a record of how research changes the
            researcher.
          </p>
        </div>

        <div className="notes-grid">
          <article className="note-card note-featured">
            <div className="note-meta">
              <span>ESSAY · EN</span>
              <time>[MONTH · YEAR]</time>
            </div>
            <h3>On learning to notice resistance</h3>
            <p>
              Contact is feedback. So is a failed experiment, an awkward
              question, or a result that will not fit the story we expected.
            </p>
            <a href="#contact">Read the note ↗</a>
          </article>

          <article className="note-card">
            <div className="note-meta">
              <span>札记 · 中文</span>
              <time>[年份]</time>
            </div>
            <h3>慢一点，也是在前进</h3>
            <p>
              研究训练的不只是解决问题的能力，也是与不确定性长期相处的耐心。
            </p>
            <a href="#contact">阅读札记 ↗</a>
          </article>

          <article className="note-card">
            <div className="note-meta">
              <span>LAB NOTE · 中英混排</span>
              <time>[DATE]</time>
            </div>
            <h3>Failure as signal, 失败也是观测</h3>
            <p>
              A short mixed-language note can live naturally in the system
              without duplicating the entire page.
            </p>
            <a href="#contact">Open note ↗</a>
          </article>
        </div>
      </section>

      <section className="news-section section-shell" id="news">
        <div className="section-heading news-heading">
          <div>
            <p className="eyebrow">NEWS &amp; UPDATES</p>
            <h2>From the lab notebook</h2>
          </div>
          <p className="section-lede">
            A compact log for papers, talks, collaborations, and milestones.
          </p>
        </div>
        <div className="news-list">
          {news.map((item, index) => (
            <article key={`${item.date}-${index}`}>
              <time>{item.date}</time>
              <p>{item.text}</p>
              <a href="#contact" aria-label={`Open update ${index + 1}`}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <p className="eyebrow">CV &amp; CONTACT</p>
          <h2>Let’s build robots that understand contact.</h2>
          <p>
            I’m open to conversations about robot learning, manipulation, and
            research collaboration.
          </p>
          <a className="email-link" href="mailto:your.email@institution.edu">
            your.email@institution.edu ↗
          </a>
        </div>

        <div className="footer-meta">
          <div>
            <p>[University / Research Institute]</p>
            <p>[Lab Name] · [City, Country]</p>
          </div>
          <div className="footer-links">
            <a href="#contact">Google Scholar</a>
            <a href="#contact">GitHub</a>
            <a href="#contact">LinkedIn</a>
            <a href="#contact">Download CV</a>
          </div>
          <p className="replace-note">
            Replace all bracketed content and placeholder links before launch.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© [YEAR] Your Name. Built for a continuing academic journey.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
