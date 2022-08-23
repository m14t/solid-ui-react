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
import { overwriteFile as solidOverwriteFile, getFile, getBoolean, getDatetime, getDecimal, getInteger, getUrl, getStringNoLocale, getStringWithLocale, getBooleanAll, getDatetimeAll, getDecimalAll, getIntegerAll, getStringNoLocaleAll, getStringWithLocaleAll, getUrlAll, getSolidDataset, } from "@inrupt/solid-client";
import { useContext, useEffect, useState } from "react";
import ThingContext from "../context/thingContext";
import DatasetContext from "../context/datasetContext";
export const overwriteFile = async (src, file, input, fetch, maxSize, onSave, onError) => {
    try {
        if (maxSize !== undefined && file.size > maxSize * 1024) {
            input.setCustomValidity(`The selected file must not be larger than ${maxSize}kB`);
            input.reportValidity();
            return null;
        }
        input.setCustomValidity("");
        await solidOverwriteFile(src, file, { fetch });
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
export const retrieveFile = async (src, fetch) => {
    const imageBlob = await getFile(src, { fetch });
    return imageBlob;
};
export function getValueByType(type, thing, property, locale) {
    switch (type) {
        case "boolean":
            return getBoolean(thing, property);
        case "datetime":
            return getDatetime(thing, property);
        case "decimal":
            return getDecimal(thing, property);
        case "integer":
            return getInteger(thing, property);
        case "url":
            return getUrl(thing, property);
        default:
            if (locale) {
                return getStringWithLocale(thing, property, locale);
            }
            return getStringNoLocale(thing, property);
    }
}
export function getValueByTypeAll(type, thing, property, locale) {
    switch (type) {
        case "boolean":
            return getBooleanAll(thing, property);
        case "datetime":
            return getDatetimeAll(thing, property);
        case "decimal":
            return getDecimalAll(thing, property);
        case "integer":
            return getIntegerAll(thing, property);
        case "url":
            return getUrlAll(thing, property);
        default:
            if (locale) {
                return getStringWithLocaleAll(thing, property, locale);
            }
            return getStringNoLocaleAll(thing, property);
    }
}
export function getPropertyForThing(propertySelector, type, thing, properties, locale) {
    return (properties.find((property) => {
        return propertySelector(type, thing, property, locale);
    }) || properties[0]);
}
export function useProperty(props) {
    const { dataset: propDataset, thing: propThing, properties: propProperties, property: propProperty, type, locale, } = props;
    const { solidDataset: contextDataset, setDataset = () => { } } = useContext(DatasetContext);
    const dataset = propDataset || contextDataset;
    const { thing: contextThing, setThing = () => { } } = useContext(ThingContext);
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
export function useDatetimeBrowserSupport() {
    const [isDatetimeSupported, setIsDatetimeSupported] = useState(null);
    useEffect(() => {
        const test = document.createElement("input");
        test.type = "datetime-local";
        setIsDatetimeSupported(test.type !== "text");
    }, []);
    return isDatetimeSupported;
}
export async function updateDataset(datasetUrl, setDataset) {
    const latestDataset = await getSolidDataset(datasetUrl);
    setDataset(latestDataset);
}
//# sourceMappingURL=index.js.map