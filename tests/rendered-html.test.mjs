import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.doesNotMatch(html, /noindex/i);
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
