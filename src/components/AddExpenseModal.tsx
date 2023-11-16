import { Box, Modal, Paper, TextField, Tooltip, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import StyledModal from "./BasicModal";
import { useDropzone } from "react-dropzone";
import FileUploadInput from "./FileUploadInput";

const StyledPaper = styled(Paper)`
    display: flex;
    flex-direction: column;

    form {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`;

export default function AddExpenseModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {
    const { register, handleSubmit } = useForm();

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ multiple: false });

    function submitExpense(data: any) {
        console.log(data)
        console.log(acceptedFiles)
    }

    return (
        <StyledModal open={isOpen} onClose={close}>
            <StyledPaper sx={{ p: 2 }}>
                <Typography textAlign="center" variant="h5">Adicionar despesa</Typography>
                <Typography textAlign="center" variant="caption">Digite as informações com cuidado pois não será possível alterar os dados depois que forem submetidos.</Typography>
                <form onSubmit={handleSubmit(submitExpense)}>
                    <TextField {...register("titulo", { required: true })} placeholder="Título" />
                    <TextField {...register("valor", { required: true })} placeholder="Valor" />
                    <TextField {...register("data", { required: true })} placeholder="Data" type="date" />
                    <TextField {...register("descricao", { required: true })} placeholder="Descrição" />
                    <FileUploadInput
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                        isDragActive={isDragActive}
                    />
                    <div>
                        {acceptedFiles.map((el) => (
                            <p key={el.name}>
                                Arquivo selecionado: <strong>{el.name}</strong>
                            </p>
                        ))}
                    </div>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant="contained" type="submit">Enviar</Button>
                        <Button variant="contained" color="error" onClick={close}>Cancelar</Button>
                    </Box>
                </form>
            </StyledPaper>
        </StyledModal>
    )
}