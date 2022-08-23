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
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, Children } from "react";
import { useTable, useSortBy, useGlobalFilter, } from "react-table";
import { getValueByType, getValueByTypeAll } from "../../helpers";
import CombinedDataProvider from "../../context/combinedDataContext";
/**
 * To be used as the only children of a Table component. Each column represents one property of the Things passed to the Table.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TableColumn(props) {
    throw new Error("Can't use TableColumn outside a Table.");
}
/**
 * Displays values from an array of [Things](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing) as table rows, with each column showing a given property of those [Things](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/glossary/#term-Thing).
 */
export function Table(_a) {
    var { children, emptyStateComponent: EmptyStateComponent, things, filter, ascIndicator, descIndicator, getRowProps } = _a, tableProps = __rest(_a, ["children", "emptyStateComponent", "things", "filter", "ascIndicator", "descIndicator", "getRowProps"]);
    const { columns, data } = useMemo(() => {
        const columnsArray = [];
        const dataArray = things.map(() => ({}));
        // loop through each column
        Children.forEach(children, (column, colIndex) => {
            if (column) {
                const { property, header, body, dataType = "string", locale, multiple = false, sortable, sortFn, filterable, } = column.props;
                // add heading
                columnsArray.push({
                    Header: header !== null && header !== void 0 ? header : `${property}`,
                    accessor: `col${colIndex}`,
                    disableGlobalFilter: !filterable,
                    disableSortBy: !sortable,
                    Cell: body !== null && body !== void 0 ? body : (({ value }) => (value != null ? `${value}` : "")),
                });
                if (sortFn) {
                    const sortFunction = (a, b, columnId) => {
                        const valueA = a.values[columnId];
                        const valueB = b.values[columnId];
                        return sortFn(valueA, valueB);
                    };
                    columnsArray[colIndex].sortType = sortFunction;
                }
                else {
                    if (dataType === "string") {
                        columnsArray[colIndex].sortType = dataType;
                    }
                    if (dataType === "integer" || dataType === "decimal") {
                        columnsArray[colIndex].sortType = "number";
                    }
                }
                // add each each value to data
                things.forEach((thing, i) => {
                    dataArray[i][`col${colIndex}`] = multiple
                        ? getValueByTypeAll(dataType, thing.thing, property, locale)
                        : getValueByType(dataType, thing.thing, property, locale);
                });
            }
        });
        return { columns: columnsArray, data: dataArray };
    }, [children, things]);
    const tableInstance = useTable({
        columns,
        data,
        initialState: { globalFilter: filter || undefined },
    }, useGlobalFilter, useSortBy);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    if (!rows.length) {
        if (EmptyStateComponent) {
            return React.createElement(EmptyStateComponent, null);
        }
        return null;
    }
    return (React.createElement("table", Object.assign({}, getTableProps(), tableProps),
        React.createElement("thead", null, headerGroups.map((headerGroup) => (React.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map((column) => (React.createElement("th", Object.assign({}, column.getHeaderProps(column.getSortByToggleProps())),
            column.render("Header"),
            column.isSorted &&
                (column.isSortedDesc ? descIndicator : ascIndicator)))))))),
        React.createElement("tbody", Object.assign({}, getTableBodyProps()), rows.map((row) => {
            prepareRow(row);
            const rowDataset = things[row.index].dataset;
            const rowThing = things[row.index].thing;
            return (React.createElement("tr", Object.assign({}, row.getRowProps(getRowProps(row, rowThing, rowDataset))),
                React.createElement(CombinedDataProvider, { solidDataset: rowDataset, thing: rowThing }, row.cells.map((cell) => {
                    return (React.createElement("td", Object.assign({}, cell.getCellProps()), cell.render("Cell")));
                }))));
        }))));
}
Table.defaultProps = {
    filter: undefined,
    ascIndicator: (React.createElement("span", { role: "img", "aria-label": "Sorted in ascending order" },
        " ",
        "\uD83D\uDD3C")),
    descIndicator: (React.createElement("span", { role: "img", "aria-label": "Sorted in descending order" },
        " ",
        "\uD83D\uDD3D")),
    getRowProps: () => ({}),
};
//# sourceMappingURL=index.js.map