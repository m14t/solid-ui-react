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
import React, { ReactElement } from "react";
declare const _default: {
    title: string;
    component: ({ children, thing: propThing, thingUrl, }: import("../../src/context/thingContext").RequireThingOrThingUrl) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        thing: {
            description: string;
            control: {
                type: null;
            };
        };
        thingUrl: {
            description: string;
            control: {
                type: null;
            };
        };
    };
};
export default _default;
export declare function WithLocalThing(): ReactElement;
interface IWithThingUrl {
    datasetUrl: string;
    thingUrl: string;
    property: string;
}
export declare function WithThingUrl(props: IWithThingUrl): ReactElement;
export declare namespace WithThingUrl {
    var args: {
        datasetUrl: string;
        thingUrl: string;
        property: string;
    };
}
//# sourceMappingURL=thingProvider.stories.d.ts.map