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
import { Text } from "../../src/components/text";
declare const _default: {
    title: string;
    component: typeof Text;
    argTypes: {
        onError: {
            description: string;
            action: string;
        };
        onSave: {
            description: string;
            action: string;
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
interface IText {
    property: string;
    autosave: boolean;
    edit: boolean;
    inputProps: any;
    datasetUrl?: string;
    thingUrl?: string;
    onError: (error: any) => void;
    onSave: () => void;
}
export declare function BasicExample({ autosave, edit, inputProps, property, onError, onSave, }: IText): ReactElement;
export declare namespace BasicExample {
    var args: {
        autosave: boolean;
        edit: boolean;
        inputProps: {
            type: string;
            name: string;
            className: string;
        };
        property: string;
    };
}
export declare function WithLocalData({ autosave, edit, inputProps, onError, onSave, }: IText): ReactElement;
export declare namespace WithLocalData {
    var args: {
        autosave: boolean;
        edit: boolean;
        inputProps: {
            type: string;
            name: string;
            className: string;
        };
        property: string;
    };
}
export declare function WithFetchedData({ autosave, edit, property, inputProps, datasetUrl, thingUrl, onError, onSave, }: IText): ReactElement;
export declare namespace WithFetchedData {
    var args: {
        autosave: boolean;
        edit: boolean;
        inputProps: {
            type: string;
            name: string;
            className: string;
        };
        property: string;
        datasetUrl: string;
        thingUrl: string;
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
//# sourceMappingURL=text.stories.d.ts.map