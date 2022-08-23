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
import { Video } from "../../src/components/video";
declare const _default: {
    title: string;
    component: typeof Video;
    argTypes: {
        thing: {
            description: string;
            control: {
                type: null;
            };
        };
        property: {
            type: {
                required: boolean;
            };
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
    };
};
export default _default;
export declare function EditFalse({ edit, autosave, maxSize, }: {
    edit: boolean;
    autosave: boolean;
    maxSize: number;
}): ReactElement;
export declare namespace EditFalse {
    var args: {
        edit: boolean;
        autosave: boolean;
        maxSize: number;
        property: string;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function EditTrue({ edit, autosave, maxSize, }: {
    edit: boolean;
    autosave: boolean;
    maxSize: number;
}): ReactElement;
export declare namespace EditTrue {
    var args: {
        edit: boolean;
        autosave: boolean;
        maxSize: number;
        property: string;
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
        controls: {
            disable: boolean;
        };
    };
}
//# sourceMappingURL=video.stories.d.ts.map