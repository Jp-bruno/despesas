import { Grid, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import styled from "@emotion/styled";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react"

const StyledNavBar = styled(Grid)`
    height: 100px;
    background-color: #3C654B;
    padding-inline: 4%;

    nav {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export default function NavBar() {
    const { logOff } = useContext(AuthContext)
    
    return (
        <StyledNavBar container>
            <Grid item xs={2} sx={{ position: "relative" }}>
                <Image src="/Logotipo_ORION-branco.png" alt="Orion" fill style={{ objectFit: "contain" }} />
            </Grid>

            <Grid item xs={true}>
                <nav>
                    <Tooltip title="Sair">
                        <IconButton sx={{ height: "fit-content" }} onClick={logOff}><LogoutIcon sx={{ color: "white" }} /></IconButton>
                    </Tooltip>
                </nav>
            </Grid>
        </StyledNavBar>
    )
}