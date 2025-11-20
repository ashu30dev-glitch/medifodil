// src/lib/fetchContent.js
export async function fetchContentFromUrl(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // Parse in browser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const title = (doc.querySelector("meta[property='og:title']")?.content
      || doc.querySelector("title")?.innerText
      || doc.querySelector("h1")?.innerText
      || "").trim();

    const description = (doc.querySelector("meta[name='description']")?.content
      || doc.querySelector("meta[property='og:description']")?.content
      || "").trim();

    // Try common content containers
    const selectors = ["article", "main", "#content", ".content", ".post", ".entry"];
    let contentHtml = "";
    for (const sel of selectors) {
      const el = doc.querySelector(sel);
      if (el) { contentHtml = el.innerHTML.trim(); break; }
    }
    if (!contentHtml) contentHtml = doc.body.innerHTML.slice(0, 40_000); // safe fallback (trimmed)

    // Extract links/images optionally
    const images = Array.from(doc.querySelectorAll("img"))
      .slice(0, 6)
      .map(img => img.src || img.getAttribute("data-src"))
      .filter(Boolean);

    return { success: true, title, description, contentHtml, images, rawHtml: html };
  } catch (err) {
    console.warn("fetchContentFromUrl error", err);
    return { success: false, error: String(err) };
  }
}
