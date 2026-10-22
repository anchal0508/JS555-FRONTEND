import type React from "react";
import API from "../axios";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const fetchCurrentUser = async () => {
  const response = await API.get("/users/current-user");
  return response.data;
};
const ProtectedRoutes: React.FC = () => {
  const location = useLocation();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchCurrentUser,

    // saves bandwidth and server load
    staleTime: 16 * 60 * 1000, // for 15 minutes data will be refreshhhhh...
    gcTime: 30 * 60 * 1000, // Keep data in the memory for 30 mins
    refetchOnWindowFocus: false, // do not call api on changing tab again and again for validation
    refetchOnReconnect: false, // do not call api on reconnect Internet
    retry: false, // Do not call API (retry) again & again , if auth failed
  });
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
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
