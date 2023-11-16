import { List, Paper, ListSubheader } from "@mui/material";
import HomePageExpenseListItem from "./HomePageExpenseListItem";


export default function ExpensesList() {
    return (
        <List component={Paper} subheader={
            <ListSubheader>Suas últimas despesas</ListSubheader>
        }>
            <HomePageExpenseListItem />
        </List>
    )
}