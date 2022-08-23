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
import React from "react";
import { DatasetProvider } from "../datasetContext";
import { ThingProvider } from "../thingContext";
/**
 * Used to provide both a [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset) and [Thing](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing) to child components through context, as used by various provided components and the useDataset and useThing hooks.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CombinedDataProvider(props) {
    const { children, solidDataset, datasetUrl, thing, thingUrl, onError, loadingComponent, } = props;
    return (React.createElement(DatasetProvider, { onError: onError, solidDataset: solidDataset, datasetUrl: datasetUrl, loadingComponent: loadingComponent },
        React.createElement(ThingProvider, { thing: thing, thingUrl: thingUrl }, children)));
}
export default CombinedDataProvider;
//# sourceMappingURL=index.js.map