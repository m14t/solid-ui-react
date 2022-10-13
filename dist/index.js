(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@inrupt/solid-client"), require("@inrupt/solid-client-authn-browser"), require("swr"), require("react-table"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@inrupt/solid-client", "@inrupt/solid-client-authn-browser", "swr", "react-table"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("@inrupt/solid-client"), require("@inrupt/solid-client-authn-browser"), require("swr"), require("react-table")) : factory(root["react"], root["@inrupt/solid-client"], root["@inrupt/solid-client-authn-browser"], root["swr"], root["react-table"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE__156__, __WEBPACK_EXTERNAL_MODULE__577__, __WEBPACK_EXTERNAL_MODULE__606__, __WEBPACK_EXTERNAL_MODULE__928__, __WEBPACK_EXTERNAL_MODULE__767__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 577:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__577__;

/***/ }),

/***/ 606:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__606__;

/***/ }),

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ }),

/***/ 767:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__767__;

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__928__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CombinedDataProvider": () => (/* reexport */ combinedDataContext),
  "DatasetContext": () => (/* reexport */ datasetContext),
  "DatasetProvider": () => (/* reexport */ DatasetProvider),
  "FileUpload": () => (/* reexport */ FileUpload),
  "Image": () => (/* reexport */ Image),
  "Link": () => (/* reexport */ Link),
  "LoginButton": () => (/* reexport */ LoginButton),
  "LogoutButton": () => (/* reexport */ LogoutButton),
  "SessionContext": () => (/* reexport */ SessionContext),
  "SessionProvider": () => (/* reexport */ SessionProvider),
  "Table": () => (/* reexport */ Table),
  "TableColumn": () => (/* reexport */ TableColumn),
  "Text": () => (/* reexport */ Text),
  "ThingContext": () => (/* reexport */ thingContext),
  "ThingProvider": () => (/* reexport */ ThingProvider),
  "Value": () => (/* reexport */ Value),
  "Video": () => (/* reexport */ Video),
  "useDataset": () => (/* reexport */ useDataset),
  "useFile": () => (/* reexport */ useFile),
  "useSession": () => (/* reexport */ useSession),
  "useThing": () => (/* reexport */ useThing)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(156);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@inrupt/solid-client"
var solid_client_ = __webpack_require__(577);
// EXTERNAL MODULE: external "@inrupt/solid-client-authn-browser"
var solid_client_authn_browser_ = __webpack_require__(606);
;// CONCATENATED MODULE: ./src/context/sessionContext/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const SessionContext = (0,external_react_.createContext)({
    login: solid_client_authn_browser_.login,
    logout: solid_client_authn_browser_.logout,
    fetch: solid_client_authn_browser_.fetch,
    session: (0,solid_client_authn_browser_.getDefaultSession)(),
    sessionRequestInProgress: true,
    profile: undefined,
});
/**
 * Used to provide session data to child components through context, as used by various provided components and the useSession hook.
 */
const SessionProvider = ({ sessionId, children, onError, sessionRequestInProgress: defaultSessionRequestInProgress, restorePreviousSession, onSessionRestore, }) => {
    const restoreSession = restorePreviousSession || typeof onSessionRestore !== "undefined";
    const [session, setSession] = (0,external_react_.useState)((0,solid_client_authn_browser_.getDefaultSession)());
    const [profile, setProfile] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(() => {
        if (onSessionRestore !== undefined) {
            (0,solid_client_authn_browser_.onSessionRestore)(onSessionRestore);
        }
    }, [onSessionRestore]);
    const defaultInProgress = typeof defaultSessionRequestInProgress === "undefined"
        ? !session.info.isLoggedIn
        : defaultSessionRequestInProgress;
    // If loggedin is true, we're not making a session request.
    const [sessionRequestInProgress, setSessionRequestInProgress] = (0,external_react_.useState)(defaultInProgress);
    let currentLocation;
    if (typeof window !== "undefined") {
        currentLocation = window.location;
    }
    (0,external_react_.useEffect)(() => {
        (0,solid_client_authn_browser_.handleIncomingRedirect)({
            url: window.location.href,
            restorePreviousSession: restoreSession,
        })
            // .then((sessionInfo) =>
            //   // If handleIncomingRedirect logged the session in, we know what the current
            //   // user's WebID is.
            //   sessionInfo?.webId !== undefined
            //     ? getProfileAll(sessionInfo?.webId, {
            //         fetch: session.fetch,
            //       })
            //     : undefined
            // )
            // .then((foundProfile) => {
            //   if (foundProfile !== undefined) {
            //     setProfile(foundProfile);
            //   }
            // })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        })
            .finally(() => {
            // console.log("done");
            setSessionRequestInProgress(false);
        });
        (0,solid_client_authn_browser_.getDefaultSession)().on("logout", () => {
            // TODO force a refresh
            setSession((0,solid_client_authn_browser_.getDefaultSession)());
        });
    }, [session, sessionId, onError, currentLocation, restoreSession]);
    const contextLogin = async (options) => {
        setSessionRequestInProgress(true);
        try {
            await (0,solid_client_authn_browser_.login)(options);
        }
        catch (error) {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        }
        finally {
            setSessionRequestInProgress(false);
        }
    };
    const contextLogout = async () => {
        try {
            await (0,solid_client_authn_browser_.logout)();
            setProfile(undefined);
        }
        catch (error) {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        }
    };
    return (external_react_default().createElement(SessionContext.Provider, { value: {
            session,
            login: contextLogin,
            logout: contextLogout,
            sessionRequestInProgress,
            setSessionRequestInProgress,
            fetch: solid_client_authn_browser_.fetch,
            profile,
        } }, children));
};

;// CONCATENATED MODULE: ./src/components/file/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function FileUpload({ saveLocation, onError, onSave, inputProps, autosave, }) {
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const handleChange = async (e) => {
        const target = e.target;
        // This is a typescript bug, as target.files should always be a FileList:
        if (!target.files) {
            return;
        }
        if (!autosave) {
            return;
        }
        try {
            const savedFile = await (0,solid_client_.saveFileInContainer)(saveLocation, target.files[0], {
                slug: target.files[0].name ? target.files[0].name : undefined,
                fetch,
            });
            if (onSave) {
                onSave(savedFile);
            }
        }
        catch (saveError) {
            if (onError) {
                onError(saveError);
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("input", Object.assign({ type: "file" }, inputProps, { onChange: (e) => handleChange(e), "data-testid": "form-input" }))));
}

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(928);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./src/hooks/useDataset/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function useDataset(datasetIri, 
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
options) {
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { solidDataset: datasetFromContext } = (0,external_react_.useContext)(datasetContext);
    const _a = external_swr_default()(datasetIri ? [datasetIri, options, fetch] : null, () => {
        const requestOptions = Object.assign({ fetch }, options);
        // useSWR will only call this fetcher if datasetUri is defined
        return (0,solid_client_.getSolidDataset)(datasetIri, requestOptions);
    }), { data, error } = _a, rest = __rest(_a, ["data", "error"]);
    const dataset = datasetIri ? data : datasetFromContext;
    return Object.assign({ dataset, error }, rest);
}

;// CONCATENATED MODULE: ./src/context/datasetContext/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


const DatasetContext = (0,external_react_.createContext)({
    solidDataset: undefined,
    setDataset: () => { },
});
/* harmony default export */ const datasetContext = (DatasetContext);
/**
 * Used to provide a [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset) to child components through context, as used by various provided components and the useDataset hook.
 */
const DatasetProvider = ({ children, onError, solidDataset: propDataset, datasetUrl, loading, loadingComponent: LoadingComponent, }) => {
    const { dataset, error } = useDataset(datasetUrl);
    if (error && onError) {
        onError(error);
    }
    const datasetToUse = propDataset !== null && propDataset !== void 0 ? propDataset : dataset;
    // Provide a setDataset function so that child components can update.
    const [stateDataset, setDataset] = (0,external_react_.useState)(datasetToUse);
    // If the dataset is asynchronously loaded, make sure to set the new state value.
    (0,external_react_.useEffect)(() => {
        setDataset(datasetToUse);
    }, [datasetToUse]);
    let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) ||
        loading || external_react_default().createElement("span", null, "Fetching data...");
    if (LoadingComponent === null) {
        loader = null;
    }
    return (external_react_default().createElement(DatasetContext.Provider, { value: { solidDataset: stateDataset, setDataset } }, stateDataset ? children : loader));
};

;// CONCATENATED MODULE: ./src/context/thingContext/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



const ThingContext = (0,external_react_.createContext)({
    thing: null,
    setThing: () => { },
});
/* harmony default export */ const thingContext = (ThingContext);
/**
 * Used to provide a Thing to child components through context, as used by various provided components and the useThing hook.
 */
const ThingProvider = ({ children, thing: propThing, thingUrl, }) => {
    const { solidDataset } = (0,external_react_.useContext)(datasetContext);
    let thing = propThing;
    if (solidDataset && thingUrl) {
        thing = (0,solid_client_.getThing)(solidDataset, thingUrl);
    }
    // Allow child components to update the thing
    const [stateThing, setThing] = (0,external_react_.useState)(thing || null);
    // Reset the thing if the dataset changes.
    (0,external_react_.useEffect)(() => {
        if (solidDataset && thingUrl) {
            setThing((0,solid_client_.getThing)(solidDataset, thingUrl));
        }
        else if (propThing) {
            setThing(propThing);
        }
    }, [solidDataset, thingUrl, propThing]);
    return (external_react_default().createElement(ThingContext.Provider, { value: { thing: stateThing, setThing } }, children));
};

;// CONCATENATED MODULE: ./src/helpers/index.ts
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */




const overwriteFile = async (src, file, input, fetch, maxSize, onSave, onError) => {
    try {
        if (maxSize !== undefined && file.size > maxSize * 1024) {
            input.setCustomValidity(`The selected file must not be larger than ${maxSize}kB`);
            input.reportValidity();
            return null;
        }
        input.setCustomValidity("");
        await (0,solid_client_.overwriteFile)(src, file, { fetch });
        if (onSave) {
            onSave();
        }
        const objectUrl = URL.createObjectURL(file);
        return objectUrl;
    }
    catch (error) {
        if (onError) {
            onError(error);
        }
        return null;
    }
};
const retrieveFile = async (src, fetch) => {
    const imageBlob = await (0,solid_client_.getFile)(src, { fetch });
    return imageBlob;
};
function getValueByType(type, thing, property, locale) {
    switch (type) {
        case "boolean":
            return (0,solid_client_.getBoolean)(thing, property);
        case "datetime":
            return (0,solid_client_.getDatetime)(thing, property);
        case "decimal":
            return (0,solid_client_.getDecimal)(thing, property);
        case "integer":
            return (0,solid_client_.getInteger)(thing, property);
        case "url":
            return (0,solid_client_.getUrl)(thing, property);
        default:
            if (locale) {
                return (0,solid_client_.getStringWithLocale)(thing, property, locale);
            }
            return (0,solid_client_.getStringNoLocale)(thing, property);
    }
}
function getValueByTypeAll(type, thing, property, locale) {
    switch (type) {
        case "boolean":
            return (0,solid_client_.getBooleanAll)(thing, property);
        case "datetime":
            return (0,solid_client_.getDatetimeAll)(thing, property);
        case "decimal":
            return (0,solid_client_.getDecimalAll)(thing, property);
        case "integer":
            return (0,solid_client_.getIntegerAll)(thing, property);
        case "url":
            return (0,solid_client_.getUrlAll)(thing, property);
        default:
            if (locale) {
                return (0,solid_client_.getStringWithLocaleAll)(thing, property, locale);
            }
            return (0,solid_client_.getStringNoLocaleAll)(thing, property);
    }
}
function getPropertyForThing(propertySelector, type, thing, properties, locale) {
    return (properties.find((property) => {
        return propertySelector(type, thing, property, locale);
    }) || properties[0]);
}
function useProperty(props) {
    const { dataset: propDataset, thing: propThing, properties: propProperties, property: propProperty, type, locale, } = props;
    const { solidDataset: contextDataset, setDataset = () => { } } = (0,external_react_.useContext)(datasetContext);
    const dataset = propDataset || contextDataset;
    const { thing: contextThing, setThing = () => { } } = (0,external_react_.useContext)(thingContext);
    const thing = propThing || contextThing || undefined;
    let error;
    if (!thing) {
        error = new Error("Thing not found as property or in context");
    }
    const property = thing && propProperties
        ? getPropertyForThing(getValueByType, type, thing, propProperties, locale) || propProperties[0]
        : propProperty;
    if (!property) {
        throw new Error("No property provided");
    }
    const value = thing && property ? getValueByType(type, thing, property, locale) : null;
    return {
        dataset,
        thing,
        property,
        error,
        value,
        setDataset,
        setThing,
    };
}
function useDatetimeBrowserSupport() {
    const [isDatetimeSupported, setIsDatetimeSupported] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(() => {
        const test = document.createElement("input");
        test.type = "datetime-local";
        setIsDatetimeSupported(test.type !== "text");
    }, []);
    return isDatetimeSupported;
}
async function updateDataset(datasetUrl, setDataset) {
    const latestDataset = await (0,solid_client_.getSolidDataset)(datasetUrl);
    setDataset(latestDataset);
}

;// CONCATENATED MODULE: ./src/hooks/useFile/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



function useFile(url) {
    const [error, setError] = (0,external_react_.useState)();
    const [inProgress, setInProgress] = (0,external_react_.useState)(false);
    const [data, setData] = (0,external_react_.useState)();
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    (0,external_react_.useEffect)(() => {
        if (!url)
            return;
        setInProgress(true);
        retrieveFile(url, fetch)
            .then((response) => {
            setData(response);
            setInProgress(false);
        })
            .catch((retrieveError) => {
            setError(retrieveError);
            setInProgress(false);
        });
    }, [url, fetch]);
    return { error, inProgress, data };
}

;// CONCATENATED MODULE: ./src/components/image/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var image_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





/**
 * Fetches and displays an image, from a src found at a given property of a given [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing). Can also be used to upload a new/replacement image file.
 */
function Image(_a) {
    var { thing: propThing, property: propProperty, properties: propProperties, edit, autosave, allowDelete, onSave, onError, maxSize, alt, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent, deleteComponent: DeleteComponent, saveLocation, solidDataset } = _a, imgOptions = image_rest(_a, ["thing", "property", "properties", "edit", "autosave", "allowDelete", "onSave", "onError", "maxSize", "alt", "inputProps", "errorComponent", "loadingComponent", "deleteComponent", "saveLocation", "solidDataset"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const values = useProperty({
        thing: propThing,
        property: propProperty,
        properties: propProperties,
        type: "url",
    });
    const { value, thing, error: thingError } = values;
    let valueError;
    if (!value) {
        valueError = new Error("No value found for property.");
    }
    const isFetchingThing = !thing && !thingError;
    const [error, setError] = (0,external_react_.useState)(thingError !== null && thingError !== void 0 ? thingError : valueError);
    (0,external_react_.useEffect)(() => {
        if (error) {
            if (onError) {
                onError(error);
            }
        }
    }, [error, onError, ErrorComponent]);
    const [imgObjectUrl, setImgObjectUrl] = (0,external_react_.useState)();
    const { data, error: imgError, inProgress: fetchingFileInProgress, } = useFile(value);
    (0,external_react_.useEffect)(() => {
        if (fetchingFileInProgress) {
            return;
        }
        if (imgError) {
            setError(imgError);
            return;
        }
        const imageObjectUrl = data && URL.createObjectURL(data);
        if (imageObjectUrl) {
            setImgObjectUrl(imageObjectUrl);
        }
    }, [data, fetchingFileInProgress, imgError]);
    const handleDelete = async () => {
        if (!propThing ||
            !solidDataset ||
            !propProperty ||
            typeof value !== "string" ||
            !autosave) {
            return;
        }
        try {
            const updatedThing = (0,solid_client_.removeUrl)(propThing, propProperty, value);
            const updatedDataset = (0,solid_client_.setThing)(solidDataset, updatedThing);
            const datasetSourceUrl = (0,solid_client_.getSourceUrl)(solidDataset);
            if (!datasetSourceUrl)
                return;
            await (0,solid_client_.saveSolidDatasetAt)(datasetSourceUrl, updatedDataset, {
                fetch,
            });
        }
        catch (e) {
            setError(e);
        }
    };
    const handleChange = async (input) => {
        const fileList = input.files;
        if (autosave && fileList && fileList.length > 0) {
            if (value) {
                const newObjectUrl = await overwriteFile(value, fileList[0], input, fetch, maxSize, onSave, onError);
                if (newObjectUrl) {
                    setImgObjectUrl(newObjectUrl);
                }
            }
            else if (!value && saveLocation) {
                const savedFile = await (0,solid_client_.saveFileInContainer)(saveLocation, fileList[0], {
                    fetch,
                });
                const savedFileUrl = (0,solid_client_.getSourceUrl)(savedFile);
                if (savedFileUrl && propThing && propProperty && solidDataset) {
                    setImgObjectUrl(savedFileUrl);
                    try {
                        const updatedThing = (0,solid_client_.addUrl)(propThing, propProperty, savedFileUrl);
                        const updatedDataset = (0,solid_client_.setThing)(solidDataset, updatedThing);
                        const datasetSourceUrl = (0,solid_client_.getSourceUrl)(solidDataset);
                        if (!datasetSourceUrl)
                            return;
                        await (0,solid_client_.saveSolidDatasetAt)(datasetSourceUrl, updatedDataset, {
                            fetch,
                        });
                    }
                    catch (e) {
                        setError(e);
                    }
                }
            }
        }
    };
    let imageComponent = null;
    if (isFetchingThing || fetchingFileInProgress) {
        let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) || external_react_default().createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        imageComponent = ErrorComponent ? (external_react_default().createElement(ErrorComponent, { error: error })) : (external_react_default().createElement("span", null, error.toString()));
    }
    else if (value) {
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        imageComponent = external_react_default().createElement("img", Object.assign({ src: imgObjectUrl, alt: alt !== null && alt !== void 0 ? alt : "" }, imgOptions));
    }
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        imageComponent,
        edit && (external_react_default().createElement("input", Object.assign({}, inputProps, { type: "file", accept: "image/*", onChange: (e) => handleChange(e.target) }))),
        allowDelete &&
            (DeleteComponent ? (external_react_default().createElement(DeleteComponent, { onClick: handleDelete })) : (external_react_default().createElement("button", { type: "button", onClick: handleDelete }, "Delete")))));
}

;// CONCATENATED MODULE: ./src/components/value/datetime/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var datetime_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const DatetimeValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = datetime_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "datetime",
        property: propProperty,
        properties: propProperties,
    });
    const isDatetimeSupported = useDatetimeBrowserSupport();
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = thingValue
        ? thingValue
            .toISOString()
            .substring(0, thingValue.toISOString().length - 5)
        : null;
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    let initialDateValue = "";
    if (!isDatetimeSupported) {
        initialDateValue = value === null || value === void 0 ? void 0 : value.split(/T(.+)/)[0].toString();
    }
    let initialTimeValue = "00:00";
    if (!isDatetimeSupported) {
        initialTimeValue = (_a = value === null || value === void 0 ? void 0 : value.split(/T(.+)/)[1]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    const [time, setTime] = (0,external_react_.useState)(initialTimeValue);
    const [date, setDate] = (0,external_react_.useState)(initialDateValue);
    (0,external_react_.useEffect)(() => {
        if ((!time && !date) || isDatetimeSupported)
            return;
        setValue(`${date !== null && date !== void 0 ? date : ""}T${time !== null && time !== void 0 ? time : "00:00"}`);
    }, [time, date, isDatetimeSupported]);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            const datetimeValue = value;
            const updatedResource = (0,solid_client_.setDatetime)(thing, property, new Date(`${datetimeValue}Z`));
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    let inputType;
    if (isDatetimeSupported) {
        inputType = "datetime-local";
    }
    else {
        inputType = "datetime-workaround";
    }
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && inputType === "datetime-local" && (external_react_default().createElement("input", Object.assign({ type: inputType, "aria-label": "Date and Time", step: "any" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}", placeholder: "yyyy-mm-ddThh:mm" }))),
        edit && dataset && thing && inputType === "datetime-workaround" && (external_react_default().createElement((external_react_default()).Fragment, null,
            external_react_default().createElement("input", Object.assign({ type: "date", "aria-label": "Date", step: "any" }, inputProps, { onChange: (e) => {
                    setDate(e.target.value);
                }, onBlur: (e) => autosave && saveHandler(e), value: date, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}", placeholder: "yyyy-mm-dd" })),
            external_react_default().createElement("input", { type: "time", "aria-label": "Time", value: time, onChange: (e) => setTime(e.target.value), onBlur: (e) => autosave && saveHandler(e), pattern: "[0-9]{2}:[0-9]{2}" })))));
};
DatetimeValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const datetime = (DatetimeValue);

;// CONCATENATED MODULE: ./src/components/value/string/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var string_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const StringValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, locale, onSave, onError, edit, autosave, inputProps } = props, other = string_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "locale", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "string",
        property: propProperty,
        properties: propProperties,
        locale,
    });
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = (_a = thingValue === null || thingValue === void 0 ? void 0 : thingValue.toString()) !== null && _a !== void 0 ? _a : "";
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            let updatedResource;
            if (locale) {
                updatedResource = (0,solid_client_.setStringWithLocale)(thing, property, value, locale);
            }
            else {
                updatedResource = (0,solid_client_.setStringNoLocale)(thing, property, value);
            }
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), value),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: "text" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value })))));
};
StringValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const string = (StringValue);

;// CONCATENATED MODULE: ./src/components/value/boolean/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var boolean_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const BooleanValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = boolean_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "boolean",
        property: propProperty,
        properties: propProperties,
    });
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    let formattedValue = thingValue;
    let initialBooleanValue = false;
    initialBooleanValue = (_a = thingValue) !== null && _a !== void 0 ? _a : false;
    formattedValue = initialBooleanValue.toString();
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    const [booleanValue, setBooleanValue] = (0,external_react_.useState)(initialBooleanValue);
    (0,external_react_.useEffect)(() => {
        setValue(booleanValue.toString());
    }, [booleanValue]);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            const updatedResource = (0,solid_client_.setBoolean)(thing, property, booleanValue);
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: "checkbox", checked: booleanValue }, inputProps, { onChange: (e) => {
                setBooleanValue(e.target.checked);
            }, onBlur: (e) => autosave && saveHandler(e), value: value })))));
};
BooleanValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const value_boolean = (BooleanValue);

;// CONCATENATED MODULE: ./src/components/value/url/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var url_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const UrlValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = url_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "url",
        property: propProperty,
        properties: propProperties,
    });
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = (_a = thingValue === null || thingValue === void 0 ? void 0 : thingValue.toString()) !== null && _a !== void 0 ? _a : "";
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            const updatedResource = (0,solid_client_.setUrl)(thing, property, value);
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: "url" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value })))));
};
UrlValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const url = (UrlValue);

;// CONCATENATED MODULE: ./src/components/value/integer/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var integer_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const IntegerValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = integer_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "integer",
        property: propProperty,
        properties: propProperties,
    });
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = (_a = thingValue === null || thingValue === void 0 ? void 0 : thingValue.toString()) !== null && _a !== void 0 ? _a : "";
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            const updatedResource = (0,solid_client_.setInteger)(thing, property, parseInt(value, 10));
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: "number", step: "any" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value })))));
};
IntegerValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const integer = (IntegerValue);

;// CONCATENATED MODULE: ./src/components/value/decimal/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var decimal_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const DecimalValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = decimal_rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "decimal",
        property: propProperty,
        properties: propProperties,
    });
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = (_a = thingValue === null || thingValue === void 0 ? void 0 : thingValue.toString()) !== null && _a !== void 0 ? _a : "";
    const [value, setValue] = (0,external_react_.useState)(formattedValue);
    /* Save Value value in the pod */
    const saveHandler = async (e) => {
        if (formattedValue !== value &&
            thing &&
            dataset &&
            e.target.reportValidity()) {
            const updatedResource = (0,solid_client_.setDecimal)(thing, property, parseFloat(value));
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else if (onError) {
                    onError(new Error("Please provide saveDatasetTo location for new data"));
                }
                if (!error && onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: "number", step: "any" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value })))));
};
DecimalValue.defaultProps = {
    autosave: false,
    edit: false,
};
/* harmony default export */ const decimal = (DecimalValue);

;// CONCATENATED MODULE: ./src/components/value/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var value_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








/**
 * Retrieves and displays a value of one of a range of types from a given [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset)/[Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property. Can also be used to set/update and persist a value.
 */
function Value(props) {
    const _a = props, { dataType } = _a, otherProps = value_rest(_a, ["dataType"]);
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, edit, loadingComponent: LoadingComponent, errorComponent: ErrorComponent, locale, } = otherProps;
    const { thing, value, error: thingError, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        property: propProperty,
        properties: propProperties,
        type: dataType,
        locale,
    });
    let valueError;
    if (!edit && !value && dataType !== "boolean") {
        valueError = new Error("No value found for property.");
    }
    const isFetchingThing = !thing && !thingError;
    const [error] = (0,external_react_.useState)(thingError !== null && thingError !== void 0 ? thingError : valueError);
    if (isFetchingThing) {
        let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) || external_react_default().createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        if (ErrorComponent) {
            return external_react_default().createElement(ErrorComponent, { error: error });
        }
        return external_react_default().createElement("span", null, error.toString());
    }
    let Component = string;
    switch (dataType) {
        case "boolean":
            Component = value_boolean;
            break;
        case "datetime":
            Component = datetime;
            break;
        case "decimal":
            Component = decimal;
            break;
        case "integer":
            Component = integer;
            break;
        case "url":
            Component = url;
            break;
        default:
            Component = string;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return external_react_default().createElement(Component, Object.assign({}, otherProps));
}
Value.defaultProps = {
    autosave: false,
    edit: false,
};

;// CONCATENATED MODULE: ./src/components/link/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var link_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



/**
 * Retrieves a URL from given [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property, and renders as an anchor tag with the given href.
 */
function Link(_a) {
    var { children, property: propProperty, properties: propProperties, thing: propThing, solidDataset, autosave, rel, target, edit, loadingComponent: LoadingComponent, errorComponent: ErrorComponent, onSave, onError } = _a, linkOptions = link_rest(_a, ["children", "property", "properties", "thing", "solidDataset", "autosave", "rel", "target", "edit", "loadingComponent", "errorComponent", "onSave", "onError"]);
    const { value: href, thing, property, dataset, error: thingError, } = useProperty({
        dataset: solidDataset,
        thing: propThing,
        property: propProperty,
        properties: propProperties,
        type: "url",
    });
    let valueError;
    if (!edit && !href) {
        valueError = new Error("URL not found for given property");
    }
    const isFetchingThing = !thing && !thingError;
    const [error] = (0,external_react_.useState)(thingError !== null && thingError !== void 0 ? thingError : valueError);
    if (isFetchingThing) {
        let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) || external_react_default().createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        if (ErrorComponent) {
            return external_react_default().createElement(ErrorComponent, { error: error });
        }
        return external_react_default().createElement("span", null, error.toString());
    }
    const adjustedRel = rel || (target === "_blank" ? "noopener noreferrer" : "nofollow");
    if (edit) {
        return (external_react_default().createElement(Value, { dataType: "url", solidDataset: dataset, thing: thing, property: property, autosave: autosave, onSave: onSave, onError: onError, edit: true }));
    }
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    external_react_default().createElement("a", Object.assign({ href: href, rel: adjustedRel, target: target }, linkOptions), children !== null && children !== void 0 ? children : href));
}

;// CONCATENATED MODULE: ./src/components/logIn/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * Displays a button which triggers the login flow on click. Should be used inside a `SessionProvider`.
 */
const LoginButton = ({ oidcIssuer, redirectUrl, children, authOptions, onError, }) => {
    const options = Object.assign({ redirectUrl,
        oidcIssuer }, authOptions);
    const { login, setSessionRequestInProgress } = (0,external_react_.useContext)(SessionContext);
    async function loginHandler() {
        setSessionRequestInProgress(true);
        try {
            // Workaround for a solid-client-authn bug.
            // Typescript is mad about something.
            await login(options);
            setSessionRequestInProgress(false);
        }
        catch (error) {
            setSessionRequestInProgress(false);
            if (onError)
                onError(error);
        }
    }
    function keyDownHandler(e) {
        e.preventDefault();
        return e.key === "Enter" ? loginHandler() : Promise.resolve();
    }
    return children ? (external_react_default().createElement("div", { role: "button", tabIndex: 0, onClick: loginHandler, onKeyDown: keyDownHandler }, children)) : (external_react_default().createElement("button", { type: "button", onClick: loginHandler, onKeyDown: keyDownHandler }, "Log In"));
};

;// CONCATENATED MODULE: ./src/components/logOut/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * Renders a button which triggers logout on click. Should be used within a `SessionProvider`.
 */
const LogoutButton = ({ children, onLogout, onError, }) => {
    const { logout } = (0,external_react_.useContext)(SessionContext);
    async function logoutHandler() {
        try {
            await logout();
            if (onLogout)
                onLogout();
        }
        catch (error) {
            if (onError)
                onError(error);
        }
    }
    function keyDownHandler(e) {
        e.preventDefault();
        return e.key === "Enter" ? logoutHandler() : Promise.resolve();
    }
    return children ? (external_react_default().createElement("div", { role: "button", tabIndex: 0, onClick: logoutHandler, onKeyDown: keyDownHandler }, children)) : (external_react_default().createElement("button", { type: "button", onClick: logoutHandler, onKeyDown: keyDownHandler }, "Log Out"));
};

// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(767);
;// CONCATENATED MODULE: ./src/context/combinedDataContext/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



/**
 * Used to provide both a [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset) and [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing) to child components through context, as used by various provided components and the useDataset and useThing hooks.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CombinedDataProvider(props) {
    const { children, solidDataset, datasetUrl, thing, thingUrl, onError, loadingComponent, } = props;
    return (external_react_default().createElement(DatasetProvider, { onError: onError, solidDataset: solidDataset, datasetUrl: datasetUrl, loadingComponent: loadingComponent },
        external_react_default().createElement(ThingProvider, { thing: thing, thingUrl: thingUrl }, children)));
}
/* harmony default export */ const combinedDataContext = (CombinedDataProvider);

;// CONCATENATED MODULE: ./src/components/table/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var table_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/* eslint-disable react/jsx-props-no-spreading */




/**
 * To be used as the only children of a Table component. Each column represents one property of the Things passed to the Table.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TableColumn(props) {
    throw new Error("Can't use TableColumn outside a Table.");
}
/**
 * Displays values from an array of [Things](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing) as table rows, with each column showing a given property of those [Things](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing).
 */
function Table(_a) {
    var { children, emptyStateComponent: EmptyStateComponent, things, filter, ascIndicator, descIndicator, getRowProps } = _a, tableProps = table_rest(_a, ["children", "emptyStateComponent", "things", "filter", "ascIndicator", "descIndicator", "getRowProps"]);
    const { columns, data } = (0,external_react_.useMemo)(() => {
        const columnsArray = [];
        const dataArray = things.map(() => ({}));
        // loop through each column
        external_react_.Children.forEach(children, (column, colIndex) => {
            if (column) {
                const { property, header, body, dataType = "string", locale, multiple = false, sortable, sortFn, filterable, } = column.props;
                // add heading
                columnsArray.push({
                    Header: header !== null && header !== void 0 ? header : `${property}`,
                    accessor: `col${colIndex}`,
                    disableGlobalFilter: !filterable,
                    disableSortBy: !sortable,
                    Cell: body !== null && body !== void 0 ? body : (({ value }) => (value != null ? `${value}` : "")),
                });
                if (sortFn) {
                    const sortFunction = (a, b, columnId) => {
                        const valueA = a.values[columnId];
                        const valueB = b.values[columnId];
                        return sortFn(valueA, valueB);
                    };
                    columnsArray[colIndex].sortType = sortFunction;
                }
                else {
                    if (dataType === "string") {
                        columnsArray[colIndex].sortType = dataType;
                    }
                    if (dataType === "integer" || dataType === "decimal") {
                        columnsArray[colIndex].sortType = "number";
                    }
                }
                // add each each value to data
                things.forEach((thing, i) => {
                    dataArray[i][`col${colIndex}`] = multiple
                        ? getValueByTypeAll(dataType, thing.thing, property, locale)
                        : getValueByType(dataType, thing.thing, property, locale);
                });
            }
        });
        return { columns: columnsArray, data: dataArray };
    }, [children, things]);
    const tableInstance = (0,external_react_table_.useTable)({
        columns,
        data,
        initialState: { globalFilter: filter || undefined },
    }, external_react_table_.useGlobalFilter, external_react_table_.useSortBy);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    if (!rows.length) {
        if (EmptyStateComponent) {
            return external_react_default().createElement(EmptyStateComponent, null);
        }
        return null;
    }
    return (external_react_default().createElement("table", Object.assign({}, getTableProps(), tableProps),
        external_react_default().createElement("thead", null, headerGroups.map((headerGroup) => (external_react_default().createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map((column) => (external_react_default().createElement("th", Object.assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render("Header"),
            column.isSorted &&
                (column.isSortedDesc ? descIndicator : ascIndicator)))))))),
        external_react_default().createElement("tbody", Object.assign({}, getTableBodyProps()), rows.map((row) => {
            prepareRow(row);
            const rowDataset = things[row.index].dataset;
            const rowThing = things[row.index].thing;
            return (external_react_default().createElement("tr", Object.assign({}, row.getRowProps(getRowProps(row, rowThing, rowDataset))),
                external_react_default().createElement(combinedDataContext, { solidDataset: rowDataset, thing: rowThing }, row.cells.map((cell) => {
                    return (external_react_default().createElement("td", Object.assign({}, cell.getCellProps()), cell.render("Cell")));
                }))));
        }))));
}
Table.defaultProps = {
    filter: undefined,
    ascIndicator: (external_react_default().createElement("span", { role: "img", "aria-label": "Sorted in ascending order" },
        " ",
        "\uD83D\uDD3C")),
    descIndicator: (external_react_default().createElement("span", { role: "img", "aria-label": "Sorted in descending order" },
        " ",
        "\uD83D\uDD3D")),
    getRowProps: () => ({}),
};

;// CONCATENATED MODULE: ./src/components/text/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var text_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




/**
 * Retrieves and displays a string from a given [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset)/[Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property. Can also be used to set/update and persist a string value.
 */
function Text(_a) {
    var { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, locale, onSave, onError, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent, edit = false, autosave = false } = _a, other = text_rest(_a, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "locale", "onSave", "onError", "inputProps", "errorComponent", "loadingComponent", "edit", "autosave"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const { error: thingError, value, thing, property, dataset, setDataset, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        property: propProperty,
        properties: propProperties,
        type: "string",
        locale,
    });
    let valueError;
    if (!edit && !value) {
        valueError = new Error("No value found for property.");
    }
    const isFetchingThing = !thing && !thingError;
    const [error] = (0,external_react_.useState)(thingError !== null && thingError !== void 0 ? thingError : valueError);
    (0,external_react_.useEffect)(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const [text, setText] = (0,external_react_.useState)(value);
    const [, setErrorState] = (0,external_react_.useState)();
    const [initialValue, setInitialValue] = (0,external_react_.useState)(value);
    /* Save text value in the pod */
    const saveHandler = async (e) => {
        if (initialValue !== e.target.value && thing && dataset) {
            const newValue = e.target.value;
            let updatedResource;
            if (locale) {
                updatedResource = (0,solid_client_.setStringWithLocale)(thing, property, newValue, locale);
            }
            else {
                updatedResource = (0,solid_client_.setStringNoLocale)(thing, property, newValue);
            }
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)(saveDatasetTo, (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if ((0,solid_client_.hasResourceInfo)(dataset)) {
                    savedDataset = await (0,solid_client_.saveSolidDatasetAt)((0,solid_client_.getSourceUrl)(dataset), (0,solid_client_.setThing)(dataset, updatedResource), { fetch });
                    await updateDataset((0,solid_client_.getSourceUrl)(dataset), setDataset);
                }
                else {
                    setErrorState(() => {
                        throw new Error("Please provide saveDatasetTo location for new data");
                    });
                }
                if (onSave) {
                    onSave(savedDataset, updatedResource);
                }
            }
            catch (saveError) {
                if (onError) {
                    onError(saveError);
                }
            }
        }
    };
    if (isFetchingThing) {
        let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) || external_react_default().createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        if (ErrorComponent) {
            return external_react_default().createElement(ErrorComponent, { error: error });
        }
        return external_react_default().createElement("span", null, error.toString());
    }
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && external_react_default().createElement("span", Object.assign({}, other), text),
        edit && dataset && thing && (external_react_default().createElement("input", Object.assign({ type: inputProps && inputProps.type ? inputProps.type : "text" }, inputProps, { onFocus: (e) => setInitialValue(e.target.value), onChange: (e) => setText(e.target.value), onBlur: (e) => autosave && saveHandler(e), value: text || "" })))));
}

;// CONCATENATED MODULE: ./src/components/video/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var video_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




/**
 * Fetches and displays a video, from a src found at a given property of a given Thing. Can also be used to upload a new/replacement video file.
 */
function Video(_a) {
    var { property: propProperty, properties: propProperties, thing: propThing, edit, autosave, onSave, onError, maxSize, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent } = _a, videoOptions = video_rest(_a, ["property", "properties", "thing", "edit", "autosave", "onSave", "onError", "maxSize", "inputProps", "errorComponent", "loadingComponent"]);
    const { fetch } = (0,external_react_.useContext)(SessionContext);
    const values = useProperty({
        thing: propThing,
        property: propProperty,
        properties: propProperties,
        type: "url",
    });
    const { value, thing, error: thingError } = values;
    let valueError;
    if (!edit && !value) {
        valueError = new Error("No value found for property.");
    }
    const isFetchingThing = !thing && !thingError;
    const [error, setError] = (0,external_react_.useState)(thingError !== null && thingError !== void 0 ? thingError : valueError);
    (0,external_react_.useEffect)(() => {
        if (error) {
            if (onError) {
                onError(error);
            }
        }
    }, [error, onError, ErrorComponent]);
    const [videoObjectUrl, setVideoObjectUrl] = (0,external_react_.useState)("");
    const { data, error: videoError, inProgress: fetchingVideoInProgress, } = useFile(value);
    (0,external_react_.useEffect)(() => {
        if (fetchingVideoInProgress) {
            return;
        }
        if (videoError) {
            setError(videoError);
            return;
        }
        const videoObjectURL = data && URL.createObjectURL(data);
        if (videoObjectURL) {
            setVideoObjectUrl(videoObjectURL);
        }
    }, [data, fetchingVideoInProgress, videoError]);
    const handleChange = async (input) => {
        const fileList = input.files;
        if (autosave && fileList && fileList.length > 0 && value) {
            const newObjectUrl = await overwriteFile(value, fileList[0], input, fetch, maxSize, onSave, onError);
            if (newObjectUrl) {
                setVideoObjectUrl(newObjectUrl);
            }
        }
    };
    let videoComponent = null;
    if (isFetchingThing || fetchingVideoInProgress) {
        let loader = (LoadingComponent && (external_react_default().createElement(LoadingComponent, null))) || external_react_default().createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        videoComponent = ErrorComponent ? (external_react_default().createElement(ErrorComponent, { error: error })) : (external_react_default().createElement("span", null, error.toString()));
    }
    else if (value) {
        videoComponent = (
        /* eslint jsx-a11y/media-has-caption: 0, react/jsx-props-no-spreading: 0 */
        external_react_default().createElement("video", Object.assign({ src: videoObjectUrl || value, controls: true }, videoOptions)));
    }
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        videoComponent,
        edit && (external_react_default().createElement("input", Object.assign({}, inputProps, { type: "file", accept: "video/*", onChange: (e) => handleChange(e.target) })))));
}

;// CONCATENATED MODULE: ./src/hooks/useSession/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


function useSession() {
    const { session, sessionRequestInProgress, fetch, login, logout } = (0,external_react_.useContext)(SessionContext);
    return {
        session,
        sessionRequestInProgress,
        fetch,
        login,
        logout,
    };
}

;// CONCATENATED MODULE: ./src/hooks/useThing/index.tsx
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var useThing_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function useThing(datasetIri, thingIri, 
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
options) {
    const _a = useDataset(datasetIri, options), { dataset } = _a, rest = useThing_rest(_a, ["dataset"]);
    const { thing: thingFromContext } = (0,external_react_.useContext)(thingContext);
    if (!thingIri) {
        return Object.assign({ dataset, thing: thingFromContext || undefined }, rest);
    }
    if (!dataset) {
        return Object.assign({ dataset, thing: null }, rest);
    }
    const thing = (0,solid_client_.getThing)(dataset, thingIri);
    return Object.assign({ dataset, thing }, rest);
}

;// CONCATENATED MODULE: ./src/index.ts
/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


















})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map