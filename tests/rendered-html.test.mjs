import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost/"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders indexable homepage metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Pengwei Zhang · Robot Learning &amp; Tactile Intelligence<\/title>/i,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/awilekong\.github\.io\/"\/>/i,
  );
  assert.match(html, /<script type="application\/ld\+json">/i);
  assert.match(html, /"@type":"Person"/i);
  assert.match(html, /"@type":"ScholarlyArticle"/i);
  assert.match(html, /"alternateName":"张鹏伟"/i);
  assert.match(html, /<html lang="en" data-theme="dark"/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("bundles the intended academic typography", async () => {
  const [layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /@fontsource-variable\/ibm-plex-sans/);
  assert.match(layout, /@fontsource-variable\/source-sans-3/);
  assert.match(styles, /"IBM Plex Sans Variable"/);
  assert.match(styles, /"Source Sans 3 Variable"/);
  assert.doesNotMatch(styles, /font-family:\s*Roboto/);
  assert.match(packageJson, /"@fontsource-variable\/ibm-plex-sans"/);
  assert.match(packageJson, /"@fontsource-variable\/source-sans-3"/);
});

test("renders the v1 layout with the selected enhancements", async () => {
  const [
    response,
    siteChrome,
    likeButton,
    shareButton,
    citationMenu,
    analytics,
    pageProgress,
    profilePhoto,
  ] = await Promise.all([
    render(),
    readFile(new URL("../app/SiteChrome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/LikeButton.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ShareButton.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/CitationMenu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/Analytics.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/PageProgress.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ProfilePhoto.tsx", import.meta.url), "utf8"),
  ]);
  const html = await response.text();

  assert.match(html, /张鹏伟/);
  assert.match(html, />News<\/h2>/);
  assert.match(html, /I am fortunate to be supervised by/);
  assert.match(html, /I am also a joint-training student/);
  assert.doesNotMatch(html, /<span>Robot Learning<\/span>/);
  assert.match(html, /vision-tactile multimodal learning/i);
  assert.doesNotMatch(html, /precision assembly, and embodied intelligence/i);
  assert.match(html, />Challenge</);
  assert.match(html, />Profile</);
  assert.match(html, /dateTime="2026">2026<\/time>/);
  assert.match(html, /dateTime="2024">2024<\/time>/);
  assert.doesNotMatch(html, /Leader/);
  assert.match(html, /class="recognition-title-link"/);
  assert.doesNotMatch(html, /Profile ↗|Read ↗/);
  assert.match(html, /Paper/);
  assert.match(html, /Project/);
  assert.match(html, /Code/);
  assert.match(html, /DOI/);
  assert.match(html, /BibTeX/);
  assert.match(html, />Abs</);
  assert.match(html, />Cite</);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /restacvla\.webp/);
  assert.match(html, /Published research|Latest work/);
  assert.doesNotMatch(html, /Scholar Search/);
  assert.doesNotMatch(html, /class="profile-links"/);
  assert.match(html, /mailto:zhangpengwei2024@ia\.ac\.cn/);
  assert.match(html, /mailto:pweiii@163\.com/);
  assert.match(html, /pweiii@163\.com/);
  assert.match(siteChrome, /localStorage\.getItem\("pengwei-theme"\)/);
  assert.match(siteChrome, /localStorage\.setItem\("pengwei-theme"/);
  assert.match(html, />Like</);
  assert.match(likeButton, /Liked/);
  assert.match(likeButton, /pengwei-homepage-liked/);
  assert.match(likeButton, /like-button-burst/);
  assert.match(likeButton, /INITIAL_LIKE_COUNT = 7/);
  assert.match(likeButton, /api\.counterapi\.dev/);
  assert.match(html, /Share Pengwei Zhang/);
  assert.ok(
    html.indexOf('title="Xiaohongshu"') <
      html.indexOf('title="Share homepage"'),
  );
  assert.match(shareButton, /navigator\.share/);
  assert.match(shareButton, /navigator\.clipboard\.writeText/);
  assert.match(shareButton, /QRCodeSVG/);
  assert.match(shareButton, /Pengwei-Zhang\.vcf/);
  assert.match(citationMenu, /Copy Citation/);
  assert.match(citationMenu, /Copy BibTeX/);
  assert.match(analytics, /navigator\.doNotTrack/);
  assert.match(analytics, /data-analytics-event/);
  assert.match(html, /class="reading-progress"/);
  assert.match(pageProgress, /Back to top/);
  assert.match(pageProgress, /window\.scrollTo/);
  assert.match(html, /Activate for a small surprise/);
  assert.match(profilePhoto, /Xiaoguo approves this research/);
});

test("keeps the compact v1 web CV", async () => {
  const response = await render("/cv");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Curriculum Vitae/);
  assert.match(html, /Education &amp; Training/);
  assert.match(html, /Research Interests/);
  assert.match(html, /Selected Recognition/);
  assert.match(html, />Profiles</);
  assert.doesNotMatch(html, /Scholar Search/);
  assert.doesNotMatch(html, /Selected Publications/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/awilekong\.github\.io\/cv\/"\/>/i,
  );
});

test("publishes crawler discovery files", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /^User-agent: \*\r?\nAllow: \//);
  assert.match(
    robots,
    /Sitemap: https:\/\/awilekong\.github\.io\/sitemap\.xml/,
  );
  assert.match(sitemap, /<loc>https:\/\/awilekong\.github\.io\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/awilekong\.github\.io\/cv\/<\/loc>/);
});
