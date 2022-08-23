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
import { setThing, saveSolidDatasetAt, getSourceUrl, hasResourceInfo, setDatetime, } from "@inrupt/solid-client";
import { SessionContext } from "../../../context/sessionContext";
import { useProperty, useDatetimeBrowserSupport, updateDataset, } from "../../../helpers";
const DatetimeValue = (props) => {
    var _a;
    const { thing: propThing, solidDataset: propDataset, property: propProperty, properties: propProperties, saveDatasetTo, onSave, onError, edit, autosave, inputProps } = props, other = __rest(props, ["thing", "solidDataset", "property", "properties", "saveDatasetTo", "onSave", "onError", "edit", "autosave", "inputProps"]);
    const { fetch } = useContext(SessionContext);
    const { value: thingValue, thing, property, dataset, setDataset, error, } = useProperty({
        dataset: propDataset,
        thing: propThing,
        type: "datetime",
        property: propProperty,
        properties: propProperties,
    });
    const isDatetimeSupported = useDatetimeBrowserSupport();
    useEffect(() => {
        if (error && onError) {
            onError(error);
        }
    }, [error, onError]);
    const formattedValue = thingValue
        ? thingValue
            .toISOString()
            .substring(0, thingValue.toISOString().length - 5)
        : null;
    const [value, setValue] = useState(formattedValue);
    let initialDateValue = "";
    if (!isDatetimeSupported) {
        initialDateValue = value === null || value === void 0 ? void 0 : value.split(/T(.+)/)[0].toString();
    }
    let initialTimeValue = "00:00";
    if (!isDatetimeSupported) {
        initialTimeValue = (_a = value === null || value === void 0 ? void 0 : value.split(/T(.+)/)[1]) === null || _a === void 0 ? void 0 : _a.toString();
    }
    const [time, setTime] = useState(initialTimeValue);
    const [date, setDate] = useState(initialDateValue);
    useEffect(() => {
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
            const updatedResource = setDatetime(thing, property, new Date(`${datetimeValue}Z`));
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
    return (React.createElement(React.Fragment, null,
        // eslint-disable-next-line react/jsx-props-no-spreading
        !edit && dataset && thing && React.createElement("span", Object.assign({}, other), `${value}`),
        edit && dataset && thing && inputType === "datetime-local" && (React.createElement("input", Object.assign({ type: inputType, "aria-label": "Date and Time", step: "any" }, inputProps, { onChange: (e) => {
                setValue(e.target.value);
            }, onBlur: (e) => autosave && saveHandler(e), value: value, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}", placeholder: "yyyy-mm-ddThh:mm" }))),
        edit && dataset && thing && inputType === "datetime-workaround" && (React.createElement(React.Fragment, null,
            React.createElement("input", Object.assign({ type: "date", "aria-label": "Date", step: "any" }, inputProps, { onChange: (e) => {
                    setDate(e.target.value);
                }, onBlur: (e) => autosave && saveHandler(e), value: date, pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}", placeholder: "yyyy-mm-dd" })),
            React.createElement("input", { type: "time", "aria-label": "Time", value: time, onChange: (e) => setTime(e.target.value), onBlur: (e) => autosave && saveHandler(e), pattern: "[0-9]{2}:[0-9]{2}" })))));
};
DatetimeValue.defaultProps = {
    autosave: false,
    edit: false,
};
export default DatetimeValue;
//# sourceMappingURL=index.js.map