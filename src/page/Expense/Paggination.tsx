import { LucideArrowBigLeft, LucideArrowBigRight } from "lucide-react";
import type React from "react";
import { useExpense } from "../../context/expenseContext";
import { useExpenseHook } from "../../hooks/useExpenseHook";

const Paggination: React.FC = () => {
  const { totalPages } = useExpenseHook();
  const { currentPage, nextpage, prevPage } = useExpense();
  const buttonStyle =
    "from-amber-500/50 to-purple-900/30 px-6 sm:px-20 py-3 rounded-2xl transform active:translate-y-1 cursor-pointer";
  return (
    <div className="flex justify-between items-center">
      <button
        className={`bg-linear-to-r ${buttonStyle} `}
        onClick={() => prevPage()}
      >
        <LucideArrowBigLeft />
      </button>
      <div>
        Page: {currentPage} | {totalPages}
      </div>
      <button
        className={`bg-linear-to-l ${buttonStyle}`}
        onClick={() => currentPage < totalPages && nextpage()}
      >
        <LucideArrowBigRight />
      </button>
    </div>
  );
};
export default Paggination;
