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
import { Image } from "../../src/components/image";
declare const _default: {
    title: string;
    component: typeof Image;
    argTypes: {
        thing: {
            description: string;
            control: {
                type: null;
            };
        };
        property: {
            description: string;
        };
        properties: {
            description: string;
        };
        edit: {
            description: string;
        };
        autosave: {
            description: string;
        };
        maxSize: {
            description: string;
        };
        inputProps: {
            description: string;
            control: {
                type: null;
            };
        };
        onSave: {
            description: string;
            control: {
                type: null;
            };
        };
        onError: {
            description: string;
            control: {
                type: null;
            };
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
        saveLocation: {
            description: string;
            control: {
                type: null;
            };
        };
        solidDataset: {
            description: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
interface IWithBasicData {
    property: string;
    properties: Array<string>;
    edit: boolean;
    allowDelete: boolean;
    maxSize: number;
}
export declare function BasicExample({ property, properties, edit, allowDelete, maxSize, }: IWithBasicData): ReactElement;
export declare namespace BasicExample {
    var args: {
        property: string;
        edit: boolean;
        allowDelete: boolean;
        maxSize: number;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function PropertyArrayExample({ property, properties, edit, maxSize, allowDelete, }: IWithBasicData): ReactElement;
export declare namespace PropertyArrayExample {
    var args: {
        property: string;
        properties: string[];
        edit: boolean;
        maxSize: number;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
interface IWithDatasetProvider {
    datasetUrl: string;
    thingUrl: string;
    property: string;
    edit: boolean;
    maxSize: number;
}
export declare function WithDatasetProvider({ thingUrl, datasetUrl, property, edit, maxSize, }: IWithDatasetProvider): ReactElement;
export declare namespace WithDatasetProvider {
    var args: {
        datasetUrl: string;
        thingUrl: string;
        property: string;
        edit: boolean;
        maxSize: number;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function ErrorComponent(): ReactElement;
export declare namespace ErrorComponent {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function DeleteComponent(): ReactElement;
export declare namespace DeleteComponent {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
//# sourceMappingURL=image.stories.d.ts.map