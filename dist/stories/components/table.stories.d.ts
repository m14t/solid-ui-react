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
import { Table } from "../../src/components/table";
declare const _default: {
    title: string;
    component: typeof Table;
    argTypes: {
        things: {
            description: string;
            control: {
                type: null;
            };
        };
        filter: {
            description: string;
        };
        ascIndicator: {
            description: string;
            control: {
                type: null;
            };
        };
        descIndicator: {
            description: string;
            control: {
                type: null;
            };
        };
        getRowProps: {
            description: string;
            control: {
                type: null;
            };
        };
        emptyStateComponent: {
            description: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
export declare function BasicExample(): ReactElement;
export declare namespace BasicExample {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function MultipleValues(): ReactElement;
export declare namespace MultipleValues {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function CustomBodyComponent(): ReactElement;
export declare namespace CustomBodyComponent {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function NestedDataExample(): ReactElement;
export declare namespace NestedDataExample {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function SortableColumns(): ReactElement;
export declare namespace SortableColumns {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
interface IFilterOnFirstColumn {
    filter: string;
}
export declare function FilterOnFirstColumn({ filter, }: IFilterOnFirstColumn): ReactElement;
export declare namespace FilterOnFirstColumn {
    var args: {
        filter: string;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function SortingFunctionOnFirstColumn(): ReactElement;
export declare namespace SortingFunctionOnFirstColumn {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function NoDataComponent(): ReactElement;
export declare namespace NoDataComponent {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
//# sourceMappingURL=table.stories.d.ts.map