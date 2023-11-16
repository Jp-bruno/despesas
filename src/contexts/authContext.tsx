import Router from "next/router";
import { ReactNode, createContext, useState, useEffect, useCallback } from "react";

type AuthContextType = {
    authUser: ({ email, senha }: { email: string, senha: string }) => void
    logOff: () => void,
    isAuth: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const [isAuth, setAuthState] = useState(false);

    async function authUser({ email, senha }: { email: string; senha: string }) {
        const result = await fetch("http://localhost:4000/users/authUser", {
            method: "POST",
            body: JSON.stringify({ email, senha }),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());

        if (!result.error) {
            setAuthState(true);
            localStorage.setItem("user", JSON.stringify(result.data));
            Router.replace("/auth/home");
        }
    }

    async function logOff() {
        const result = await fetch("http://localhost:4000/users/logOff", {
            credentials: "include",
        }).then((res) => res.json());
        localStorage.removeItem("user");
        setAuthState(false);
        Router.replace("/");
    }

    const verifyAuth = useCallback(async () => {
        const response: { error: boolean, message: string, isAuth: boolean } = await fetch(
            `${process.env.NODE_ENV === "development"
                ? "http://localhost:4000"
                : "https://orion-blog-backend.onrender.com"
            }/users/verifyAuth`,
            { credentials: "include" }
        ).then(res => res.json())

        if (response.isAuth) {
            return true
        }

        return false
    }, [])

    useEffect(() => {
        (async () => {
            const isServerSideAuth = await verifyAuth();

            if (Router.pathname !== "/" && isServerSideAuth) {
                setAuthState(true);
                return
            }

            if (Router.pathname === "/" && isServerSideAuth) {
                setAuthState(true)
                Router.replace("/auth/home")
                return
            }

            if (Router.pathname !== "/" && !isServerSideAuth) {
                setAuthState(false)
                localStorage.removeItem("user")
                Router.replace("/")
                return
            }
        })();
    }, [verifyAuth])

    return (
        <AuthContext.Provider value={{ authUser, logOff, isAuth }}>
            {children}
        </AuthContext.Provider>
    )
} 