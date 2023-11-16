import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export default function DepositHistoryListItem() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="R$ 500,00" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box p={2}>
                    <Typography>Responsável: Kátia Fugazza</Typography>
                    <Typography>Data: 19/10/2023</Typography>
                    <Typography>Hora: 19:30</Typography>
                </Box>
            </Collapse>
        </>
    )
}