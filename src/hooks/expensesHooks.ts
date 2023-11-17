import { useMutation, useQuery } from "@tanstack/react-query";

async function createExpense({ expenseData }: { expenseData: FormData }) {
  const result = await fetch(`localhost:4000/expenses`, {
    method: "POST",
    body: expenseData,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return result;
}

async function getUserExpenses({ userId }: { userId: string }) {
  const result = await fetch(`localhost:4000/expenses/user/${userId}`, {
    credentials: "include",
  }).then((res) => res.json());

  return result;
}

async function getOneExpense({ expenseId }: { expenseId: string }) {
  const result = await fetch(`localhost:4000/expenses/${expenseId}`, {
    credentials: "include",
  }).then((res) => res.json());

  return result;
}

////////////////////////////////////////

export const useCreateExpense = () => {
  return useMutation({
    mutationFn: createExpense,
  });
};

export const useGetUserExpenses = (userId: string) => {
  return useQuery({
    queryKey: [`user-${userId}-expenses`],
    queryFn: () => getUserExpenses({ userId }),
  });
};

export const useGetOneExpense = (expenseId: string) => {
  return useQuery({
    queryKey: [`expense-${expenseId}`],
    queryFn: () => getOneExpense({ expenseId }),
  });
};
