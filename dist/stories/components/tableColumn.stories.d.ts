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
import { ReactElement } from "react";
import { TableColumn } from "../../src/components/table";
declare const _default: {
    title: string;
    component: typeof TableColumn;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        property: {
            description: string;
        };
        dataType: {
            description: string;
        };
        header: {
            description: string;
        };
        body: {
            description: string;
            control: {
                type: null;
            };
        };
        locale: {
            description: string;
            control: {
                type: null;
            };
        };
        multiple: {
            description: string;
        };
        sortable: {
            description: string;
        };
        sortFn: {
            description: string;
            control: {
                type: null;
            };
        };
        filterable: {
            description: string;
        };
    };
};
export default _default;
interface ITableColumn {
    property: string;
    dataType?: string;
    header?: string;
    multiple?: boolean;
    sortable?: boolean;
    filterable?: boolean;
}
export declare function BasicExample({ property, dataType, header, multiple, sortable, filterable, }: ITableColumn): ReactElement;
export declare namespace BasicExample {
    var args: {
        property: string;
        dataType: string;
        header: string;
        multiple: boolean;
        sortable: boolean;
        filterable: boolean;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
//# sourceMappingURL=tableColumn.stories.d.ts.map