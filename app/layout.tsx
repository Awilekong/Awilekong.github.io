import type { Metadata } from "next";
import "@fontsource-variable/ibm-plex-sans";
import "@fontsource-variable/source-sans-3";
import Analytics from "./Analytics";
import PageProgress from "./PageProgress";
import RevealOnScroll from "./RevealOnScroll";
import SiteChrome from "./SiteChrome";
import "./globals.css";

const title = "Pengwei Zhang · Robot Learning & Tactile Intelligence";
const description =
  "Academic homepage of Pengwei Zhang, a Ph.D. student at CASIA working on robot learning, vision-tactile multimodal learning, contact-rich manipulation, force-aware imitation learning, and precision assembly.";
const profileDescription =
  "Pengwei Zhang is a Ph.D. student at the Institute of Automation, Chinese Academy of Sciences (CASIA), researching robot learning and tactile intelligence.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awilekong.github.io";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Pengwei Zhang",
      givenName: "Pengwei",
      familyName: "Zhang",
      alternateName: ["张鹏伟", "Zhang Pengwei", "Awilekong"],
      description: profileDescription,
      url: `${siteUrl}/`,
      image: `${siteUrl}/profile.jpg`,
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
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: "Pengwei Zhang — Academic Profile",
      alternateName: "张鹏伟个人学术主页",
      description: profileDescription,
      inLanguage: "en",
      dateModified: "2026-08-17",
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
      datePublished: "2026",
      url: "https://arxiv.org/abs/2606.11637",
      sameAs: "https://arxiv.org/abs/2606.11637",
      identifier: "arXiv:2606.11637",
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
        url: "/favicon.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    shortcut: "/favicon.png",
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
