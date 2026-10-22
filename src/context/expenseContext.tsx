import React, { createContext, useContext, useState } from "react";

interface ExpenseContextType {
  nextpage: () => void;
  prevPage: () => void;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  search: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ExpContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [limit, setLimit] = useState<number>(5);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  

  const nextpage = () => {
    setCurrentPage((previous) => previous + 1);

  };
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const expContextData: ExpenseContextType = {
    nextpage,
    prevPage,
    setLimit,
    limit,
    currentPage,
    setCurrentPage,
    search,
    setSearch,
  };

  return (
    <ExpContext.Provider value={expContextData}>{children}</ExpContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpContext);
  if (!context) {
    throw new Error("Error: exp Context  ");
  }
  return context;
};
