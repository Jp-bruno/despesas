import { useCreateUser } from "@/hooks/usersHooks";
import { useForm } from "react-hook-form"


export default function Cadastro() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const { mutate: createUser } = useCreateUser()

    function cadastroSubmit(data: any) {
        createUser({nome: data.nome, email: data.email})
    }

    return (
        <div>
            <form onSubmit={handleSubmit(cadastroSubmit)}>
                <input type="nome" {...register("nome", { required: true })} />
                <input type="email" {...register("email", { required: true })} />
                <button type="submit">Cadastrar usuário</button>
            </form>
        </div>
    )
}
