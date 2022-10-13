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
import React, { ReactElement } from "react";
import { SolidDataset, WithResourceInfo, UrlString } from "@inrupt/solid-client";
export interface IDatasetContext {
    solidDataset: SolidDataset | (SolidDataset & WithResourceInfo) | undefined;
    setDataset: (solidDataset: SolidDataset) => void;
}
declare const DatasetContext: React.Context<IDatasetContext>;
export default DatasetContext;
export interface IDatasetProvider {
    children: React.ReactNode;
    /**
     * @deprecated `loading` is deprecated. It can still be used but may be removed in a future major release.`loadingComponent` should be used instead.
     */
    loading?: React.ReactNode;
    loadingComponent?: React.ComponentType | null;
    onError?(error: Error): void | null;
    solidDataset?: SolidDataset | (SolidDataset & WithResourceInfo);
    datasetUrl?: UrlString | string;
}
export declare type RequireProperty<T, Prop extends keyof T> = T & {
    [key in Prop]-?: T[key];
};
export declare type RequireDatasetOrDatasetUrl = RequireProperty<IDatasetProvider, "solidDataset"> | RequireProperty<IDatasetProvider, "datasetUrl">;
/**
 * Used to provide a [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset) to child components through context, as used by various provided components and the useDataset hook.
 */
export declare const DatasetProvider: ({ children, onError, solidDataset: propDataset, datasetUrl, loading, loadingComponent: LoadingComponent, }: RequireDatasetOrDatasetUrl) => ReactElement;
//# sourceMappingURL=index.d.ts.map