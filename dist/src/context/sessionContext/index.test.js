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
import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { login, logout, handleIncomingRedirect, getDefaultSession, onSessionRestore, } from "@inrupt/solid-client-authn-browser";
import { SessionContext, SessionProvider } from ".";
jest.mock("@inrupt/solid-client-authn-browser");
jest.mock("@inrupt/solid-client");
function ChildComponent() {
    const { session, sessionRequestInProgress, login: sessionLogin, logout: sessionLogout, profile, } = React.useContext(SessionContext);
    return (React.createElement("div", null,
        sessionRequestInProgress && (React.createElement("div", { "data-testid": "sessionRequestInProgress" }, "sessionRequestInProgress")),
        React.createElement("div", { "data-testid": "session" }, JSON.stringify(session)),
        React.createElement("button", { type: "button", onClick: () => sessionLogin({}) }, "Login"),
        React.createElement("button", { type: "button", onClick: sessionLogout, "data-testid": "logout" }, "Logout"),
        React.createElement("p", { "data-testid": "profile" }, profile
            ? `${profile.altProfileAll.length} alt profiles found`
            : "No profile found")));
}
describe("Testing SessionContext", () => {
    it("matches snapshot", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const documentBody = render(React.createElement(SessionProvider, { sessionId: "key" },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        const { baseElement } = documentBody;
        expect(baseElement).toMatchSnapshot();
    });
    it("matches snapshot without optional sessionId", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const documentBody = render(React.createElement(SessionProvider, null,
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        const { baseElement } = documentBody;
        expect(baseElement).toMatchSnapshot();
    });
    it("calls onError if handleIncomingRedirect fails", async () => {
        handleIncomingRedirect.mockRejectedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const onError = jest.fn();
        render(React.createElement(SessionProvider, { sessionId: "key", onError: onError },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(onError).toHaveBeenCalled();
        });
    });
});
describe("SessionContext functionality", () => {
    it("attempts to handle an incoming redirect", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        render(React.createElement(SessionProvider, { sessionId: "key" },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
    });
    it("fetches the user's profile if logging in succeeds", async () => {
        handleIncomingRedirect.mockResolvedValueOnce({
            webId: "https://some.webid",
        });
        const mockedClientModule = jest.requireMock("@inrupt/solid-client");
        const actualClientModule = jest.requireActual("@inrupt/solid-client");
        mockedClientModule.getProfileAll = jest.fn().mockResolvedValue({
            webIdProfile: actualClientModule.mockSolidDatasetFrom("https://some.webid"),
            altProfileAll: [
                actualClientModule.mockSolidDatasetFrom("https://some.profile"),
            ],
        });
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const user = userEvent.setup();
        const screen = render(React.createElement(SessionProvider, { sessionId: "key" },
            React.createElement(ChildComponent, null)));
        await waitFor(async () => {
            expect(screen.getByTestId("profile").textContent).toBe("1 alt profiles found");
        });
        await user.click(screen.getByTestId("logout"));
        expect(screen.getByTestId("profile").textContent).toBe("No profile found");
        expect(mockedClientModule.getProfileAll).toHaveBeenCalled();
    });
    it("uses the login and logout functions from session", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const user = userEvent.setup();
        const { getByText } = render(React.createElement(SessionProvider, { sessionId: "key" },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        expect(login).not.toHaveBeenCalled();
        expect(logout).not.toHaveBeenCalled();
        await user.click(getByText("Login"));
        expect(login).toHaveBeenCalledTimes(1);
        await user.click(getByText("Logout"));
        expect(logout).toHaveBeenCalledTimes(1);
    });
    it("calls onError if there is an error logging in", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        login.mockRejectedValueOnce(null);
        const onError = jest.fn();
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const user = userEvent.setup();
        const { getByText } = render(React.createElement(SessionProvider, { sessionId: "key", onError: onError },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        await user.click(getByText("Login"));
        expect(onError).toHaveBeenCalledTimes(1);
    });
    it("calls onError if there is an error logging out", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        logout.mockRejectedValueOnce(null);
        const onError = jest.fn();
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const user = userEvent.setup();
        const { getByText } = render(React.createElement(SessionProvider, { sessionId: "key", onError: onError },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        await user.click(getByText("Logout"));
        expect(onError).toHaveBeenCalledTimes(1);
    });
    it("registers a session restore callback if one is provided", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const sessionRestoreCallback = jest.fn();
        render(React.createElement(SessionProvider, { sessionId: "key", onSessionRestore: sessionRestoreCallback },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        expect(onSessionRestore).toHaveBeenCalledWith(sessionRestoreCallback);
    });
    it("does not register a session restore callback on every render unless it changes", async () => {
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const session = {
            info: {
                isLoggedIn: true,
                webId: "https://fakeurl.com/me",
            },
            on: jest.fn(),
        };
        getDefaultSession.mockReturnValue(session);
        const sessionRestoreCallback = jest.fn();
        const differentSessionRestoreCallback = jest.fn();
        handleIncomingRedirect.mockResolvedValueOnce(null);
        const { rerender } = render(React.createElement(SessionProvider, { sessionId: "key", onSessionRestore: sessionRestoreCallback },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        handleIncomingRedirect.mockResolvedValueOnce(null);
        rerender(React.createElement(SessionProvider, { sessionId: "key", onSessionRestore: sessionRestoreCallback },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        rerender(React.createElement(SessionProvider, { sessionId: "key", onSessionRestore: differentSessionRestoreCallback },
            React.createElement(ChildComponent, null)));
        await waitFor(() => {
            expect(handleIncomingRedirect).toHaveBeenCalled();
        });
        expect(onSessionRestore).toHaveBeenCalledTimes(2);
        expect(onSessionRestore).toHaveBeenCalledWith(sessionRestoreCallback);
        expect(onSessionRestore).toHaveBeenCalledWith(differentSessionRestoreCallback);
    });
});
//# sourceMappingURL=index.test.js.map