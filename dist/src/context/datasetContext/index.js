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
import React, { createContext, useState, useEffect } from "react";
import useDataset from "../../hooks/useDataset";
const DatasetContext = createContext({
    solidDataset: undefined,
    setDataset: () => { },
});
export default DatasetContext;
/**
 * Used to provide a [Dataset](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-SolidDataset) to child components through context, as used by various provided components and the useDataset hook.
 */
export const DatasetProvider = ({ children, onError, solidDataset: propDataset, datasetUrl, loading, loadingComponent: LoadingComponent, }) => {
    const { dataset, error } = useDataset(datasetUrl);
    if (error && onError) {
        onError(error);
    }
    const datasetToUse = propDataset !== null && propDataset !== void 0 ? propDataset : dataset;
    // Provide a setDataset function so that child components can update.
    const [stateDataset, setDataset] = useState(datasetToUse);
    // If the dataset is asynchronously loaded, make sure to set the new state value.
    useEffect(() => {
        setDataset(datasetToUse);
    }, [datasetToUse]);
    let loader = (LoadingComponent && (React.createElement(LoadingComponent, null))) ||
        loading || React.createElement("span", null, "Fetching data...");
    if (LoadingComponent === null) {
        loader = null;
    }
    return (React.createElement(DatasetContext.Provider, { value: { solidDataset: stateDataset, setDataset } }, stateDataset ? children : loader));
};
//# sourceMappingURL=index.js.map