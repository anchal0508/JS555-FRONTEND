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

        return response.data.expensesData;
        
    } 
    
    const { data: allExpenses = [], isLoading, error } = useQuery({

        queryKey: ['expenses', currentPage, limit, search],

        queryFn: fetchAllExpenses,

        staleTime: 5 * 60 * 1000,


    });

    return {
        allExpenses,
        totalPages: allExpenses.totalPages,
        totalRows: allExpenses.totalRows,
        totalIncom: allExpenses.totalIncome,
        totalExpense: allExpenses.totalExpense,
        isLoading,
        topLeaders: allExpenses.topLeaders,
        error
    };
}

