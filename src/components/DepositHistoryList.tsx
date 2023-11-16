import { List, Paper, ListSubheader } from "@mui/material";
import DepositHistoryListItem from "./DepositHistoryListItem";


export default function DepositHistoryList() {
    return (
        <List component={Paper} subheader={
            <ListSubheader>últimos depósitos feitos na sua conta</ListSubheader>
        }>
            <DepositHistoryListItem />
        </List>
    )
}