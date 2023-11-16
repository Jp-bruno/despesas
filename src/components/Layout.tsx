import { AuthContext } from "@/contexts/authContext";
import { Container } from "@mui/material";
import { ReactNode, useContext } from "react";
import NavBar from "./NavBar";


export default function RootLayout({ children }: { children: ReactNode }) {
    const { isAuth } = useContext(AuthContext)
    return (

        <>
            {isAuth && <NavBar />}
            <Container sx={{ minHeight: "100vh", display: "flex", mt: 2, flexDirection: "column" }} >
                {children}
            </Container>
        </>
    )
}