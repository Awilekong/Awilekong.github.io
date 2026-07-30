import type { Metadata } from "next";
import Link from "next/link";

const scholarSearchUrl =
  "https://scholar.google.com/scholar?q=%22Pengwei+Zhang%22+ResTacVLA";

const selectedPublications = [
  {
    title:
      "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026",
    paper: "https://arxiv.org/abs/2607.03387",
    project: "https://awilekong.github.io/ResTacVLA/",
  },
  {
    title:
      "A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera",
    venue: "SCIENCE CHINA Technological Sciences, 2026",
    paper:
      "https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3",
  },
  {
    title:
      "TouchThinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation",
    venue: "arXiv preprint, 2026",
    paper: "https://arxiv.org/abs/2606.11637",
    code: "https://github.com/lvkailin0118/TouchThinker",
  },
];

export const metadata: Metadata = {
  title: "CV · Pengwei Zhang",
  description:
    "Academic curriculum vitae of Pengwei Zhang, a Ph.D. student at CASIA working on robot learning and tactile intelligence.",
  alternates: {
    canonical: "/cv/",
  },
};

export default function CVPage() {
  return (
    <main className="page-shell cv-page">
      <header className="cv-header">
        <h1>
          Curriculum Vitae
          <span lang="zh-CN">张鹏伟</span>
        </h1>
        <p className="cv-intro">
          Pengwei Zhang · Ph.D. Student in Robot Learning · CASIA
        </p>
        <nav className="cv-profile-links" aria-label="Profiles">
          <Link href="/">Homepage</Link>
          <a href={scholarSearchUrl} target="_blank" rel="noreferrer">
            Scholar Search
          </a>
          <a
            href="https://github.com/Awilekong"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.xiaohongshu.com/user/profile/61112b75000000000101ca18"
            target="_blank"
            rel="noreferrer"
          >
            Xiaohongshu
          </a>
        </nav>
      </header>

      <section className="cv-section">
        <h2>Education &amp; Training</h2>
        <div className="cv-entry">
          <div>
            <strong>
              Institute of Automation, Chinese Academy of Sciences
            </strong>
            <p>
              Ph.D. Student · Supervised by{" "}
              <a
                href="https://people.ucas.ac.cn/~chenglong"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Long Cheng
              </a>
            </p>
          </div>
          <time>Current</time>
        </div>
        <div className="cv-entry">
          <div>
            <strong>Zhongguancun Academy</strong>
            <p>
              Joint-training Student · Working with{" "}
              <a
                href="https://cehao1.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Ce Hao
              </a>
            </p>
          </div>
          <time>Current</time>
        </div>
        <div className="cv-entry">
          <div>
            <strong>Beijing Jiaotong University</strong>
            <p>Bachelor&apos;s Degree in Automation</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Research Focus</h2>
        <p>
          I study tactile-aware learning systems for reliable real-world
          robotic interaction, with particular interests in robot learning,
          contact-rich manipulation, force-aware imitation learning,
          vision-force multimodal learning, precision assembly, reinforcement
          learning, and embodied intelligence.
        </p>
      </section>

      <section className="cv-section">
        <h2>Selected Publications</h2>
        <ol className="cv-publications">
          {selectedPublications.map((publication) => (
            <li key={publication.title}>
              <strong>{publication.title}</strong>
              <p>
                <em>{publication.venue}</em>
              </p>
              <div className="cv-publication-links">
                <a
                  href={publication.paper}
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper
                </a>
                {"project" in publication && publication.project ? (
                  <a
                    href={publication.project}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project
                  </a>
                ) : null}
                {"code" in publication && publication.code ? (
                  <a
                    href={publication.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cv-section">
        <h2>Selected Recognition</h2>
        <div className="cv-entry">
          <div>
            <strong>
              Third Prize Winner, ManiSkill-ViTac 2026 Challenge at CVPR 2026
            </strong>
            <p>Team Leader</p>
          </div>
          <time>2026</time>
        </div>
        <div className="cv-entry">
          <div>
            <strong>
              Zhixing Scholarship · Xiaomi Special Scholarship · Beijing
              Jiaotong University “Star of Self-Strengthening”
            </strong>
            <p>
              Undergraduate honors ·{" "}
              <a
                href="https://mp.weixin.qq.com/s/JSoGWFeezXtnz1TpyoM3tw"
                target="_blank"
                rel="noreferrer"
              >
                BJTU profile
              </a>
            </p>
          </div>
          <time>Undergraduate</time>
        </div>
        <div className="cv-entry">
          <div>
            <strong>北京日报人物报道｜在学习与成长中寻找自己的方向</strong>
            <p>
              <a
                href="https://peking.bjd.com.cn/content/s669a55f0e4b064178156eac7.html"
                target="_blank"
                rel="noreferrer"
              >
                Beijing Daily profile
              </a>
            </p>
          </div>
          <time>Media</time>
        </div>
      </section>
    </main>
  );
}
