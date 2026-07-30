import { FaGithub } from "react-icons/fa6";
import { SiXiaohongshu } from "react-icons/si";

const publications = {
  accepted: [
    {
      badge: "IROS 2026",
      badgeColor: "#00369f",
      image: "/restacvla.png",
      imageAlt: "Overview of the ResTacVLA method",
      title:
        "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation",
      authors: (
        <>
          <strong>Pengwei Zhang</strong>, Bin Xie, Xinpan Meng, Xinyu Guo, Ce
          Hao, Fang Deng, Long Cheng, and Tiancai Wang
        </>
      ),
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026",
      note: "Accepted",
      abstract:
        "ResTacVLA reformulates touch as the residual between visual expectation and physical sensation. Predictive-coding-inspired contact primitives and a surprise-aware gate help VLA policies prioritize tactile information during visually ambiguous contact phases.",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2607.03387" },
        { label: "Project", href: "https://awilekong.github.io/ResTacVLA/" },
        { label: "BibTeX", href: "https://arxiv.org/bibtex/2607.03387" },
      ],
    },
    {
      badge: "SCTS 2026",
      badgeColor: "#00629b",
      image: "/rehab.png",
      imageAlt: "Rehabilitation assessment system article preview",
      title:
        "A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera",
      authors: (
        <>
          <strong>Pengwei Zhang</strong>, Long Cheng, and Yongxiang Zou
        </>
      ),
      venue: "SCIENCE CHINA Technological Sciences, 2026",
      abstract:
        "This work combines depth-camera motion capture with YOLOv8-Pose and an interpretable Trajectory-ROM-Smooth scoring algorithm. Evaluation with 21 stroke patients shows close agreement with experienced physicians while capturing subtle rehabilitation progress at a finer granularity.",
      links: [
        {
          label: "Paper",
          href: "https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3",
        },
        {
          label: "DOI",
          href: "https://doi.org/10.1007/s11431-026-3364-3",
        },
      ],
    },
  ],
  preprints: [
    {
      badge: "Preprint",
      badgeColor: "#64748b",
      image: "/touchthinker.png",
      imageAlt: "Data overview of the TouchThinker framework",
      title:
        "TouchThinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation",
      authors: (
        <>
          Kailin Lyu, Di Wu, <strong>Pengwei Zhang</strong>, Yuhang Zheng,
          Yingxin Lai, Long Xiao, Kangyi Wu, Pengna Li, Chen Gao, Lianyu Hu,
          Xiaobin Hu, Jie Hao, Ce Hao, Weihao Yuan, and Shuicheng Yan
        </>
      ),
      venue: "arXiv preprint, 2026",
      abstract:
        "TouchThinker introduces a million-scale tactile reasoning dataset spanning 415 objects, eight scenarios, and seven sensor types. Its action-aware representation focuses reasoning on informative interaction segments and improves open-world tactile commonsense reasoning.",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2606.11637" },
        {
          label: "Code",
          href: "https://github.com/lvkailin0118/TouchThinker",
        },
        { label: "BibTeX", href: "https://arxiv.org/bibtex/2606.11637" },
      ],
    },
  ],
};

const news = [
  {
    date: "Jul 2026",
    content: (
      <>
        <a
          href="https://arxiv.org/abs/2607.03387"
          target="_blank"
          rel="noreferrer"
        >
          ResTacVLA
        </a>{" "}
        was accepted to IROS 2026.
      </>
    ),
  },
  {
    date: "2026",
    content: (
      <>
        Our rehabilitation assessment work was published in{" "}
        <a
          href="https://doi.org/10.1007/s11431-026-3364-3"
          target="_blank"
          rel="noreferrer"
        >
          SCIENCE CHINA Technological Sciences
        </a>
        .
      </>
    ),
  },
  {
    date: "2026",
    content: (
      <>
        Third Prize at the ManiSkill-ViTac 2026 Challenge at CVPR 2026
        (Team Leader).
      </>
    ),
  },
];

type Publication = (typeof publications.accepted)[number];

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <li className="publication-card">
      <div className="publication-row">
        <div className="publication-preview">
          <a
            className="venue-badge"
            href={publication.links[0].href}
            style={{ backgroundColor: publication.badgeColor }}
            target="_blank"
            rel="noreferrer"
          >
            {publication.badge}
          </a>
          <a
            href={publication.links[0].href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={publication.image} alt={publication.imageAlt} />
          </a>
        </div>

        <div className="publication-details">
          <h3>{publication.title}</h3>
          <p className="authors">{publication.authors}</p>
          <p className="periodical">
            <em>{publication.venue}</em>
          </p>
          {"note" in publication && publication.note ? (
            <p className="periodical">{publication.note}</p>
          ) : null}
          <div className="paper-links">
            <details>
              <summary>Abs</summary>
              <p>{publication.abstract}</p>
            </details>
            {publication.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="page-shell" id="about">
      <a className="skip-link" href="#publications">
        Skip to publications
      </a>

      <article className="about-page">
        <header className="profile-header">
          <h1>
            <span>
              <strong>Pengwei</strong> Zhang
            </span>
            <span className="chinese-name" lang="zh-CN">
              张鹏伟
            </span>
          </h1>
          <p>
            Ph.D. Student · Robot Learning &amp; Tactile Intelligence ·{" "}
            <a href="https://ia.cas.cn/" target="_blank" rel="noreferrer">
              CASIA
            </a>
          </p>
        </header>

        <figure className="profile-photo">
          <img
            src="/profile.jpg"
            alt="Pengwei Zhang holding his cat Xiaoguo"
          />
        </figure>

        <div className="about-intro">
          <p>
            I am <strong>Pengwei Zhang</strong>, a Ph.D. student at the Institute
            of Automation, Chinese Academy of Sciences (
            <a href="https://ia.cas.cn/" target="_blank" rel="noreferrer">
              CASIA
            </a>
            ). I am fortunate to be supervised by{" "}
            <a
              href="https://people.ucas.ac.cn/~chenglong"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Long Cheng
            </a>
            .
          </p>
          <p>
            I received my Bachelor&apos;s degree in Automation from{" "}
            <a
              href="https://en.bjtu.edu.cn/"
              target="_blank"
              rel="noreferrer"
            >
              Beijing Jiaotong University
            </a>
            . I am also a joint-training student at Zhongguancun Academy (
            <a
              href="https://www.bza.edu.cn/en"
              target="_blank"
              rel="noreferrer"
            >
              ZGCA
            </a>
            ), working with{" "}
            <a
              href="https://cehao1.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Ce Hao
            </a>
            .
          </p>
          <p>
            My research focuses on building{" "}
            <strong>
              tactile-aware learning systems for reliable real-world robotic
              interaction
            </strong>
            , with particular interests in contact-rich manipulation,
            vision-force multimodal learning, force-aware imitation learning,
            precision assembly, and embodied intelligence.
          </p>

          <div className="research-tags" aria-label="Research interests">
            <span>Robot Learning</span>
            <span>Contact-Rich Manipulation</span>
            <span>Vision-Force Learning</span>
            <span>Embodied Intelligence</span>
          </div>
        </div>

        <section
          className="home-section news-section"
          aria-labelledby="news-title"
        >
          <div className="section-heading compact-heading">
            <div>
              <p className="section-kicker">Updates</p>
              <h2 id="news-title">News</h2>
            </div>
          </div>
          <ul className="news-list">
            {news.map((item, index) => (
              <li key={`${item.date}-${index}`}>
                <time>{item.date}</time>
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="home-section selected-publications"
          id="publications"
          aria-labelledby="selected-publications-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">Research</p>
              <h2 id="selected-publications-title">Selected Publications</h2>
            </div>
          </div>

          <div className="publication-group-heading">
            <h3>Peer-reviewed &amp; Accepted</h3>
            <span>Published research</span>
          </div>
          <ol className="bibliography">
            {publications.accepted.map((publication) => (
              <PublicationCard
                publication={publication}
                key={publication.title}
              />
            ))}
          </ol>

          <div className="publication-group-heading">
            <h3>Preprints &amp; Under Review</h3>
            <span>Latest work</span>
          </div>
          <ol className="bibliography">
            {publications.preprints.map((publication) => (
              <PublicationCard
                publication={publication}
                key={publication.title}
              />
            ))}
          </ol>

          <div className="publication-group-heading recognition-heading">
            <h3>Selected Recognition</h3>
          </div>
          <ul className="recognition-list">
            <li>
              <time>2026</time>
              <strong>
                Third Prize Winner of the ManiSkill-ViTac 2026 Challenge at CVPR
                2026
              </strong>
              <span>— Leader</span>
            </li>
            <li>
              <span className="recognition-date">Undergraduate</span>
              <strong>
                Zhixing Scholarship · Xiaomi Special Scholarship · Beijing
                Jiaotong University “Star of Self-Strengthening”
              </strong>
              <span className="recognition-source">
                <a
                  href="https://mp.weixin.qq.com/s/JSoGWFeezXtnz1TpyoM3tw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Profile ↗
                </a>
              </span>
            </li>
            <li>
              <span className="recognition-date">Media</span>
              <strong>
                北京日报人物报道｜在学习与成长中寻找自己的方向
              </strong>
              <span className="recognition-source">
                <a
                  href="https://peking.bjd.com.cn/content/s669a55f0e4b064178156eac7.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read ↗
                </a>
              </span>
            </li>
          </ul>
        </section>

        <div className="social-links" aria-label="Social profiles">
          <a
            className="github-icon"
            href="https://github.com/Awilekong"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            className="xiaohongshu-icon"
            href="https://www.xiaohongshu.com/user/profile/61112b75000000000101ca18"
            target="_blank"
            rel="noreferrer"
            title="Xiaohongshu"
          >
            <SiXiaohongshu aria-hidden="true" />
            <span className="sr-only">Xiaohongshu</span>
          </a>
        </div>
      </article>
    </main>
  );
}
