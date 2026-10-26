import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
    bg-[url('./Images/bg-wall.jpg')] bg-cover bg-center bg-no-repeat bg-fixed
        w-full  text-slate-100 
        grid grid-rows-[auto_1fr_auto] 
        "
    >
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full flex items-start justify-center p-4 md:items-center md:p-0">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
