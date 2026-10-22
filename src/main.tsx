import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login.tsx";
import Signup from "./page/Signup.tsx";
import Dashboard from "./page/Dashboard.tsx";
import ForgotPassword from "./page/ForgotPassword.tsx";
import UserInfo from "./page/UserInfo.tsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OpenRoutes from "./routes/OpenRoutes.tsx";
import Portfolio from "./page/Portfolio.tsx";
import Gallery from "./page/Gallery.tsx";
import ExpensePage from "./page/ExpensePage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route element={<ProtectedRoutes />}>
            
              <Route path="/" element={<ExpensePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-profile" element={<UserInfo />} />
            </Route>
            <Route element={<OpenRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
              <Route path="/profile" element={<Portfolio />} />
              <Route path="/gallery" element={<Gallery />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
