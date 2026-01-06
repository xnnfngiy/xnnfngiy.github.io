export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const pathname = url.pathname;

		const staticFiles = [
			"googleec6d3f409fbc2789.html",
			"favicon.ico",
			"ajax/libs/jquery/3.6.0/jquery.min.js"
		];

		if (staticFiles.includes(pathname.slice(1))) {
			return env.ASSETS.fetch(request);
		}

// 		const allowedFiles = [
// 			"googleec6d3f409fbc2789.html",
// 			"GOOGLE1.html",
// 			"GOOGLE2.html",
// 			"GOOGLE3.html",
// 			"GOOGLE4.html",
// 			"GOOGLE5.html"
// 		];

// 		if (allowedFiles.includes(pathname.slice(1))) { // hapus leading '/'
// 			const fileRes = await fetch(`https://new.ndende.eu/${pathname.slice(1)}`);

// 			if (!fileRes.ok) {
// 				return new Response("Failed to load verification file", { status: 502 });
// 			}

// 			const html = await fileRes.text();

// 			return new Response(html, {
// 				status: 200,
// 				headers: {
// 					"Content-Type": "text/html; charset=UTF-8",
// 					"Cache-Control": "public, max-age=3600",
// 				},
// 			});
// 		}

		// 		if (pathname === "/robots.txt") {
		// 			return new Response(`User-agent: *
		// Disallow:

		// Sitemap: https://${url.hostname}/sitemapee.txt
		// Sitemap: https://${url.hostname}/sitemap-indexee.xml
		// `, {
		// 				headers: { "Content-Type": "text/plain" }
		// 			});
		// 		}
		if (pathname === "/robots.txt") {

			const sitemaps = [
				"de-sitemap/sitemap-005.txt.gz",
				"de-sitemap/sitemap-013.txt.gz",
				"de-sitemap/sitemap-008.txt.gz",
				"de-sitemap/sitemap-004.txt.gz",
				"de-sitemap/sitemap-006.txt.gz",
				"de-sitemap/sitemap-002.txt.gz",
				"de-sitemap/sitemap-007.txt.gz",
				"de-sitemap/sitemap-001.txt.gz",
				"de-sitemap/sitemap-011.txt.gz",
				"de-sitemap/sitemap-003.txt.gz",
				"de-sitemap/sitemap-012.txt.gz",
				"de-sitemap/sitemap-010.txt.gz",
				"de-sitemap/sitemap-009.txt.gz",
				"de-sitemap/sitemap-000.txt.gz",
				"fr-sitemap/sitemap-001.txt.gz",
				"fr-sitemap/sitemap-004.txt.gz",
				"fr-sitemap/sitemap-011.txt.gz",
				"fr-sitemap/sitemap-013.txt.gz",
				"fr-sitemap/sitemap-003.txt.gz",
				"fr-sitemap/sitemap-009.txt.gz",
				"fr-sitemap/sitemap-012.txt.gz",
				"fr-sitemap/sitemap-006.txt.gz",
				"fr-sitemap/sitemap-008.txt.gz",
				"fr-sitemap/sitemap-002.txt.gz",
				"fr-sitemap/sitemap-000.txt.gz",
				"fr-sitemap/sitemap-010.txt.gz",
				"fr-sitemap/sitemap-007.txt.gz",
				"fr-sitemap/sitemap-005.txt.gz",
				"ko-sitemap/sitemap-000.txt.gz",
				"ko-sitemap/sitemap-012.txt.gz",
				"ko-sitemap/sitemap-010.txt.gz",
				"ko-sitemap/sitemap-008.txt.gz",
				"ko-sitemap/sitemap-002.txt.gz",
				"ko-sitemap/sitemap-006.txt.gz",
				"ko-sitemap/sitemap-005.txt.gz",
				"ko-sitemap/sitemap-003.txt.gz",
				"ko-sitemap/sitemap-004.txt.gz",
				"ko-sitemap/sitemap-007.txt.gz",
				"ko-sitemap/sitemap-001.txt.gz",
				"ko-sitemap/sitemap-009.txt.gz",
				"ko-sitemap/sitemap-013.txt.gz",
				"ko-sitemap/sitemap-011.txt.gz",
				"nl-sitemap/sitemap-000.txt.gz",
				"nl-sitemap/sitemap-009.txt.gz",
				"nl-sitemap/sitemap-012.txt.gz",
				"nl-sitemap/sitemap-006.txt.gz",
				"nl-sitemap/sitemap-005.txt.gz",
				"nl-sitemap/sitemap-007.txt.gz",
				"nl-sitemap/sitemap-004.txt.gz",
				"nl-sitemap/sitemap-010.txt.gz",
				"nl-sitemap/sitemap-001.txt.gz",
				"nl-sitemap/sitemap-013.txt.gz",
				"nl-sitemap/sitemap-003.txt.gz",
				"nl-sitemap/sitemap-008.txt.gz",
				"nl-sitemap/sitemap-011.txt.gz",
				"nl-sitemap/sitemap-002.txt.gz",
				"pl-sitemap/sitemap-011.txt.gz",
				"pl-sitemap/sitemap-001.txt.gz",
				"pl-sitemap/sitemap-010.txt.gz",
				"pl-sitemap/sitemap-009.txt.gz",
				"pl-sitemap/sitemap-003.txt.gz",
				"pl-sitemap/sitemap-007.txt.gz",
				"pl-sitemap/sitemap-005.txt.gz",
				"pl-sitemap/sitemap-008.txt.gz",
				"pl-sitemap/sitemap-013.txt.gz",
				"pl-sitemap/sitemap-012.txt.gz",
				"pl-sitemap/sitemap-002.txt.gz",
				"pl-sitemap/sitemap-000.txt.gz",
				"pl-sitemap/sitemap-004.txt.gz",
				"pl-sitemap/sitemap-006.txt.gz",
				"es-sitemap/sitemap-012.txt.gz",
				"es-sitemap/sitemap-004.txt.gz",
				"es-sitemap/sitemap-007.txt.gz",
				"es-sitemap/sitemap-006.txt.gz",
				"es-sitemap/sitemap-010.txt.gz",
				"es-sitemap/sitemap-003.txt.gz",
				"es-sitemap/sitemap-002.txt.gz",
				"es-sitemap/sitemap-013.txt.gz",
				"es-sitemap/sitemap-009.txt.gz",
				"es-sitemap/sitemap-005.txt.gz",
				"es-sitemap/sitemap-000.txt.gz",
				"es-sitemap/sitemap-011.txt.gz",
				"es-sitemap/sitemap-001.txt.gz",
				"es-sitemap/sitemap-008.txt.gz"

			];

			const sitemapLines = sitemaps
			.map(s => `Sitemap: https://${url.hostname}/${s}`)
			.join("\n");

			return new Response(
				`User-agent: *
Disallow:

${sitemapLines}
`, {
	headers: { "Content-Type": "text/plain" }
});
		}

		if (pathname.startsWith("/sitemap-indexee")) {
			const match = pathname.match(/^\/sitemap-indexee(?:-([a-z]{2}))?\.xml$/);
			const lang = match?.[1] || "";

			const listReq = new Request(`${url.origin}/list.txt`);
			const listRes = await env.ASSETS.fetch(listReq);
			if (!listRes.ok) return new Response("list.txt not found", { status: 404 });

		let lines = (await listRes.text())
		.split("\n")
		.map(l => l.trim())
		.filter(l => l && !l.startsWith("#"));

		if (lang) lines = lines.filter(l => l.startsWith(`${lang}-sitemap/`));

		// Seeded random (agar tiap subdomain urutannya beda)
		function seedStr(str) {
			let h = 0;
			for (let c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0;
			return h;
		}
		function seeded(seed) {
			return () => {
				seed = Math.sin(seed) * 10000;
				return seed - Math.floor(seed);
			};
		}
		const rnd = seeded(seedStr(url.hostname));
		for (let i = lines.length - 1; i > 0; i--) {
			const j = Math.floor(rnd() * (i + 1));
			[lines[i], lines[j]] = [lines[j], lines[i]];
		}

		const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines.map(l => `<sitemap><loc>https://${url.hostname}/${l}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

		return new Response(xml, { headers: { "Content-Type": "application/xml" } });
	}

	// ============================
	// 4. sitemap.txt / sitemap-xx.txt
	// ============================
	if (pathname.startsWith("/sitemapee")) {
	const match = pathname.match(/^\/sitemapee(?:-([a-z]{2}))?\.txt$/);
	const lang = match?.[1] || "";

	const listReq = new Request(`${url.origin}/list.txt`);
const listRes = await env.ASSETS.fetch(listReq);

if (!listRes.ok) return new Response("list.txt not found", { status: 404 });

let lines = (await listRes.text())
.split("\n")
.map(l => l.trim())
.filter(l => l && !l.startsWith("#"));

if (lang) lines = lines.filter(l => l.startsWith(`${lang}-sitemap/`));

// Seed urutan
function seedStr(str) {
let h = 0;
for (let c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0;
return h;
}
function seeded(seed) {
return () => {
seed = Math.sin(seed) * 10000;
return seed - Math.floor(seed);
};
}
const rnd = seeded(seedStr(url.hostname));
for (let i = lines.length - 1; i > 0; i--) {
const j = Math.floor(rnd() * (i + 1));
[lines[i], lines[j]] = [lines[j], lines[i]];
}

return new Response(
lines.map(l => `https://${url.hostname}/${l}`).join("\n") + "\n",
{ headers: { "Content-Type": "text/plain" } }
);
}

// ============================
// 5. Serve real sitemap gz files
// ============================
if (/^\/[a-z]{2}-sitemap\/.+$/.test(pathname)) {
	return env.ASSETS.fetch(request);
}

// ============================
// 6. Semua selain sitemap → 404
// ============================
return new Response("404 Not Found", { status: 404 });
}
};
