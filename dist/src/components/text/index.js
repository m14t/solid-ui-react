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
import React, { useState, useEffect, useContext } from "react";
import { setStringWithLocale, setStringNoLocale, setThing, saveSolidDatasetAt, getSourceUrl, hasResourceInfo, } from "@inrupt/solid-client";
import { SessionContext } from "../../context/sessionContext";
import { updateDataset, useProperty } from "../../helpers";
/**
 * Retrieves and displays a string from a given [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset)/[Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property. Can also be used to set/update and persist a string value.
 */
export function Text(_a) {
    var { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, locale, onSave, onError, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent, edit = false, autosave = false } = _a, other = __rest(_a, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "locale", "onSave", "onError", "inputProps", "errorComponent", "loadingComponent", "edit", "autosave"]);
    const { fetch } = useContext(SessionContext);
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
    const [error] = useState(thingError !== null && thingError !== void 0 ? thingError : valueError);
    useEffect(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const [text, setText] = useState(value);
    const [, setErrorState] = useState();
    const [initialValue, setInitialValue] = useState(value);
    /* Save text value in the pod */
    const saveHandler = async (e) => {
        if (initialValue !== e.target.value && thing && dataset) {
            const newValue = e.target.value;
            let updatedResource;
            if (locale) {
                updatedResource = setStringWithLocale(thing, property, newValue, locale);
            }
            else {
                updatedResource = setStringNoLocale(thing, property, newValue);
            }
            try {
                let savedDataset;
                if (saveDatasetTo) {
                    savedDataset = await saveSolidDatasetAt(saveDatasetTo, setThing(dataset, updatedResource), { fetch });
                    await updateDataset(saveDatasetTo, setDataset);
                }
                else if (hasResourceInfo(dataset)) {
                    savedDataset = await saveSolidDatasetAt(getSourceUrl(dataset), setThing(dataset, updatedResource), { fetch });
                    await updateDataset(getSourceUrl(dataset), setDataset);
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
    return (React.createElement(React.Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && React.createElement("span", Object.assign({}, other), text),
        edit && dataset && thing && (React.createElement("input", Object.assign({ type: inputProps && inputProps.type ? inputProps.type : "text" }, inputProps, { onFocus: (e) => setInitialValue(e.target.value), onChange: (e) => setText(e.target.value), onBlur: (e) => autosave && saveHandler(e), value: text || "" })))));
}
//# sourceMappingURL=index.js.map