import type { Metadata } from "next";
import "@fontsource-variable/ibm-plex-sans";
import "@fontsource-variable/source-sans-3";
import Analytics from "./Analytics";
import PageProgress from "./PageProgress";
import RevealOnScroll from "./RevealOnScroll";
import SiteChrome from "./SiteChrome";
import { submissions } from "./submissions";
import "./globals.css";

const title = "Pengwei Zhang (张鹏伟) · Robot Learning & Tactile Intelligence";
const description =
  "Pengwei Zhang (张鹏伟) is a Ph.D. student at CASIA working on robot learning, vision-tactile multimodal learning, contact-rich manipulation, force-aware imitation learning, and precision assembly.";
const profileDescription =
  "Pengwei Zhang (张鹏伟) is a Ph.D. student at the Institute of Automation, Chinese Academy of Sciences (CASIA), researching robot learning and tactile intelligence.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awilekong.github.io";
const profileImageUrl = `${siteUrl}/profile-search.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...submissions.map((paper) => ({
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#${paper.id}`,
      headline: paper.title,
      author: paper.authors.map((name) =>
        name === "Pengwei Zhang"
          ? { "@id": `${siteUrl}/#person` }
          : { "@type": "Person", name },
      ),
      dateCreated: paper.submitted,
      creativeWorkStatus: "Submitted",
      description: `Manuscript submitted to ${paper.venue}.`,
    })),
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#profile-image`,
      url: profileImageUrl,
      contentUrl: profileImageUrl,
      thumbnailUrl: profileImageUrl,
      width: 900,
      height: 900,
      caption: "Pengwei Zhang (张鹏伟) with his cat Xiaoguo",
      representativeOfPage: true,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Pengwei Zhang",
      givenName: "Pengwei",
      familyName: "Zhang",
      alternateName: ["张鹏伟", "Zhang Pengwei", "Awilekong"],
      description: profileDescription,
      url: `${siteUrl}/`,
      image: {
        "@id": `${siteUrl}/#profile-image`,
      },
      jobTitle: "Ph.D. Student",
      mainEntityOfPage: {
        "@id": `${siteUrl}/#profile-page`,
      },
      affiliation: [
        {
          "@type": "Organization",
          name: "Institute of Automation, Chinese Academy of Sciences",
          alternateName: "CASIA",
          url: "https://ia.cas.cn/",
        },
        {
          "@type": "Organization",
          name: "Zhongguancun Academy",
          alternateName: "ZGCA",
          url: "https://www.bza.edu.cn/en",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Beijing Jiaotong University",
        url: "https://en.bjtu.edu.cn/",
      },
      sameAs: [
        "https://scholar.google.com/citations?user=Fb-JqDYAAAAJ&hl=zh-CN",
        "https://openreview.net/profile?id=~Pengwei_Zhang2",
        "https://github.com/Awilekong",
        "https://www.xiaohongshu.com/user/profile/61112b75000000000101ca18",
      ],
      knowsAbout: [
        "Robot Learning",
        "Tactile Intelligence",
        "Contact-Rich Manipulation",
        "Force-Aware Imitation Learning",
        "Vision-Tactile Multimodal Learning",
        "Precision Assembly",
        "Embodied Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Pengwei Zhang",
      alternateName: [
        "张鹏伟",
        "Pengwei Zhang Academic Homepage",
        "awilekong.github.io",
      ],
      description,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      image: {
        "@id": `${siteUrl}/#profile-image`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: "Pengwei Zhang — Academic Profile",
      alternateName: "张鹏伟个人学术主页",
      description: profileDescription,
      inLanguage: "en",
      dateModified: "2026-11-12",
      primaryImageOfPage: {
        "@id": `${siteUrl}/#profile-image`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#restacvla`,
      headline:
        "Feeling the Unexpected: ResTacVLA for Contact-Rich Manipulation via Residual Tactile Representation",
      author: [
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Bin Xie" },
        { "@type": "Person", name: "Xinpan Meng" },
        { "@type": "Person", name: "Xinyu Guo" },
        { "@type": "Person", name: "Ce Hao" },
        { "@type": "Person", name: "Fang Deng" },
        { "@type": "Person", name: "Long Cheng" },
        { "@type": "Person", name: "Tiancai Wang" },
      ],
      datePublished: "2026",
      url: "https://arxiv.org/abs/2607.03387",
      sameAs: "https://arxiv.org/abs/2607.03387",
      isPartOf: {
        "@type": "CreativeWork",
        name: "Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026",
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#rehabilitation-assessment`,
      headline:
        "A Fine-Grained, Comprehensive, and Quantitative Rehabilitation Assessment System Based on Depth Camera",
      author: [
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Long Cheng" },
        { "@type": "Person", name: "Yongxiang Zou" },
      ],
      datePublished: "2026",
      url: "https://doi.org/10.1007/s11431-026-3364-3",
      sameAs:
        "https://www.sciengine.com/SCTS/doi/10.1007/s11431-026-3364-3",
      identifier: "https://doi.org/10.1007/s11431-026-3364-3",
      isPartOf: {
        "@type": "Periodical",
        name: "SCIENCE CHINA Technological Sciences",
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#touchthinker`,
      headline:
        "TouchThinker: Scaling Tactile Commonsense Reasoning to the Open World with Large-scale Data and Action-aware Representation",
      author: [
        { "@type": "Person", name: "Kailin Lyu" },
        { "@type": "Person", name: "Di Wu" },
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Yuhang Zheng" },
        { "@type": "Person", name: "Yingxin Lai" },
        { "@type": "Person", name: "Long Xiao" },
        { "@type": "Person", name: "Kangyi Wu" },
        { "@type": "Person", name: "Pengna Li" },
        { "@type": "Person", name: "Chen Gao" },
        { "@type": "Person", name: "Lianyu Hu" },
        { "@type": "Person", name: "Xiaobin Hu" },
        { "@type": "Person", name: "Jie Hao" },
        { "@type": "Person", name: "Ce Hao" },
        { "@type": "Person", name: "Weihao Yuan" },
        { "@type": "Person", name: "Shuicheng Yan" },
      ],
      datePublished: "2026-10",
      url: "https://aclanthology.org/2026.emnlp-main.1925/",
      sameAs: [
        "https://doi.org/10.18653/2026.emnlp-main.1925",
        "https://arxiv.org/abs/2606.11637",
      ],
      identifier: "https://doi.org/10.18653/2026.emnlp-main.1925",
      pagination: "43841–43858",
      publisher: {
        "@type": "Organization",
        name: "Association for Computational Linguistics",
      },
      isPartOf: {
        "@type": "CreativeWork",
        name: "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing",
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#mipd`,
      headline:
        "MIPD: A Multi-Sensory Interactive Perception Dataset for Embodied Intelligent Driving",
      author: [
        { "@type": "Person", name: "Zhiwei Li" },
        { "@type": "Person", name: "Tingzhen Zhang" },
        { "@type": "Person", name: "Meihua Zhou" },
        { "@type": "Person", name: "Dandan Tang" },
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Wenzhuo Liu" },
        { "@type": "Person", name: "Qiaoning Yang" },
        { "@type": "Person", name: "Tianyu Shen" },
        { "@type": "Person", name: "Kunfeng Wang" },
        { "@type": "Person", name: "Huaping Liu" },
      ],
      datePublished: "2025-11",
      url: "https://doi.org/10.1109/TITS.2025.3593298",
      sameAs: [
        "https://ieeexplore.ieee.org/document/11112801/",
        "https://arxiv.org/abs/2411.05881",
      ],
      identifier: "https://doi.org/10.1109/TITS.2025.3593298",
      pagination: "21320–21334",
      isPartOf: {
        "@type": "PublicationIssue",
        issueNumber: "11",
        isPartOf: {
          "@type": "PublicationVolume",
          volumeNumber: "26",
          isPartOf: {
            "@type": "Periodical",
            name: "IEEE Transactions on Intelligent Transportation Systems",
          },
        },
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#monocular-depth-ranging`,
      headline: "Customized Training and Application of Monocular Depth Ranging for Assisted Driving",
      author: [
        { "@type": "Person", name: "Jingwen Li" },
        { "@type": "Person", name: "Chuhan Wang" },
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Ruipeng Gao" },
        { "@type": "Person", name: "Dan Tao" },
      ],
      datePublished: "2023-07-17",
      url: "https://ieeexplore.ieee.org/document/10226619/",
      identifier: "https://doi.org/10.1109/ICCE-Taiwan58799.2023.10226619",
      pagination: "391–392",
      isPartOf: {
        "@type": "CreativeWork",
        name: "2023 International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
      },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#dm0`,
      headline:
        "DM0: An Embodied-Native Vision-Language-Action Model towards Physical AI",
      author: [
        { "@type": "Person", name: "En Yu" },
        { "@type": "Person", name: "Haoran Lv" },
        { "@type": "Person", name: "Jianjian Sun" },
        { "@type": "Person", name: "Kangheng Lin" },
        { "@type": "Person", name: "Ruitao Zhang" },
        { "@type": "Person", name: "Yukang Shi" },
        { "@type": "Person", name: "Yuyang Chen" },
        { "@type": "Person", name: "Ze Chen" },
        { "@type": "Person", name: "Ziheng Zhang" },
        { "@type": "Person", name: "Fan Jia" },
        { "@type": "Person", name: "Kaixin Liu" },
        { "@type": "Person", name: "Meng Zhang" },
        { "@type": "Person", name: "Ruitao Hao" },
        { "@type": "Person", name: "Saike Huang" },
        { "@type": "Person", name: "Songhan Xie" },
        { "@type": "Person", name: "Yu Liu" },
        { "@type": "Person", name: "Zhao Wu" },
        { "@type": "Person", name: "Bin Xie" },
        { "@id": `${siteUrl}/#person` },
        { "@type": "Person", name: "Qi Yang" },
        { "@type": "Person", name: "Xianchi Deng" },
        { "@type": "Person", name: "Yunfei Wei" },
        { "@type": "Person", name: "Enwen Zhang" },
        { "@type": "Person", name: "Hongyang Peng" },
        { "@type": "Person", name: "Jie Zhao" },
        { "@type": "Person", name: "Kai Liu" },
        { "@type": "Person", name: "Wei Sun" },
        { "@type": "Person", name: "Yajun Wei" },
        { "@type": "Person", name: "Yi Yang" },
        { "@type": "Person", name: "Yunqiao Zhang" },
        { "@type": "Person", name: "Ziwei Yan" },
        { "@type": "Person", name: "Haitao Yang" },
        { "@type": "Person", name: "Hao Liu" },
        { "@type": "Person", name: "Haoqiang Fan" },
        { "@type": "Person", name: "Haowei Zhang" },
        { "@type": "Person", name: "Junwen Huang" },
        { "@type": "Person", name: "Yang Chen" },
        { "@type": "Person", name: "Yunchao Ma" },
        { "@type": "Person", name: "Yunhuan Yang" },
        { "@type": "Person", name: "Zhengyuan Du" },
        { "@type": "Person", name: "Ziming Liu" },
        { "@type": "Person", name: "Jiahui Niu" },
        { "@type": "Person", name: "Yucheng Zhao" },
        { "@type": "Person", name: "Daxin Jiang" },
        { "@type": "Person", name: "Wenbin Tang" },
        { "@type": "Person", name: "Xiangyu Zhang" },
        { "@type": "Person", name: "Zheng Ge" },
        { "@type": "Person", name: "Erjin Zhou" },
        { "@type": "Person", name: "Tiancai Wang" },
      ],
      datePublished: "2026-02-16",
      url: "https://arxiv.org/abs/2602.14974",
      sameAs: "https://doi.org/10.48550/arXiv.2602.14974",
      identifier: "arXiv:2602.14974",
      isPartOf: {
        "@type": "CreativeWork",
        name: "arXiv preprint",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Pengwei Zhang",
  authors: [{ name: "Pengwei Zhang", url: `${siteUrl}/` }],
  creator: "Pengwei Zhang",
  publisher: "Pengwei Zhang",
  category: "Academic research",
  keywords: [
    "Pengwei Zhang",
    "张鹏伟",
    "robot learning",
    "tactile intelligence",
    "contact-rich manipulation",
    "force-aware imitation learning",
    "vision-tactile multimodal learning",
    "precision assembly",
    "embodied intelligence",
    "CASIA",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "UNMfLNrqM8WtR_oAe5rbG7_ny5pltU2eUDJix3jh6CQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-portrait.png",
        type: "image/png",
        sizes: "384x384",
      },
    ],
    shortcut: "/favicon-portrait.png",
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title,
    description,
    siteName: "Pengwei Zhang",
    locale: "en_US",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-v2.jpg`,
        width: 1536,
        height: 1024,
        alt: "Pengwei Zhang — Robot Learning and Tactile Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-v2.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="image_src" href={profileImageUrl} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{const theme=localStorage.getItem("pengwei-theme");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme}}catch{}',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'document.documentElement.classList.add("reveal-loading");setTimeout(()=>document.documentElement.classList.remove("reveal-loading"),2000)',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <SiteChrome />
        <PageProgress />
        <RevealOnScroll />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
