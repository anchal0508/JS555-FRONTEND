import { Mail, Phone } from "lucide-react";
import type React from "react";

const ContactInformation: React.FC = () => {
  return (
    <div
      className=" 
    text-center w-full grid grid-cols-2 gap-2
    sm:text-lg
    lg:flex lg:flex-col
    "
    >
      <div
        className="
      flex flex-col items-center text-sm 
      sm:text-lg
      lg:flex-row lg:justify-center lg:gap-2 
      "
      >
        <Mail /> anchalkoshta5@gmail.com
      </div>
      <div
        className="
      flex flex-col items-center text-sm
      sm:text-lg
      lg:flex-row lg:justify-center lg:gap-2
      "
      >
        <Phone /> +91-95840-62121
      </div>

      <div className=" mt-2 ml-auto mr-auto cursor-pointer transform duration-100 active:translate-y-1 w-fit px-4 py-2 rounded-2xl bg-blue-700 text-white font-bold">
        <a href="https://www.linkedin.com/in/anchalkoshta555">Linkedin</a>
      </div>
      <div className="mt-2 ml-auto mr-auto cursor-pointer transform duration-100 active:translate-y-1 w-fit px-4 py-2 rounded-2xl bg-red-700 text-white font-bold">
        <a href="https://www.youtube.com/abcrob">YouTube</a>
      </div>
    </div>
  );
};

export default ContactInformation;
