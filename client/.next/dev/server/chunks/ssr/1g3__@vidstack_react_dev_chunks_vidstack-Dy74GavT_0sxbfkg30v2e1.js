module.exports = [
"[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-Dy74GavT.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findYouTubePoster",
    ()=>findYouTubePoster,
    "resolveYouTubeVideoId",
    ()=>resolveYouTubeVideoId
]);
"use client";
//#region ../vidstack/src/providers/youtube/utils.ts
const videoIdRE = /(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)(?:\/shorts)?\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/;
const posterCache = /* @__PURE__ */ new Map();
const pendingFetch = /* @__PURE__ */ new Map();
function resolveYouTubeVideoId(src) {
    return src.match(videoIdRE)?.[1];
}
async function findYouTubePoster(videoId, abort) {
    if (posterCache.has(videoId)) return posterCache.get(videoId);
    if (pendingFetch.has(videoId)) return pendingFetch.get(videoId);
    const pending = new Promise(async (resolve)=>{
        for (const size of [
            "maxresdefault",
            "sddefault",
            "hqdefault"
        ])for (const webp of [
            true,
            false
        ]){
            const url = resolveYouTubePosterURL(videoId, size, webp);
            if ((await fetch(url, {
                mode: "no-cors",
                signal: abort.signal
            })).status < 400) {
                posterCache.set(videoId, url);
                resolve(url);
                return;
            }
        }
    }).catch(()=>"").finally(()=>pendingFetch.delete(videoId));
    pendingFetch.set(videoId, pending);
    return pending;
}
function resolveYouTubePosterURL(videoId, size, webp) {
    return `https://i.ytimg.com/${webp ? "vi_webp" : "vi"}/${videoId}/${size}.${webp ? "webp" : "jpg"}`;
}
;
}),
];

//# sourceMappingURL=1g3__%40vidstack_react_dev_chunks_vidstack-Dy74GavT_0sxbfkg30v2e1.js.map