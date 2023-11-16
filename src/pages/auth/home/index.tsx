import DepositHistoryList from "@/components/DepositHistoryList";
import ExpensesList from "@/components/ExpensesList";
import HomePageToolbar from "@/components/HomePageToolbar";
import PageTitle from "@/components/PageTitle";
import { Box, Card, CardContent, List, ListItem, ListItemText, ListSubheader, Paper, Typography } from "@mui/material";


export default function Home() {
    return (
        <>
            <PageTitle title="Olá, Andrea" />
            <Paper sx={{ p: 2 }}>
                <Box display="flex" rowGap={2} flexDirection="column">

                    <Card>
                        <CardContent>
                            <Typography variant="h5">Seus créditos</Typography>
                            <Typography variant="body1">R$ 1.900,00</Typography>
                        </CardContent>
                        <HomePageToolbar />
                    </Card>

                    <ExpensesList />

                    <DepositHistoryList />
                </Box>
            </Paper>
        </>
    )
}