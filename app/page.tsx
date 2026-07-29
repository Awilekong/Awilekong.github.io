const navItems = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const news = [
  {
    date: "2026.07",
    text: "ResTacVLA was accepted by IROS 2026.",
    href: "https://arxiv.org/abs/2607.03387",
  },
  {
    date: "2026",
    text: "Third Prize Winner of the ManiSkill-ViTac 2026 Challenge at CVPR 2026 (Leader).",
    href: "#award",
    award: true,
  },
  {
    date: "2026.06",
    text: "TouchThinker was released on arXiv.",
    href: "https://arxiv.org/abs/2606.11637",
  },
  {
    date: "2026.05",
    text: "Our quantitative rehabilitation assessment system was published in SCIENCE CHINA Technological Sciences.",
    href: "https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#publications">
        Skip to publications
      </a>

      <header className="site-header">
        <a className="brand" href="#about">
          Pengwei Zhang
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
          <a className="cv-link" href="#contact">
            CV ↗
          </a>
        </nav>
      </header>

      <section className="intro" id="about">
        <div className="intro-copy">
          <div className="intro-content">
            <p className="kicker">ROBOT LEARNING · TACTILE INTELLIGENCE</p>
            <h1>
              <strong>Pengwei</strong> Zhang
            </h1>
            <p className="role">
              Researcher in Robot Learning and Contact-Rich Manipulation
            </p>
            <p className="bio">
              I work on tactile perception, vision–touch multimodal learning,
              and learning-based control for real-world robots. My current
              research explores how embodied agents can use contact to perceive,
              reason, and act more reliably in the physical world.
            </p>
            <p className="affiliation">
              Institute of Automation, Chinese Academy of Sciences · University
              of Chinese Academy of Sciences · Zhongguancun Academy
            </p>

            <div className="topic-list" aria-label="Research interests">
              <span>Robot Learning</span>
              <span>Tactile Perception</span>
              <span>Vision–Touch Learning</span>
              <span>Embodied Intelligence</span>
            </div>

            <div className="profile-links" aria-label="Profile links">
              <a href="mailto:your.email@institution.edu">Email ↗</a>
              <a href="#contact">Google Scholar ↗</a>
              <a href="#contact">GitHub ↗</a>
              <a href="#contact">CV ↗</a>
            </div>
          </div>
        </div>

        <figure className="portrait">
          <img
            src="/profile.jpg"
            alt="Pengwei Zhang holding his cat Xiaoguo"
          />
          <figcaption>Pengwei &amp; Xiaoguo</figcaption>
        </figure>
      </section>

      <section className="section news-section" id="news">
        <div className="section-title">
          <p>UPDATES</p>
          <h2>News</h2>
        </div>
        <div className="news-list">
          {news.map((item) => (
            <a
              className={item.award ? "news-item award-item" : "news-item"}
              href={item.href}
              key={`${item.date}-${item.text}`}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              id={item.award ? "award" : undefined}
            >
              <time>{item.date}</time>
              <p>
                {item.award && <span className="award-label">AWARD</span>}
                {item.award ? <strong>{item.text}</strong> : item.text}
              </p>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="section-title publications-title">
          <div>
            <p>RESEARCH</p>
            <h2>Selected Publications</h2>
          </div>
          <a href="#contact">Google Scholar ↗</a>
        </div>

        <article className="publication">
          <a
            className="publication-image"
            href="https://arxiv.org/abs/2607.03387"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/restacvla.png"
              alt="Overview of the ResTacVLA method"
            />
            <span>IROS 2026</span>
          </a>
          <div className="publication-copy">
            <p className="venue">IROS 2026 · ACCEPTED</p>
            <h3>
              Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation
              via Residual Tactile Representation
            </h3>
            <p className="authors">
              <strong>Pengwei Zhang</strong>, Bin Xie, Xinpan Meng, Xinyu Guo,
              Ce Hao, Fang Deng, Long Cheng, and Tiancai Wang
            </p>
            <div className="paper-links">
              <details>
                <summary>Abs</summary>
                <p>
                  ResTacVLA reformulates touch as the residual between visual
                  expectation and physical sensation. Predictive-coding-inspired
                  contact primitives and a surprise-aware gate help VLA policies
                  prioritize tactile information during visually ambiguous
                  contact phases.
                </p>
              </details>
              <a
                href="https://arxiv.org/abs/2607.03387"
                target="_blank"
                rel="noreferrer"
              >
                arXiv ↗
              </a>
              <a
                href="https://awilekong.github.io/ResTacVLA/"
                target="_blank"
                rel="noreferrer"
              >
                Project ↗
              </a>
            </div>
          </div>
        </article>

        <article className="publication">
          <a
            className="publication-image publication-image-light"
            href="https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/rehab.png"
              alt="Article page for the rehabilitation assessment system"
            />
            <span>SCTS 2026</span>
          </a>
          <div className="publication-copy">
            <p className="venue">SCIENCE CHINA TECHNOLOGICAL SCIENCES · 2026</p>
            <h3>
              A Fine-Grained, Comprehensive, and Quantitative Rehabilitation
              Assessment System Based on Depth Camera
            </h3>
            <p className="authors">
              <strong>Pengwei Zhang</strong>, Long Cheng, and Yongxiang Zou
            </p>
            <div className="paper-links">
              <details>
                <summary>Abs</summary>
                <p>
                  This work combines depth-camera motion capture with YOLOv8-Pose
                  and an interpretable Trajectory–ROM–Smooth scoring algorithm.
                  Evaluation with 21 stroke patients shows close agreement with
                  experienced physicians while capturing subtle rehabilitation
                  progress at a finer granularity.
                </p>
              </details>
              <a
                href="https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3"
                target="_blank"
                rel="noreferrer"
              >
                Article ↗
              </a>
              <a
                href="https://doi.org/10.1007/s11431-026-3364-3"
                target="_blank"
                rel="noreferrer"
              >
                DOI ↗
              </a>
            </div>
          </div>
        </article>

        <article className="publication">
          <a
            className="publication-image publication-image-light"
            href="https://arxiv.org/abs/2606.11637"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/touchthinker.png"
              alt="Data overview of the TouchThinker framework"
            />
            <span>PREPRINT 2026</span>
          </a>
          <div className="publication-copy">
            <p className="venue">ARXIV PREPRINT · 2026</p>
            <h3>
              TouchThinker: Scaling Tactile Commonsense Reasoning to the Open
              World with Large-scale Data and Action-aware Representation
            </h3>
            <p className="authors">
              Kailin Lyu, Di Wu, <strong>Pengwei Zhang</strong>, Yuhang Zheng,
              Yingxin Lai, Long Xiao, Kangyi Wu, Pengna Li, Chen Gao, Lianyu Hu,
              Xiaobin Hu, Jie Hao, Ce Hao, Weihao Yuan, and Shuicheng Yan
            </p>
            <div className="paper-links">
              <details>
                <summary>Abs</summary>
                <p>
                  TouchThinker introduces a million-scale tactile reasoning
                  dataset spanning 415 objects, eight scenarios, and seven sensor
                  types. Its action-aware representation focuses reasoning on
                  informative interaction segments and improves open-world
                  tactile commonsense reasoning.
                </p>
              </details>
              <a
                href="https://arxiv.org/abs/2606.11637"
                target="_blank"
                rel="noreferrer"
              >
                arXiv ↗
              </a>
              <a
                href="https://github.com/lvkailin0118/TouchThinker"
                target="_blank"
                rel="noreferrer"
              >
                Code &amp; Data ↗
              </a>
            </div>
          </div>
        </article>
      </section>

      <footer id="contact">
        <div>
          <strong>Pengwei Zhang</strong>
          <p>Robot Learning · Tactile Intelligence</p>
        </div>
        <div className="footer-links">
          <a href="mailto:your.email@institution.edu">
            your.email@institution.edu
          </a>
          <a href="#about">Google Scholar</a>
          <a href="#about">GitHub</a>
          <a href="#about">CV</a>
        </div>
        <p className="placeholder-note">
          Email, Scholar, GitHub, CV, and Chinese name are ready to replace.
        </p>
      </footer>
    </main>
  );
}
