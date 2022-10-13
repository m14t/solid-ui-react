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
import { Thing, SolidDataset, UrlString, Url, getBoolean, getDatetime, getDecimal, getInteger, getUrl, getStringNoLocale, getStringWithLocale, getBooleanAll, getDatetimeAll, getDecimalAll, getIntegerAll, getStringNoLocaleAll, getStringWithLocaleAll, getUrlAll } from "@inrupt/solid-client";
export declare type CommonProperties = {
    thing?: Thing;
    solidDataset?: SolidDataset;
    property?: Url | UrlString;
    properties?: Url[] | UrlString[];
    edit?: boolean;
    autosave?: boolean;
    onSave?: (savedDataset?: SolidDataset, savedThing?: Thing) => void;
    onError?: (error: Error) => void;
};
export declare const overwriteFile: (src: string, file: File, input: EventTarget & HTMLInputElement, fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch, maxSize?: number | undefined, onSave?: (() => void) | undefined, onError?: ((error: Error) => void) | undefined) => Promise<string | null>;
export declare const retrieveFile: (src: string, fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch) => Promise<Blob>;
export declare type DataType = "boolean" | "datetime" | "decimal" | "integer" | "string" | "url";
export declare function getValueByType(type: "boolean", thing: Thing, property: UrlString | Url): ReturnType<typeof getBoolean>;
export declare function getValueByType(type: "datetime", thing: Thing, property: UrlString | Url): ReturnType<typeof getDatetime>;
export declare function getValueByType(type: "decimal", thing: Thing, property: UrlString | Url): ReturnType<typeof getDecimal>;
export declare function getValueByType(type: "integer", thing: Thing, property: UrlString | Url): ReturnType<typeof getInteger>;
export declare function getValueByType(type: "string", thing: Thing, property: UrlString | Url): ReturnType<typeof getStringNoLocale>;
export declare function getValueByType(type: "string", thing: Thing, property: UrlString | Url, locale: string): ReturnType<typeof getStringWithLocale>;
export declare function getValueByType(type: "string", thing: Thing, property: UrlString | Url): ReturnType<typeof getStringNoLocale>;
export declare function getValueByType(type: "url", thing: Thing, property: UrlString | Url): ReturnType<typeof getUrl>;
export declare function getValueByType(type: DataType, thing: Thing, property: UrlString | Url, locale?: string): string | boolean | number | Date | null;
export declare function getValueByTypeAll(type: "boolean", thing: Thing, property: UrlString | Url): ReturnType<typeof getBooleanAll>;
export declare function getValueByTypeAll(type: "datetime", thing: Thing, property: UrlString | Url): ReturnType<typeof getDatetimeAll>;
export declare function getValueByTypeAll(type: "decimal", thing: Thing, property: UrlString | Url): ReturnType<typeof getDecimalAll>;
export declare function getValueByTypeAll(type: "integer", thing: Thing, property: UrlString | Url): ReturnType<typeof getIntegerAll>;
export declare function getValueByTypeAll(type: "string", thing: Thing, property: UrlString | Url): ReturnType<typeof getStringNoLocaleAll>;
export declare function getValueByTypeAll(type: "string", thing: Thing, property: UrlString | Url, locale: string): ReturnType<typeof getStringWithLocaleAll>;
export declare function getValueByTypeAll(type: "string", thing: Thing, property: UrlString | Url): ReturnType<typeof getStringNoLocaleAll>;
export declare function getValueByTypeAll(type: "url", thing: Thing, property: UrlString | Url): ReturnType<typeof getUrlAll>;
export declare function getValueByTypeAll(type: DataType, thing: Thing, property: UrlString | Url, locale?: string): Array<string | boolean | number | Date | null>;
export declare function getPropertyForThing(propertySelector: typeof getValueByType | typeof getValueByTypeAll, type: DataType, thing: Thing, properties: Array<Url | UrlString>, locale?: string): Url | UrlString | undefined;
export declare type UseProperty = {
    dataset?: SolidDataset;
    thing?: Thing;
    error?: Error;
    property: Url | UrlString;
    value: string | boolean | number | Date | null;
    setDataset: (dataset: SolidDataset) => void;
    setThing: (thing: Thing) => void;
};
export declare type UsePropertyProps = {
    thing?: Thing;
    dataset?: SolidDataset;
    property?: Url | UrlString;
    properties?: Url[] | UrlString[];
    type: DataType;
    locale?: string;
};
export declare function useProperty(props: UsePropertyProps): UseProperty;
export declare function useDatetimeBrowserSupport(): boolean | null;
export declare function updateDataset(datasetUrl: string | Url, setDataset: (dataset: SolidDataset) => void): Promise<void>;
//# sourceMappingURL=index.d.ts.map