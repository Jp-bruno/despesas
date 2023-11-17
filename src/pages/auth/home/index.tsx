import DepositHistoryList from "@/components/DepositHistoryList";
import ExpensesList from "@/components/ExpensesList";
import HomePageToolbar from "@/components/HomePageToolbar";
import PageTitle from "@/components/PageTitle";
import { AuthContext } from "@/contexts/authContext";
import { useGetUser } from "@/hooks/usersHooks";
import { Box, Card, CardContent, List, ListItem, ListItemText, ListSubheader, Paper, Typography } from "@mui/material";
import { useContext } from "react";

export default function Home() {
    const { isAuth } = useContext(AuthContext)

    const { data: user, isLoading } = useGetUser(isAuth ? isAuth._id : "1")

    if (!isAuth || isLoading) {
        return null
    }

    return (
        <>
            <PageTitle title={`Olá, ${user.data.nome}`} />
            <Paper sx={{ p: 2 }}>
                <Box display="flex" rowGap={2} flexDirection="column">

                    <Card>
                        <CardContent>
                            <Typography variant="h5">Seus créditos</Typography>
                            <Typography variant="h6">R$ {Number(user.data.montante)}</Typography>
                        </CardContent>
                        <HomePageToolbar />
                    </Card>

                    {!isLoading && isAuth && <ExpensesList expenses={user.data.despesas} />}

                    {!isLoading && isAuth && <DepositHistoryList deposits={user.data.depositos} />}
                </Box>
            </Paper>
        </>
    )
}