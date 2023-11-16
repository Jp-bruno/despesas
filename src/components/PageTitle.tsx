import { Paper, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function PageTitle({ title, hasBackButton }: { title: string, hasBackButton?: boolean }) {
    return (
        <Paper sx={{ p: 1, display: "flex", alignContent: "center", columnGap: 2, mb: 2, backgroundColor: "transparent", color: "white" }} elevation={8}>
            {hasBackButton && <IconButton><ArrowBack /></IconButton>}
            <Typography variant="h5" display={"flex"} alignItems={"center"}>{title}</Typography>
        </Paper>
    )
}