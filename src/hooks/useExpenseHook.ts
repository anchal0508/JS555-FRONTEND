// This file is used for MainExpTable to display all expenses in the table.
// Targeted Beneficiary  File: MainExpTable


import { useQuery } from "@tanstack/react-query"
import API from "../axios"
import { useExpense } from "../context/expenseContext";


export const useExpenseHook = () => {
    const { currentPage, limit, search } = useExpense();

    const fetchAllExpenses = async () => {

        const response = await API.get('/expenses/get-all-exp', {
            params: {
                page: currentPage,
                limit: limit,
                search: search
            }
        });

        return response.data?.expensesData || {};
        
    } 
    
    const { data: expensesData = {}, isLoading, error } = useQuery({

        queryKey: ['expenses', currentPage, limit, search],

        queryFn: fetchAllExpenses,

        staleTime: 5 * 60 * 1000,
        retry: false,


    });

    return {
        expenses: expensesData?.expenses || [],
        allExpenses: expensesData,
        totalPages: expensesData?.totalPages || 1,
        totalRows: expensesData?.totalRows || 0,

        totalIncom: expensesData?.totalIncome || 0,
        totalExpense: expensesData?.totalExpense || 0,

        isLoading,
        topLeaders: expensesData?.topLeaders || [],
        error
    };
}

