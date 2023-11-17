import { List, Paper, ListSubheader, ListItem, ListItemText } from "@mui/material";
import DepositHistoryListItem from "./DepositHistoryListItem";


export default function DepositHistoryList({ deposits }: { deposits: any[] }) {
    return (
        <List component={Paper} subheader={
            <ListSubheader>Últimos depósitos feitos na sua conta</ListSubheader>
        }>
            {deposits.length === 0 && <ListItem><ListItemText secondary="Nada a ser exibido" /></ListItem>}
            {deposits.map(deposit => {
                return <DepositHistoryListItem key={deposit.titulo} responsable={deposit.responsavel} date={deposit.createdAt} value={deposit.valor} />
            })}
        </List>
    )
}