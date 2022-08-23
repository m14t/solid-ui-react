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
import React, { ReactElement, SetStateAction, Dispatch, ReactNode } from "react";
import { login, logout, Session } from "@inrupt/solid-client-authn-browser";
import { SolidDataset, ProfileAll, WithServerResourceInfo } from "@inrupt/solid-client";
export interface ISessionContext {
    login: typeof login;
    logout: typeof logout;
    session: Session;
    sessionRequestInProgress: boolean;
    setSessionRequestInProgress?: Dispatch<SetStateAction<boolean>> | any;
    fetch: typeof window.fetch;
    profile: ProfileAll<SolidDataset & WithServerResourceInfo> | undefined;
}
export declare const SessionContext: React.Context<ISessionContext>;
export interface ISessionProvider {
    children: ReactNode;
    sessionId?: string;
    sessionRequestInProgress?: boolean;
    onError?: (error: Error) => void;
    /** @since 2.3.0 */
    restorePreviousSession?: boolean;
    /** @since 2.3.0 */
    onSessionRestore?: (url: string) => void;
}
/**
 * Used to provide session data to child components through context, as used by various provided components and the useSession hook.
 */
export declare const SessionProvider: ({ sessionId, children, onError, sessionRequestInProgress: defaultSessionRequestInProgress, restorePreviousSession, onSessionRestore, }: ISessionProvider) => ReactElement;
//# sourceMappingURL=index.d.ts.map