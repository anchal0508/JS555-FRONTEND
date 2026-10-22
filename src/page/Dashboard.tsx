import { LucideDownload, LucideRotateCcw } from "lucide-react";
import type React from "react";
import { useState } from "react";

const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState<number>(1);

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
        <div className="w-full pt-10 lg:pt-0 lg:absolute lg:left-10 lg:top-5 flex gap-2 items-center ">
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
        <div className="lg:absolute right-4 lg:text-left text-xl px-2 py-4">
          <div>Available Balance: 321654135413132</div>
          <div>Total Expenses: 321654135413132</div>
        </div>
        <div className="flex flex-col items-center  ">
          <h2 className="text-center text-3xl font-semibold lg:pt-15">
            {requiredExp[display as keyof typeof requiredExp]} Expenses
          </h2>
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
              <tr className="border-b-2">
                <td>1</td>
                <td>05 Aug 2027</td>
                <td>
                  Travelling
                  <div className="text-xs border-t">
                    Description: Faimily Trip{" "}
                  </div>
                </td>
                <td>85080</td>
                <td>1200000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total:</th>
                <th>1200000</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
