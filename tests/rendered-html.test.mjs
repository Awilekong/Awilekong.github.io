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
  assert.match(html, /"alternateName":"张鹏伟"/i);
  assert.match(html, /<html lang="en" data-theme="light"/i);
  assert.doesNotMatch(html, /noindex/i);
});

test("renders the v1.1 academic homepage structure", async () => {
  const [response, siteChrome] = await Promise.all([
    render(),
    readFile(new URL("../app/SiteChrome.tsx", import.meta.url), "utf8"),
  ]);
  const html = await response.text();

  assert.match(html, /张鹏伟/);
  assert.match(html, />News<\/h2>/);
  assert.match(html, /Scholar Search/);
  assert.match(html, /Paper/);
  assert.match(html, /Project/);
  assert.match(html, /BibTeX/);
  assert.doesNotMatch(html, />Abs</);
  assert.doesNotMatch(html, /Published research|Latest work/);
  assert.match(siteChrome, /localStorage\.getItem\("pengwei-theme"\)/);
  assert.match(siteChrome, /localStorage\.setItem\("pengwei-theme"/);
});

test("renders a substantive web CV", async () => {
  const response = await render("/cv");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Curriculum Vitae/);
  assert.match(html, /Education &amp; Training/);
  assert.match(html, /Research Focus/);
  assert.match(html, /Selected Publications/);
  assert.match(html, /Feeling the Unexpected: ResTacVLA/);
  assert.match(html, /TouchThinker/);
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
