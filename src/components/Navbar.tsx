import { Link, useNavigate } from "react-router-dom";
import type React from "react";
import logo from "../Images/logo.png";
import { useState } from "react";
import {
  LucideCircleUser,
  LucideCircleX,
  LucideMenu,
  SquarePower,
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import API from "../axios";

interface NavLinkItem {
  title: string | React.ReactNode;
  path: string;
}

const fetchCurrentUser = async () => {
  const response = await API.get("/users/current-user");
  return response.data;
};

const Navbar: React.FC = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchCurrentUser,
    enabled: true, // Hamesha cache se ya API se synced rahega
    staleTime: 16 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: false,
  });

  const isLoggedIn = !!authUser;
  const handleLogout = async () => {
    try {
      await API.post("/users/logout");
      console.log("Logout API : ");
      navigate("/login");
      setDisplayNav(false);
    } catch (error) {
      console.log("Logout API Failed: ", error);
    } finally {
      queryClient.removeQueries({ queryKey: ["authUser"] });
    }
  };

  const commonLinks : NavLinkItem[] = [
    { title: "Portfolio", path: "/profile" },
    { title: "Gallery", path: "/gallery" },
    
  ]
  const conditionallinks: NavLinkItem[] = isLoggedIn
    ? [
        { title: "Expense", path: "/" },
        { title: "Report", path: "/dashboard" },
        {
          title: (
            <span className="flex flex-col items-center">
              <LucideCircleUser size={35} />
              <span className="text-sm">{authUser.userInfo.name}</span>
            </span>
          ),
          path: "/user-profile",
        },
      ]
    : [
        { title: "LogIn", path: "/login" },
        { title: "SignUp", path: "/signup" },
      ];

      const navlinks: NavLinkItem[] = [...commonLinks, ...conditionallinks];

  return (
    <nav className="relative max-w-300 ml-auto mr-auto">
      <div className="  w-full items-center flex justify-between  px-4   bg-blue-950/50 ">
        {/* logo */}
        <div className="">
          <img src={logo} className="w-35" alt="logo" />
        </div>

        {/* Menu option button */}
        <div className="block sm:hidden relative z-50  ">
          {displayNav ? (
            <LucideCircleX
              onClick={() => setDisplayNav(!displayNav)}
              size={45}
            />
          ) : (
            <LucideMenu onClick={() => setDisplayNav(!displayNav)} size={45} />
          )}
        </div>

        {/* desktop navigation bar*/}
        <div className="hidden sm:flex pr-40 sm:items-center">
          {navlinks.map((data, index) => (
            <Link key={index} className=" link-style  " to={data.path}>
              {data.title}
            </Link>
          ))}

          {/* Desktop logout Button */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="flex text-red-500 pl-5 flex-col items-center cursor-pointer"
            >
              <SquarePower />

              <span className="text-sm ">Lougout</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile view navigation */}
      <div
        className={`${displayNav ? "block" : "hidden"} sm:hidden w-full space-y-10 bg-slate-600 z-40 transition-all fixed h-screen `}
      >
        {navlinks.map((items, index) => (
          <Link
            key={index}
            className="link-style block w-full text-center hover:bg-slate-800 "
            to={items.path}
            onClick={() => setDisplayNav(false)}
          >
            {items.title}
          </Link>
        ))}

        {/* Mobile Logout Button */}
        {isLoggedIn && (
          <button onClick={handleLogout} className="flex flex-row">
            <span>
              <SquarePower />
            </span>
            <span>Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
