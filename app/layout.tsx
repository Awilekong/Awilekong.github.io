import type { Metadata } from "next";
import { headers } from "next/headers";
import SiteChrome from "./SiteChrome";
import "./globals.css";

const title = "Pengwei Zhang · Robot Learning & Tactile Intelligence";
const description =
  "Academic homepage of Pengwei Zhang, a Ph.D. student at CASIA working on robot learning, tactile intelligence, contact-rich manipulation, and embodied AI.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "Pengwei Zhang",
      "robot learning",
      "tactile intelligence",
      "contact-rich manipulation",
      "CASIA",
    ],
    icons: {
      icon: "/profile.jpg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og-v2.png`,
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
      images: [`${origin}/og-v2.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <SiteChrome />
        {children}
        <footer className="site-footer">
          <p>
            © Copyright 2026 Pengwei Zhang. Academic layout inspired by the{" "}
            <a
              href="https://github.com/alshedivat/al-folio"
              target="_blank"
              rel="noreferrer"
            >
              al-folio
            </a>{" "}
            theme.
          </p>
        </footer>
      </body>
    </html>
  );
}
