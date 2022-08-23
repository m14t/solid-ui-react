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
import { addUrl, getSourceUrl, removeUrl, saveFileInContainer, saveSolidDatasetAt, setThing, } from "@inrupt/solid-client";
import { overwriteFile, useProperty } from "../../helpers";
import { SessionContext } from "../../context/sessionContext";
import useFile from "../../hooks/useFile";
/**
 * Fetches and displays an image, from a src found at a given property of a given [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing). Can also be used to upload a new/replacement image file.
 */
export function Image(_a) {
    var { thing: propThing, property: propProperty, properties: propProperties, edit, autosave, allowDelete, onSave, onError, maxSize, alt, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent, deleteComponent: DeleteComponent, saveLocation, solidDataset } = _a, imgOptions = __rest(_a, ["thing", "property", "properties", "edit", "autosave", "allowDelete", "onSave", "onError", "maxSize", "alt", "inputProps", "errorComponent", "loadingComponent", "deleteComponent", "saveLocation", "solidDataset"]);
    const { fetch } = useContext(SessionContext);
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
    const [error, setError] = useState(thingError !== null && thingError !== void 0 ? thingError : valueError);
    useEffect(() => {
        if (error) {
            if (onError) {
                onError(error);
            }
        }
    }, [error, onError, ErrorComponent]);
    const [imgObjectUrl, setImgObjectUrl] = useState();
    const { data, error: imgError, inProgress: fetchingFileInProgress, } = useFile(value);
    useEffect(() => {
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
            const updatedThing = removeUrl(propThing, propProperty, value);
            const updatedDataset = setThing(solidDataset, updatedThing);
            const datasetSourceUrl = getSourceUrl(solidDataset);
            if (!datasetSourceUrl)
                return;
            await saveSolidDatasetAt(datasetSourceUrl, updatedDataset, {
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
                const savedFile = await saveFileInContainer(saveLocation, fileList[0], {
                    fetch,
                });
                const savedFileUrl = getSourceUrl(savedFile);
                if (savedFileUrl && propThing && propProperty && solidDataset) {
                    setImgObjectUrl(savedFileUrl);
                    try {
                        const updatedThing = addUrl(propThing, propProperty, savedFileUrl);
                        const updatedDataset = setThing(solidDataset, updatedThing);
                        const datasetSourceUrl = getSourceUrl(solidDataset);
                        if (!datasetSourceUrl)
                            return;
                        await saveSolidDatasetAt(datasetSourceUrl, updatedDataset, {
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
        let loader = (LoadingComponent && (React.createElement(LoadingComponent, null))) || React.createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        imageComponent = ErrorComponent ? (React.createElement(ErrorComponent, { error: error })) : (React.createElement("span", null, error.toString()));
    }
    else if (value) {
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        imageComponent = React.createElement("img", Object.assign({ src: imgObjectUrl, alt: alt !== null && alt !== void 0 ? alt : "" }, imgOptions));
    }
    return (React.createElement(React.Fragment, null,
        imageComponent,
        edit && (React.createElement("input", Object.assign({}, inputProps, { type: "file", accept: "image/*", onChange: (e) => handleChange(e.target) }))),
        allowDelete &&
            (DeleteComponent ? (React.createElement(DeleteComponent, { onClick: handleDelete })) : (React.createElement("button", { type: "button", onClick: handleDelete }, "Delete")))));
}
//# sourceMappingURL=index.js.map