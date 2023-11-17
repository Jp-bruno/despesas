import { List, Paper, ListSubheader, ListItemText, ListItem } from "@mui/material";
import HomePageExpenseListItem from "./HomePageExpenseListItem";


export default function ExpensesList({ expenses }: { expenses: any[] }) {
    return (
        <List component={Paper} subheader={
            <ListSubheader>Suas últimas despesas</ListSubheader>
        }>
            {expenses.length === 0 && <ListItem><ListItemText secondary="Nada a ser exibido" /></ListItem>}
            {expenses.map(expense => {
                return <HomePageExpenseListItem key={expense.titulo} responsable={expense.responsavel} title={expense.titulo} date={expense.createdAt} value={expense.valor} />
            })}
        </List>
    )
}