import type { Metadata } from "next";
import SiteChrome from "./SiteChrome";
import "./globals.css";

const title = "Pengwei Zhang · Robot Learning & Tactile Intelligence";
const description =
  "Academic homepage of Pengwei Zhang, a Ph.D. student at CASIA working on robot learning, tactile intelligence, contact-rich manipulation, and embodied AI.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awilekong.github.io";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Pengwei Zhang",
      alternateName: "张鹏伟",
      url: `${siteUrl}/`,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: "Ph.D. Student",
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
        "Contact-Rich Manipulation",
        "Force-Aware Imitation Learning",
        "Vision-Force Multimodal Learning",
        "Precision Assembly and Insertion",
        "Reinforcement Learning",
        "Embodied Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: title,
      description,
      inLanguage: ["en", "zh-CN"],
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
    "vision-force multimodal learning",
    "precision assembly",
    "embodied intelligence",
    "CASIA",
  ],
  alternates: {
    canonical: "/",
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
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-v2.png`,
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
    images: [`${siteUrl}/og-v2.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{const theme=localStorage.getItem("pengwei-theme");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme}}catch{}',
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
        {children}
      </body>
    </html>
  );
}
