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
var __rest = (this && this.__rest) || function (s, e) {
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
import React, { useState } from "react";
import { useProperty } from "../../helpers";
import { Value } from "../value";
/**
 * Retrieves a URL from given [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property, and renders as an anchor tag with the given href.
 */
export function Link(_a) {
    var { children, property: propProperty, properties: propProperties, thing: propThing, solidDataset, autosave, rel, target, edit, loadingComponent: LoadingComponent, errorComponent: ErrorComponent, onSave, onError } = _a, linkOptions = __rest(_a, ["children", "property", "properties", "thing", "solidDataset", "autosave", "rel", "target", "edit", "loadingComponent", "errorComponent", "onSave", "onError"]);
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
    const [error] = useState(thingError !== null && thingError !== void 0 ? thingError : valueError);
    if (isFetchingThing) {
        let loader = (LoadingComponent && (React.createElement(LoadingComponent, null))) || React.createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        if (ErrorComponent) {
            return React.createElement(ErrorComponent, { error: error });
        }
        return React.createElement("span", null, error.toString());
    }
    const adjustedRel = rel || (target === "_blank" ? "noopener noreferrer" : "nofollow");
    if (edit) {
        return (React.createElement(Value, { dataType: "url", solidDataset: dataset, thing: thing, property: property, autosave: autosave, onSave: onSave, onError: onError, edit: true }));
    }
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    React.createElement("a", Object.assign({ href: href, rel: adjustedRel, target: target }, linkOptions), children !== null && children !== void 0 ? children : href));
}
//# sourceMappingURL=index.js.map