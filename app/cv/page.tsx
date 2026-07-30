import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV · Pengwei Zhang",
  description: "Curriculum vitae of Pengwei Zhang.",
  alternates: {
    canonical: "/cv/",
  },
};

export default function CVPage() {
  return (
    <main className="page-shell cv-page">
      <h1>Curriculum Vitae</h1>
      <p className="cv-intro">
        Pengwei Zhang · Ph.D. Student in Robot Learning
      </p>

      <section className="cv-section">
        <h2>Education &amp; Training</h2>
        <div className="cv-entry">
          <div>
            <strong>
              Institute of Automation, Chinese Academy of Sciences
            </strong>
            <p>Ph.D. Student · Supervised by Prof. Long Cheng</p>
          </div>
          <time>Current</time>
        </div>
        <div className="cv-entry">
          <div>
            <strong>Zhongguancun Academy</strong>
            <p>Joint-training Student · Working with Prof. Ce Hao</p>
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
        <h2>Research Interests</h2>
        <p>
          Robot Learning · Contact-Rich Manipulation · Force-Aware Imitation
          Learning · Vision-Force Multimodal Learning · Precision Assembly ·
          Embodied Intelligence
        </p>
      </section>

      <section className="cv-section">
        <h2>Selected Recognition</h2>
        <div className="cv-entry">
          <div>
            <strong>
              Third Prize Winner, ManiSkill-ViTac 2026 Challenge at CVPR 2026
            </strong>
          </div>
          <time dateTime="2026">2026</time>
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
          <time dateTime="2024">2024</time>
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
          <time dateTime="2024">2024</time>
        </div>
      </section>

      <section className="cv-section">
        <h2>Profiles</h2>
        <p>
          <a
            href="https://github.com/Awilekong"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://www.xiaohongshu.com/user/profile/61112b75000000000101ca18"
            target="_blank"
            rel="noreferrer"
          >
            Xiaohongshu
          </a>
        </p>
      </section>
    </main>
  );
}
