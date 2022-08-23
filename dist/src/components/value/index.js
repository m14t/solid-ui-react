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
import DatetimeValue from "./datetime";
import StringValue from "./string";
import BooleanValue from "./boolean";
import UrlValue from "./url";
import IntegerValue from "./integer";
import DecimalValue from "./decimal";
/**
 * Retrieves and displays a value of one of a range of types from a given [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset)/[Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing)/property. Can also be used to set/update and persist a value.
 */
export function Value(props) {
    const _a = props, { dataType } = _a, otherProps = __rest(_a, ["dataType"]);
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
    let Component = StringValue;
    switch (dataType) {
        case "boolean":
            Component = BooleanValue;
            break;
        case "datetime":
            Component = DatetimeValue;
            break;
        case "decimal":
            Component = DecimalValue;
            break;
        case "integer":
            Component = IntegerValue;
            break;
        case "url":
            Component = UrlValue;
            break;
        default:
            Component = StringValue;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return React.createElement(Component, Object.assign({}, otherProps));
}
Value.defaultProps = {
    autosave: false,
    edit: false,
};
//# sourceMappingURL=index.js.map