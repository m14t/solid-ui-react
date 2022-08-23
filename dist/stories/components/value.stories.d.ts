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
import { DataType } from "../../src/helpers";
import { Value } from "../../src/components/value";
declare const _default: {
    title: string;
    component: typeof Value;
    argTypes: {
        onError: {
            description: string;
            action: string;
        };
        onSave: {
            description: string;
            action: string;
        };
        dataType: {
            type: {
                required: boolean;
            };
            description: string;
            control: {
                type: string;
                options: {
                    string: string;
                    boolean: string;
                    datetime: string;
                    decimal: string;
                    integer: string;
                    url: string;
                };
            };
        };
        thing: {
            description: string;
        };
        dataset: {
            description: string;
        };
        property: {
            type: {
                required: boolean;
            };
            description: string;
        };
        saveDatasetTo: {
            description: string;
        };
        locale: {
            description: string;
        };
        edit: {
            description: string;
        };
        autosave: {
            description: string;
        };
        inputProps: {
            description: string;
        };
        datasetUrl: {
            description: string;
        };
        thingUrl: {
            description: string;
        };
        errorComponent: {
            description: string;
            control: {
                type: null;
            };
        };
        loadingComponent: {
            description: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
interface IValue {
    datasetUrl: string;
    thingUrl: string;
    property: string;
    autosave: boolean;
    edit: boolean;
    inputProps: any;
    onError: (error: any) => void;
    onSave: () => void;
}
export declare function StringValue(props: IValue): ReactElement;
export declare namespace StringValue {
    var args: {
        datasetUrl: string;
        thingUrl: string;
        property: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function BooleanValue(props: IValue): ReactElement;
export declare namespace BooleanValue {
    var args: {
        thingUrl: string;
        datasetUrl: string;
        property: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function DatetimeValue(props: IValue): ReactElement;
export declare namespace DatetimeValue {
    var args: {
        thingUrl: string;
        property: string;
        datasetUrl: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function DecimalValue(props: IValue): ReactElement;
export declare namespace DecimalValue {
    var args: {
        property: string;
        thingUrl: string;
        datasetUrl: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function IntegerValue(props: IValue): ReactElement;
export declare namespace IntegerValue {
    var args: {
        property: string;
        thingUrl: string;
        datasetUrl: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function UrlValue(props: IValue): ReactElement;
export declare namespace UrlValue {
    var args: {
        property: string;
        thingUrl: string;
        datasetUrl: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function WithUnsavedData(props: IValue & {
    saveDatasetTo: string;
}): ReactElement;
export declare namespace WithUnsavedData {
    var args: {
        saveDatasetTo: string;
        datasetUrl: string;
        thingUrl: string;
        property: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function WithFetchedData(props: IValue & {
    saveDatasetTo: string;
    dataType: any;
}): ReactElement;
export declare namespace WithFetchedData {
    var args: {
        datasetUrl: string;
        thingUrl: string;
        property: string;
        autosave: boolean;
        edit: boolean;
        dataType: DataType;
        inputProps: {
            name: string;
            className: string;
        };
    };
}
export declare function ErrorComponent(): ReactElement;
export declare namespace ErrorComponent {
    var parameters: {
        actions: {
            disable: boolean;
        };
        controls: {
            disable: boolean;
        };
    };
}
//# sourceMappingURL=value.stories.d.ts.map