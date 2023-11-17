import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export default function HomePageExpenseListItem({ responsable, title, date, value }: { responsable: string, title: string, date: Date, value: string }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Passagem de ônibus" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box p={2}>
                    <Typography>Data: {date.toLocaleDateString('pt-BR')}</Typography>
                    <Typography>Hora: {date.toLocaleTimeString('pt-BR')}</Typography>
                    <Typography>Valor: R$ {value}</Typography>
                </Box>
            </Collapse>
        </>
    )
}