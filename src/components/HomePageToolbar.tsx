import { CardActions, IconButton, Paper, Tooltip } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import PaidIcon from "@mui/icons-material/Paid";
import AddExpenseModal from "./AddExpenseModal";
import { useState } from "react";
import RequestCreditModal from "./RequestCreditModal";

export default function HomePageToolbar() {
    const [expenseModalState, setExpenseModalState] = useState(false);
    const [RequestCreditModalState, setRequestCreditModalState] = useState(false);

    return (
        <CardActions sx={{ py: 1, px: 2, display: "flex", columnGap: 2 }}>
            <Tooltip title="Adicionar nova despesa">
                <IconButton onClick={() => setExpenseModalState(true)}>
                    <PriceCheckIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Solicitar créditos">
            <IconButton onClick={() => setRequestCreditModalState(true)}>
                    <PaidIcon />
                </IconButton>
            </Tooltip>

            {expenseModalState && (
                <AddExpenseModal isOpen={expenseModalState} close={() => setExpenseModalState(false)} />
            )}

            {RequestCreditModalState && (
                <RequestCreditModal isOpen={RequestCreditModalState} close={() => setRequestCreditModalState(false)} />
            )}
        </CardActions>
    );
}
