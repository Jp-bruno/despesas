import { Container } from "@mui/material";


export default function MainContentContainer({ children, extraStyles }: { children: React.ReactNode, extraStyles?: any }) {
    return (
        <Container sx={{ flexGrow: 1, ...extraStyles }}>
            {children}
        </Container>
    )
}