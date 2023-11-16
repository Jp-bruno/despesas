/* eslint-disable @next/next/no-img-element */
import { AuthContext } from "@/contexts/authContext";
import styled from "@emotion/styled";
import { Button, Paper, TextField } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    img {
        width: 50%;
        margin-inline: auto;
    }

    button {
        margin-top: 10%;
    }

    a {
        text-decoration: underline;
        color: blue;
    }
`;

export default function LoginForm() {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const { authUser } = useContext(AuthContext)

    function loginSubmit(data: any) {
        authUser(data)
    }

    return (
        <Paper elevation={8} sx={{ p: 2, placeSelf: "center", width: "clamp(400px, 50%, 500px)" }}>
            <StyledForm onSubmit={handleSubmit(loginSubmit)}>
                <img src="/ORION_Logotipo.png" alt="Orion" />
                <TextField type="email" {...register("email", { required: true })} placeholder="Email" error={errors.email ? true : false} label="Email" helperText={errors.email ? "Email inválido." : ""} />
                <TextField type="password" {...register("senha", { required: true })} placeholder="Senha" error={errors.senha ? true : false} label="Senha" helperText={errors.senha ? "Por favor, digite a senha." : ""} />
                <Link href="#">Esqueci a senha</Link>
                <Button type="submit" variant="contained" size="large">Entrar</Button>
            </StyledForm>
        </Paper>
    )
}