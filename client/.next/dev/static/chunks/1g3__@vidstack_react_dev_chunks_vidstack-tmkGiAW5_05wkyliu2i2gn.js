(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-tmkGiAW5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioProvider",
    ()=>AudioProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-CWZPUheZ.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-Gsp7JHtY.js [app-client] (ecmascript)");
"use client";
;
;
//#region ../vidstack/src/providers/audio/provider.ts
/**
* The audio provider adapts the `<audio>` element to enable loading audio via the HTML Media
* Element API.
*
* @docs {@link https://www.vidstack.io/docs/player/providers/audio}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio}
* @example
* ```html
* <media-player src="https://files.vidstack.io/audio.mp3">
*   <media-provider></media-provider>
* </media-player>
* ```
*/ var AudioProvider = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLMediaProvider"] {
    $$PROVIDER_TYPE = "AUDIO";
    get type() {
        return "audio";
    }
    airPlay;
    constructor(audio, ctx){
        super(audio, ctx);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoped"])(()=>{
            this.airPlay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLAirPlayAdapter"](this.media, ctx);
        }, this.scope);
    }
    setup() {
        super.setup();
        if (this.type === "audio") this.ctx.notify("provider-setup", this);
    }
    /**
	* The native HTML `<audio>` element.
	*
	* @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement}
	*/ get audio() {
        return this.media;
    }
};
;
}),
]);

//# sourceMappingURL=1g3__%40vidstack_react_dev_chunks_vidstack-tmkGiAW5_05wkyliu2i2gn.js.map