import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export default function DepositHistoryListItem({ responsable, date, value }: { responsable: string, date: Date, value: string }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={`R$ ${value}`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box p={2}>
                    <Typography>Responsável: {responsable}</Typography>
                    <Typography>Valor: {value}</Typography>
                    <Typography>Data: {date.toLocaleDateString('pt-BR')}</Typography>
                    <Typography>Hora: {date.toLocaleTimeString('pt-BR')}</Typography>
                </Box>
            </Collapse>
        </>
    )
}