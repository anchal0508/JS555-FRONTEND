import { useQuery } from "@tanstack/react-query";
import type React from "react";
import API from "../axios";
const fetchCurrentUser = async () => {
  const response = await API.get('/users/current-user');
  console.log(response.data,'-----------------------');
  return response.data;
}
const UserInfo: React.FC = () => {

  const { data: authUser } = useQuery({
      queryKey: ["authUser"],
      queryFn: fetchCurrentUser,
      enabled: true, // Hamesha cache se ya API se synced rahega
      staleTime: 16 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: false,
    });
  
  return (
    <article className="w-full min-h-100 max-w-300 grid grid-rows-[auto_1fr_auto] backdrop-blur-sm">
      {/* Header section with profile photo and basic info */}
      <header className="flex items-baseline-last inset-shadow-sm inset-shadow-indigo-500/50">
        <figure className="user-avatar">
          <img
            src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg"
            width={100}
            alt="User profile"
          />
        </figure>
        <div className="user-meta">
          <h1>{authUser.userInfo.name}</h1>
          <p>{authUser.userInfo.email}</p>
        </div>
      </header>

      {/* Main body for detailed user information */}
      <section className="lg:ml-100">
        <h2>Account Details</h2>
        <div>ID Number: {authUser.userInfo.id}</div>
        <div>Name: {authUser.userInfo.name}</div>
        <div>Email: {authUser.userInfo.email}</div>
        <div>Role: {authUser.userInfo.role}</div>
        {/* Detailed content goes here */}
      </section>

      {/* Analytics or financial data section */}
      <section className="inset-shadow-sm inset-shadow-indigo-500/50 px-4">
        <h2>Expense Overview</h2>
        <div>Total Income</div>
        <div>Top Expense</div>
        <div>Lowest Expense</div>
        <div className="backdrop-blur-sm inset-shadow-sm inset-shadow-indigo-500 p-4">
          <h2 className="text-center text-2xl">Category Wise Report</h2>
          <br />
          <div className="flex gap-5 w-full flex-wrap justify-center">
            <div className="border w-1/2 sm:w-1/4 md:w-1/5  px-2 py-2 rounded-xl inset-shadow-sm inset-shadow-indigo-500/50">Food</div>
            <div className="border w-1/2 sm:w-1/4 md:w-1/5  px-2 py-2 rounded-xl">Travel</div>
            <div className="border w-1/2 sm:w-1/4 md:w-1/5  px-2 py-2 rounded-xl">Entertainment</div>
            <div className="border w-1/2 sm:w-1/4 md:w-1/5  px-2 py-2 rounded-xl">Bills</div>
            <div className="border w-1/2 sm:w-1/4 md:w-1/5  px-2 py-2 rounded-xl">Other</div>
          </div>
        </div>
        {/* Expense data or graph component goes here */}
      </section>
    </article>
  );
};

export default UserInfo;
