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
import React, { createContext, useState, useEffect, } from "react";
import { fetch, login, logout, handleIncomingRedirect, getDefaultSession, onSessionRestore as onSessionRestoreClient, } from "@inrupt/solid-client-authn-browser";
import { getProfileAll, } from "@inrupt/solid-client";
export const SessionContext = createContext({
    login,
    logout,
    fetch,
    session: getDefaultSession(),
    sessionRequestInProgress: true,
    profile: undefined,
});
/**
 * Used to provide session data to child components through context, as used by various provided components and the useSession hook.
 */
export const SessionProvider = ({ sessionId, children, onError, sessionRequestInProgress: defaultSessionRequestInProgress, restorePreviousSession, onSessionRestore, }) => {
    const restoreSession = restorePreviousSession || typeof onSessionRestore !== "undefined";
    const [session, setSession] = useState(getDefaultSession());
    const [profile, setProfile] = useState();
    useEffect(() => {
        if (onSessionRestore !== undefined) {
            onSessionRestoreClient(onSessionRestore);
        }
    }, [onSessionRestore]);
    const defaultInProgress = typeof defaultSessionRequestInProgress === "undefined"
        ? !session.info.isLoggedIn
        : defaultSessionRequestInProgress;
    // If loggedin is true, we're not making a session request.
    const [sessionRequestInProgress, setSessionRequestInProgress] = useState(defaultInProgress);
    let currentLocation;
    if (typeof window !== "undefined") {
        currentLocation = window.location;
    }
    useEffect(() => {
        handleIncomingRedirect({
            url: window.location.href,
            restorePreviousSession: restoreSession,
        })
            .then((sessionInfo) => 
        // If handleIncomingRedirect logged the session in, we know what the current
        // user's WebID is.
        (sessionInfo === null || sessionInfo === void 0 ? void 0 : sessionInfo.webId) !== undefined
            ? getProfileAll(sessionInfo === null || sessionInfo === void 0 ? void 0 : sessionInfo.webId, {
                fetch: session.fetch,
            })
            : undefined)
            .then((foundProfile) => {
            if (foundProfile !== undefined) {
                setProfile(foundProfile);
            }
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        })
            .finally(() => {
            // console.log("done");
            setSessionRequestInProgress(false);
        });
        getDefaultSession().on("logout", () => {
            // TODO force a refresh
            setSession(getDefaultSession());
        });
    }, [session, sessionId, onError, currentLocation, restoreSession]);
    const contextLogin = async (options) => {
        setSessionRequestInProgress(true);
        try {
            await login(options);
        }
        catch (error) {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        }
        finally {
            setSessionRequestInProgress(false);
        }
    };
    const contextLogout = async () => {
        try {
            await logout();
            setProfile(undefined);
        }
        catch (error) {
            if (onError) {
                onError(error);
            }
            else {
                throw error;
            }
        }
    };
    return (React.createElement(SessionContext.Provider, { value: {
            session,
            login: contextLogin,
            logout: contextLogout,
            sessionRequestInProgress,
            setSessionRequestInProgress,
            fetch,
            profile,
        } }, children));
};
//# sourceMappingURL=index.js.map