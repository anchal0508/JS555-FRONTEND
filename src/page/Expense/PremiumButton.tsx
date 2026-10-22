import type React from "react";

const PremiumButton: React.FC = () => {
  return (
    <div className="h-full flex justify-center items-center bg-slate-900/50 inset-shadow-sm inset-shadow-cyan-800">
      <button
        className=" px-6 py-3 font-semibold text-amber-950
             bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-lg shadow-md
              hover:from-amber-500 hover:via-yellow-400 hover:to-amber-600 focus:outline-none 
              focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 active:scale-95 transition-all duration-200 
              uppercase tracking-wider text-sm"
      >
        Buy Premium
      </button>
    </div>
  );
};

export default PremiumButton; 
