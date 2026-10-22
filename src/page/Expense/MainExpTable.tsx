import type React from "react";
import { useExpenseHook } from "../../hooks/useExpenseHook";
import { useExpense } from "../../context/expenseContext";

const formatDate = (dateStr: string) => {
  if (!dateStr) return "N/A";
  const dateObj = new Date(dateStr);
  return dateObj
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
};

interface ExpenseData {
  id: number;
  infoOf: string;
  description: string;
  date: string;
  amount: number;
  category: string;
  totalExp: number;
  totalIncome: number;
}
const MainExpTable: React.FC = () => {
  const { limit, currentPage } = useExpense();

  const { allExpenses, isLoading, error } = useExpenseHook();

  if (isLoading) {
    return <div className="text-center py-4">Loading expenses...</div>;
  }

  // 2. Error State Handle Karein
  if (error) {
    return (
      <div className="text-center text-red-500 py-4">Something went wrong!</div>
    );
  }

  const expenseList: ExpenseData[] = allExpenses.expenses || [];

  return (
    <div className=" w-full text-center">
      {/* -------------------------- Expense Data --------------------------*/}

      <div className=" w-full bg-amber-500/20 backdrop-blur-sm ">
        <div className="flex flex-col items-center  ">
          <table className="w-full md:max-w-300 border table-auto md:table-fixed ">
            <caption className="caption-bottom py-4">
              Table: Expense short Preview: ( {limit} per page)
            </caption>
            <thead className="bg-cyan-700/50">
              <tr className="border-b-2">
                <th>S.NO.</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Total Expense</th>
                <th>Total Income</th>
              </tr>
            </thead>
            <tbody>
              {expenseList.map((data, index) => (
                <tr className="border-b-2" key={index}>
                  <td>{(index + 1) + limit * (currentPage - 1)}</td>
                  <td>{formatDate(data.date)}</td>
                  <td>
                    {data.category}
                    <div className="text-xs border-t">
                      Description: {data.description}
                    </div>
                  </td>
                  <td>{data.amount}</td>
                  <td>{data.totalExp}</td>
                  <td>{data.totalIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MainExpTable;
