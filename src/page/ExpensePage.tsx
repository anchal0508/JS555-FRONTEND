import type React from "react";
import ExpForm from "./Expense/ExpForm";
import Paggination from "./Expense/Paggination";
import LeaderBoard from "./Expense/LeaderBoard";
import MainExpTable from "./Expense/MainExpTable";
import ExpenseSummry from "./Expense/ExpenseSummry";
import { ExpenseProvider } from "../context/expenseContext";

const ExpensePage: React.FC = () => {
  return (
    <div className=" min-h-screen w-full flex items-center justify-center p-1 sm:p-6 md:p-8">
      <ExpenseProvider>
      <div
        className="
      grid grid-cols-1 lg:grid-cols-2 gap-4
      w-full max-w-6xl 
      p-2 md:p-2 rounded-t-3xl 
      "
      >
        <div className=" col-span-1 row-span-1 md:row-span-2 border rounded-xl p-2 backdrop-blur-sm">
          <ExpForm />
        </div>

        <div className="col-span-1 row-span-1 border rounded-xl p-2 backdrop-blur-sm max-h-50">
          <ExpenseSummry />
        </div>
        <div className="col-span-1 row-span-1 border rounded-xl p-2 backdrop-blur-sm ">
          <LeaderBoard />
        </div>

        <div className="col-span-1 lg:col-span-2 border rounded-xl p-2 backdrop-blur-sm">
          <MainExpTable />
        </div>

        <div className="col-span-1 lg:col-span-2 border rounded-xl p-2 backdrop-blur-sm">
          <Paggination />
        </div>
      </div>
      </ExpenseProvider>
    </div>
  );
};

export default ExpensePage;
