(()=>{"use strict";module.exports = [
"[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-DxWyY4DQ.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCastContext",
    ()=>getCastContext,
    "getCastErrorMessage",
    ()=>getCastErrorMessage,
    "getCastFrameworkURL",
    ()=>getCastFrameworkURL,
    "getCastSession",
    ()=>getCastSession,
    "getCastSessionMedia",
    ()=>getCastSessionMedia,
    "getDefaultCastOptions",
    ()=>getDefaultCastOptions,
    "hasActiveCastSession",
    ()=>hasActiveCastSession,
    "hasLoadedCastFramework",
    ()=>hasLoadedCastFramework,
    "isCastAvailable",
    ()=>isCastAvailable,
    "isCastConnected",
    ()=>isCastConnected,
    "listenCastContextEvent",
    ()=>listenCastContextEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-CWZPUheZ.js [app-ssr] (ecmascript)");
"use client";
;
//#region ../vidstack/src/providers/google-cast/utils.ts
function getCastFrameworkURL() {
    return "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
}
/**
* Whether the Google Cast framework has loaded.
*/ function hasLoadedCastFramework() {
    return !!window.cast?.framework;
}
/**
* Whether Google Cast is available on this platform.
*/ function isCastAvailable() {
    return !!window.chrome?.cast?.isAvailable;
}
/**
* Whether the cast sender is connected.
*/ function isCastConnected() {
    return getCastContext().getCastState() === cast.framework.CastState.CONNECTED;
}
/**
* @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastContext}
*/ function getCastContext() {
    return window.cast.framework.CastContext.getInstance();
}
/**
* @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastSession}
*/ function getCastSession() {
    return getCastContext().getCurrentSession();
}
/**
* @see {@link https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.media.Media}
*/ function getCastSessionMedia() {
    return getCastSession()?.getSessionObj().media[0];
}
function hasActiveCastSession(src) {
    return getCastSessionMedia()?.media.contentId === src?.src;
}
/**
* @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastOptions}
*/ function getDefaultCastOptions() {
    return {
        language: "en-US",
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
        resumeSavedSession: true,
        androidReceiverCompatible: true
    };
}
function getCastErrorMessage(code) {
    const defaultMessage = `Google Cast Error Code: ${code}`;
    switch(code){
        case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
            return "The API is not initialized.";
        case chrome.cast.ErrorCode.CANCEL:
            return "The operation was canceled by the user";
        case chrome.cast.ErrorCode.CHANNEL_ERROR:
            return "A channel to the receiver is not available.";
        case chrome.cast.ErrorCode.EXTENSION_MISSING:
            return "The Cast extension is not available.";
        case chrome.cast.ErrorCode.INVALID_PARAMETER:
            return "The parameters to the operation were not valid.";
        case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
            return "No receiver was compatible with the session request.";
        case chrome.cast.ErrorCode.SESSION_ERROR:
            return "A session could not be created, or a session was invalid.";
        case chrome.cast.ErrorCode.TIMEOUT:
            return "The operation timed out.";
        default:
            return defaultMessage;
    }
    return defaultMessage;
}
function listenCastContextEvent(type, handler) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listenEvent"])(getCastContext(), type, handler);
}
;
}),
"[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-yRqBAqcH.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleCastLoader",
    ()=>GoogleCastLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$_69bc8fdf338b5934c4db9499814edd12$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@babel+core@7.29.7_supports-color@7.2.0__@types+node@20.19.43_babel-plugin-_69bc8fdf338b5934c4db9499814edd12/node_modules/next/dist/build/webpack/loaders/next-flight-loader/track-dynamic-import.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-CWZPUheZ.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-Gsp7JHtY.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-DxWyY4DQ.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
//#region ../vidstack/src/providers/google-cast/loader.ts
var GoogleCastLoader = class {
    name = "google-cast";
    target;
    #player;
    /**
	* @see {@link https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastContext}
	*/ get cast() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCastContext"])();
    }
    mediaType() {
        return "video";
    }
    canPlay(src) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_CHROME"] && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_IOS"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canGoogleCastSrc"])(src);
    }
    async prompt(ctx) {
        let loadEvent, openEvent, errorEvent;
        try {
            loadEvent = await this.#loadCastFramework(ctx);
            if (!this.#player) {
                this.#player = new cast.framework.RemotePlayer();
                new cast.framework.RemotePlayerController(this.#player);
            }
            openEvent = ctx.player.createEvent("google-cast-prompt-open", {
                trigger: loadEvent
            });
            ctx.player.dispatchEvent(openEvent);
            this.#notifyRemoteStateChange(ctx, "connecting", openEvent);
            await this.#showPrompt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$CWZPUheZ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["peek"])(ctx.$props.googleCast));
            ctx.$state.remotePlaybackInfo.set({
                deviceName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCastSession"])()?.getCastDevice().friendlyName
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCastConnected"])()) this.#notifyRemoteStateChange(ctx, "connected", openEvent);
        } catch (code) {
            const error = code instanceof Error ? code : this.#createError((code + "").toUpperCase(), "Prompt failed.");
            errorEvent = ctx.player.createEvent("google-cast-prompt-error", {
                detail: error,
                trigger: openEvent ?? loadEvent,
                cancelable: true
            });
            ctx.player.dispatch(errorEvent);
            this.#notifyRemoteStateChange(ctx, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCastConnected"])() ? "connected" : "disconnected", errorEvent);
            throw error;
        } finally{
            ctx.player.dispatch("google-cast-prompt-close", {
                trigger: errorEvent ?? openEvent ?? loadEvent
            });
        }
    }
    async load(ctx) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_SERVER"]) throw Error("[vidstack] can not load google cast provider server-side");
        if (!this.#player) throw Error("[vidstack] google cast player was not initialized");
        return new (await /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$babel$2b$core$40$7$2e$29$2e$7_supports$2d$color$40$7$2e$2$2e$0_$5f40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$_69bc8fdf338b5934c4db9499814edd12$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.A("[project]/node_modules/.pnpm/@vidstack+react@1.15.7_@types+react@19.3.0_react@19.3.0/node_modules/@vidstack/react/dev/chunks/vidstack-CwEWFFIE.js [app-ssr] (ecmascript, async loader)"))).GoogleCastProvider(this.#player, ctx);
    }
    async #loadCastFramework(ctx) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasLoadedCastFramework"])()) return;
        const loadStartEvent = ctx.player.createEvent("google-cast-load-start");
        ctx.player.dispatch(loadStartEvent);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$Gsp7JHtY$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadScript"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCastFrameworkURL"])());
        await customElements.whenDefined("google-cast-launcher");
        const loadedEvent = ctx.player.createEvent("google-cast-loaded", {
            trigger: loadStartEvent
        });
        ctx.player.dispatch(loadedEvent);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCastAvailable"])()) throw this.#createError("CAST_NOT_AVAILABLE", "Google Cast not available on this platform.");
        return loadedEvent;
    }
    async #showPrompt(options) {
        this.#setOptions(options);
        const errorCode = await this.cast.requestSession();
        if (errorCode) throw this.#createError(errorCode.toUpperCase(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCastErrorMessage"])(errorCode));
    }
    #setOptions(options) {
        this.cast?.setOptions({
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vidstack$2b$react$40$1$2e$15$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f40$vidstack$2f$react$2f$dev$2f$chunks$2f$vidstack$2d$DxWyY4DQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultCastOptions"])(),
            ...options
        });
    }
    #notifyRemoteStateChange(ctx, state, trigger) {
        const detail = {
            type: "google-cast",
            state
        };
        ctx.notify("remote-playback-change", detail, trigger);
    }
    #createError(code, message) {
        const error = Error(message);
        error.code = code;
        return error;
    }
};
;
}),
];})()

//# sourceMappingURL=1g3__%40vidstack_react_dev_chunks_06j2tw0_pejes._.js.map