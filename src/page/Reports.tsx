import { LucideDownload, LucideRotateCcw } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useCategoryExpenseHook } from "../hooks/useExpenseHook";
import { useExpenseHook } from "../hooks/useLoginHook";

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

const Reports: React.FC = () => {
  const [display, setDisplay] = useState<number>(1);
  const { monthlyData } = useCategoryExpenseHook();
  const { allExpenses, isLoading, error, totalIncom, totalExpense } =
    useExpenseHook();

  if (isLoading) {
    return <div className="text-center py-4">Loading expenses...</div>;
  }
  if (error) {
    return (
      <div className="text-center text-red-500 py-4">Something went wrong!</div>
    );
  }
  const expenseList: ExpenseData[] = allExpenses.expenses || [];
  console.log(monthlyData.toString());
  const requiredExp = {
    1: "Daily Basis",
    2: "Monthly",
    4: "Yearly",
    7: "All",
  };
  const customBtn =
    "px-5 pb-2 bg-linear-to-tr from-cyan-700/50 to-yellow-100/50 rounded-b-3xl transform active:translate-y-1 active:rounded-t-3xl duration-100  lg:text-2xl";

  const rangeStyle =
    "border rounded-2xl px-4 bg-linear-to-tr from-cyan-700 to-orange-700 mx-2 text-sm lg:text-lg";

  return (
    <div className="min-h-screen w-full text-center">
      {/* -------------------------- Action Buttons -------------------------- */}

      <div className="flex gap-1 lg:gap-5   justify-center pb-2 ">
        <button className={`${customBtn}  `} onClick={() => setDisplay(7)}>
          All
        </button>
        <button className={`${customBtn} `} onClick={() => setDisplay(1)}>
          Daily
        </button>
        <button className={`${customBtn} `} onClick={() => setDisplay(2)}>
          Monthly
        </button>
        <button className={`${customBtn} `} onClick={() => setDisplay(4)}>
          Yearly
        </button>

        <button className={`${customBtn} `}>
          {/*Download button */}
          <LucideDownload />
        </button>
      </div>

      {/* -------------------------- Expense Report --------------------------*/}

      {/* Daily Section */}
      <div className="min-h-screen w-full bg-amber-500/20 backdrop-blur-sm lg:relative ">
        <div className="flex flex-wrap justify-between items-center   px-4 py-2 gap-4">
          <div className="  flex gap-2 items-center   h-fit">
            <span>
              From:{" "}
              <input
                type="date"
                name="fromDate"
                id="fromDate"
                className={`${rangeStyle}`}
              />
            </span>
            <span>
              To:{" "}
              <input
                type="date"
                name="toDate"
                id="toDate"
                className={`${rangeStyle}`}
              />
            </span>
            <span className=" cursor-pointer">
              <LucideRotateCcw />
            </span>
          </div>
          <div className=" flex gap-5 h-fit">
            <span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="salaryRadio" id="salaryRadio" defaultChecked />{" "}
                Expense Only
              </label>
            </span>
            <span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="salaryRadio" id="salaryRadio" />{" "}
                Salary Only
              </label>
            </span>
            <span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="salaryRadio" id="salaryRadio" /> Both
              </label>
            </span>
          </div>

          <div className="text-xl px-2  border h-fit">
            <div className="w-full flex justify-between ">
              <span> Available Balance</span>
              <span>: {totalIncom}</span>
            </div>
            <div className="w-full flex justify-between ">
              <span>Total Expenses</span>
              <span>: {totalExpense}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  ">
          <h2 className="text-center text-3xl font-semibold lg:pt-15">
            {requiredExp[display as keyof typeof requiredExp]} Expenses
          </h2>
          {/* {monthlyData} */}

          <br />
          <hr />
          <table className="w-full lg:max-w-300 border">
            <thead className="bg-cyan-700/50">
              <tr className="border-b-2">
                <th>S.NO.</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {expenseList.map((data, index) => (
                <tr className="border-b-2" key={index}>
                  <td>{index + 1}</td>
                  <td>{formatDate(data.date)}</td>
                  <td>
                    {data.category}
                    <div className="text-xs border-t">
                      Description: {data.description}
                    </div>
                  </td>
                  <td>{data.amount}</td>
                  <td>{data.totalExp}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-cyan-700/50">
              <tr>
                <td colSpan={3}></td>
                <th className="text-right pr-2">Total:</th>
                <th>{totalExpense}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Reports;
