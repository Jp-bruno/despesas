import { Box, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import StyledModal from "./BasicModal";
import { useDropzone } from "react-dropzone";
import FileUploadInput from "./FileUploadInput";
import { useCreateExpense } from "../hooks/expensesHooks";

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

export default function AddExpenseModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        multiple: false,
    });

    const { mutate: createExpense } = useCreateExpense();

    function submitExpense(data: any) {
        if (acceptedFiles.length === 0) {
            return;
        }

        const formData = new FormData();
        formData.append("titulo", data.titulo);
        formData.append("valor", data.valor.replace(/[,.]/g, ""));
        formData.append("data", data.data);
        formData.append("descricao", data.descricao);
        formData.append("arquivo", acceptedFiles[0]);

        createExpense({ expenseData: formData })
    }

    return (
        <StyledModal open={isOpen} onClose={close}>
            <StyledPaper sx={{ p: 2 }}>
                <Typography textAlign="center" variant="h5">
                    Adicionar despesa
                </Typography>
                <Typography textAlign="center" variant="caption">
                    Digite as informações com cuidado pois não será possível alterar os dados depois que forem
                    submetidos.
                </Typography>
                <form onSubmit={handleSubmit(submitExpense)}>
                    <TextField
                        error={errors.titulo ? true : false}
                        {...register("titulo", { required: { value: true, message: "Campo obrigatório." } })}
                        placeholder="Título"
                        helperText={errors.titulo ? errors.titulo.message as String : ""}
                    />
                    <TextField
                        error={errors.valor ? true : false}
                        {...register("valor", {
                            required: { value: true, message: "Campo obrigatório." },
                            pattern: { value: /\d+,\d{2}/, message: "Apenas números e vírgula (Ex: 15,99)." },
                        })}
                        type="number"
                        placeholder="Valor (Apenas números e vírgula. Ex: 15,99)"
                        helperText={errors.valor ? errors.valor.message as String : ""}
                    />
                    <TextField
                        error={errors.data ? true : false}
                        {...register("data", { required: { value: true, message: "Campo obrigatório." } })}
                        placeholder="Data"
                        type="date"
                        helperText={errors.data ? errors.data.message as String : ""}
                    />
                    <TextField
                        error={errors.descricao ? true : false}
                        {...register("descricao", { required: { value: true, message: "Campo obrigatório." } })}
                        placeholder="Descrição"
                        helperText={errors.descricao ? errors.descricao.message as String : ""}
                    />
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
                        <Button variant="contained" type="submit">
                            Enviar
                        </Button>
                        <Button variant="contained" color="error" onClick={close}>
                            Cancelar
                        </Button>
                    </Box>
                </form>
            </StyledPaper>
        </StyledModal>
    );
}
