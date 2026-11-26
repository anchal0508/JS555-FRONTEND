import type React from "react";
import API from "../axios";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const fetchCurrentUser = async () => {
  const response = await API.get("/users/current-user");
  return response.data;
};

const OpenRoutes: React.FC = () => {
    const location = useLocation();
    const hasSession = localStorage.getItem("hasSession") === "true";
  const {
    data: user,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchCurrentUser,
    enabled: hasSession,
    staleTime: 16 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (!hasSession) {
    return <Outlet />;
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
        <Loader2 className="animate-spin text-indigo-500 mb-2" size={40} />
        <p className="text-lg font-semibold tracking-wide">
          Verifying Session...
        </p>
      </div>
    );
  }
   if (isError || !user) {
    localStorage.removeItem("hasSession");
    return <Outlet />;
  }
    return <Navigate to='/' state={{from: location}} replace={true} />

};


export default OpenRoutes;