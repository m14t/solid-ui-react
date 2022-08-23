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
import React, { useContext } from "react";
import { SessionContext } from "../../context/sessionContext";
/**
 * Displays a button which triggers the login flow on click. Should be used inside a `SessionProvider`.
 */
export const LoginButton = ({ oidcIssuer, redirectUrl, children, authOptions, onError, }) => {
    const options = Object.assign({ redirectUrl,
        oidcIssuer }, authOptions);
    const { login, setSessionRequestInProgress } = useContext(SessionContext);
    async function loginHandler() {
        setSessionRequestInProgress(true);
        try {
            // Workaround for a solid-client-authn bug.
            // Typescript is mad about something.
            await login(options);
            setSessionRequestInProgress(false);
        }
        catch (error) {
            setSessionRequestInProgress(false);
            if (onError)
                onError(error);
        }
    }
    function keyDownHandler(e) {
        e.preventDefault();
        return e.key === "Enter" ? loginHandler() : Promise.resolve();
    }
    return children ? (React.createElement("div", { role: "button", tabIndex: 0, onClick: loginHandler, onKeyDown: keyDownHandler }, children)) : (React.createElement("button", { type: "button", onClick: loginHandler, onKeyDown: keyDownHandler }, "Log In"));
};
//# sourceMappingURL=index.js.map