import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import BasicModal from "./BasicModal"
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;

    form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`;

export default function RequestCreditModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {
    return (
        <BasicModal open={isOpen} onClose={close}>
            <StyledPaper sx={{ p: 2 }}>
                <Typography textAlign="center" variant="h5">Solicitar crédito</Typography>
                <form>
                    <TextField placeholder="Valor" />
                    <TextField placeholder="Motivo" />
                    <Box display="flex" justifyContent="space-between">
                        <Button variant="contained">Enviar</Button>
                        <Button variant="contained" color="error" onClick={close}>Cancelar</Button>
                    </Box>
                </form>
            </StyledPaper>
        </BasicModal >
    )
}