import type React from "react";
import { useExpenseHook } from "../../hooks/useExpenseHook";

const ExpenseSummry: React.FC = () => {
  const { isLoading, error, totalIncom, totalExpense } = useExpenseHook();

  if (isLoading) {
    return <div className="text-center py-4">Loading expenses...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-4">Something went wrong!</div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h2 className="w-full py-4 bg-slate-700/40 text-center text-2xl text-amber-400">
        Expense Summary
      </h2>

      <div className="flex gap-5 justify-center h-full w-full items-center text-xl">
        <span className="border px-4 rounded-xl">
          Total Expense: <b>{totalExpense}</b>
        </span>
        <span className="border px-4 rounded-xl">
          Total Income: <b>{totalIncom}</b>
        </span>
      </div>
    </div>
  );
};

export default ExpenseSummry;
