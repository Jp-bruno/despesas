import { useQuery, useMutation } from "@tanstack/react-query";

async function createUser({ nome, email }: { nome: string; email: string }) {
  const result = await fetch("http://localhost:4000/users/createUser", {
    method: "POST",
    body: JSON.stringify({ nome, email }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return result
}

//////////////////////////////////////////////////////////////////////

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

