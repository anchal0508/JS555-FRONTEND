import { LucideFileText, LucideSearch } from "lucide-react";
import React, { useState } from "react";
import { useExpense } from "../../context/expenseContext";
import { useExpenseHook } from "../../hooks/useExpenseHook";
import { Link } from "react-router-dom";
import PremiumButton from "./PremiumButton";

const LeaderBoard: React.FC = () => {
  const { setLimit, setSearch } = useExpense();
  const { topLeaders } = useExpenseHook();
  const leaderList = topLeaders || [];
  const [isPremium, setIsPremium] = useState<boolean>(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1000);
  };
setIsPremium(true);
  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <div className="h-full">
      {isPremium ? (
        <div className="flex justify-between h-full flex-col items-center">
          <table className=" w-full sm:w-120 text-center border ">
            <caption className="caption-top py-4 text-2xl font-semibold">
              Top Expense Leaders (Current Period)
              <div className="text-sm">Last Updated: 13:32:15 GMT</div>
            </caption>
            <thead className="bg-slate-800 text-amber-400">
              <tr>
                <th>Name</th>
                <th>Max Expense</th>
              </tr>
            </thead>
            <tbody>
              {leaderList &&
                leaderList.map((data: any, index: any) => (
                  <tr key={index}>
                    <th>{data.user.name}</th>
                    <th>{data.totalAmount}</th>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex gap-5 sm:gap-5 flex-col justify-center items-center h-full py-8 sm:py-4 md:py-0">
            <div className="mt-4  flex w-ful relative justify-center">
              <input
                type="search"
                name="searchBar"
                id="searchBar"
                onChange={handleSearch}
                placeholder="Search Here"
                className="  w-80 max-h-fit rounded-2xl px-4 py-1 shadow-2xl shadow-amber-100 ring-1 ring-amber-400 focus:bg-cyan-500/10"
              />

              <LucideSearch className="  m-1 " />
            </div>
            <Link to="/dashboard">
              <button className=" cursor-pointer transform active:translate-y-1 py-1  bg-linear-to-tr from-blue-900/50 to-blue-700/50 shadow-xl hover:shadow-amber-200/20  w-80 rounded-2xl flex justify-center gap-5">
                <span>Download Expense Report</span>
                <span>
                  <LucideFileText />
                </span>
              </button>
            </Link>

            <div>
              <span>Select Number of Rows </span>
              <select
                name="rows"
                id="rows"
                onChange={handleLimitChange}
                className="text-amber-600 px-4 border rounded-md "
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        <PremiumButton />
      )}
    </div>
  );
};

export default LeaderBoard;
