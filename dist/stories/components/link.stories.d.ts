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
import { Link } from "../../src/components/link";
declare const _default: {
    title: string;
    component: typeof Link;
    argTypes: {
        property: {
            type: {
                required: boolean;
            };
            description: string;
        };
        thing: {
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
export declare function WithChildren({ property }: {
    property: string;
}): ReactElement;
export declare namespace WithChildren {
    var args: {
        property: string;
    };
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
}
export declare function WithoutChildren({ property, }: {
    property: string;
}): ReactElement;
export declare namespace WithoutChildren {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
    var args: {
        property: string;
    };
}
export declare function Editable({ property }: {
    property: string;
}): ReactElement;
export declare namespace Editable {
    var parameters: {
        actions: {
            disable: boolean;
        };
    };
    var args: {
        property: string;
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
//# sourceMappingURL=link.stories.d.ts.map