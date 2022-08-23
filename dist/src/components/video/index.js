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
import React, { useEffect, useState, useContext } from "react";
import { overwriteFile, useProperty } from "../../helpers";
import { SessionContext } from "../../context/sessionContext";
import useFile from "../../hooks/useFile";
/**
 * Fetches and displays a video, from a src found at a given property of a given Thing. Can also be used to upload a new/replacement video file.
 */
export function Video(_a) {
    var { property: propProperty, properties: propProperties, thing: propThing, edit, autosave, onSave, onError, maxSize, inputProps, errorComponent: ErrorComponent, loadingComponent: LoadingComponent } = _a, videoOptions = __rest(_a, ["property", "properties", "thing", "edit", "autosave", "onSave", "onError", "maxSize", "inputProps", "errorComponent", "loadingComponent"]);
    const { fetch } = useContext(SessionContext);
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
    const [error, setError] = useState(thingError !== null && thingError !== void 0 ? thingError : valueError);
    useEffect(() => {
        if (error) {
            if (onError) {
                onError(error);
            }
        }
    }, [error, onError, ErrorComponent]);
    const [videoObjectUrl, setVideoObjectUrl] = useState("");
    const { data, error: videoError, inProgress: fetchingVideoInProgress, } = useFile(value);
    useEffect(() => {
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
        let loader = (LoadingComponent && (React.createElement(LoadingComponent, null))) || React.createElement("span", null, "fetching data in progress");
        if (LoadingComponent === null) {
            loader = null;
        }
        return loader;
    }
    if (error) {
        videoComponent = ErrorComponent ? (React.createElement(ErrorComponent, { error: error })) : (React.createElement("span", null, error.toString()));
    }
    else if (value) {
        videoComponent = (
        /* eslint jsx-a11y/media-has-caption: 0, react/jsx-props-no-spreading: 0 */
        React.createElement("video", Object.assign({ src: videoObjectUrl || value, controls: true }, videoOptions)));
    }
    return (React.createElement(React.Fragment, null,
        videoComponent,
        edit && (React.createElement("input", Object.assign({}, inputProps, { type: "file", accept: "video/*", onChange: (e) => handleChange(e.target) })))));
}
//# sourceMappingURL=index.js.map