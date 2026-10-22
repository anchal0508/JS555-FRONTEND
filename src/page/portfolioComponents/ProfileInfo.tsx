import { Download } from "lucide-react";
import React, { useState } from "react";  
import { FaGithub } from "react-icons/fa";

const ProfileInfo: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="sm:grid grid-cols-2 sm:gap-3">
      <h1
        className="text-3xl mb-3 pb-2 rounded-2xl shadow-2xl shadow-orange-300/50
      sm:col-span-2 sm:grid-rows-1 sm:w-full
      lg:col-span-1 
      "
      >
        Hi, I'm <br />
        Anchal Koshta
      </h1>

      <div
        className={`rounded-2xl overflow-hidden sm:col-span-1 sm:row-span-2 lg:col-start-1 lg:row-start-1 lg:row-span-3
        ${!isLoaded ? "animate-pulse bg-gray-300 h-75 w-full" : ""}`}
      >
        <img
          src="https://res.cloudinary.com/yj60kujr/image/upload/v1785158360/ProfileImage2-CsU-ri0R_pbun3i.jpg"
          alt="Anchal Koshta"
          className={`h-full w-full object-cover rounded-2xl transition-opacity duration-500
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div
        className=" text-base/5 mb-2 
      sm:col-span-1 sm:text-2xl sm:flex sm:justify-center sm:items-center
      "
      >
        Former Technical Lead & Embedded Trainer at Abcrob Technologies Private
        Limited
      </div>

      <div
        className="
      bg-amber-400/20 rounded-2xl p-2
      sm:flex sm:justify-center sm:items-center sm:flex-col sm:text-md
      "
      >
        <div
          className="
        text-sm sm:bg-amber-400/20 sm:rounded-2xl sm:p-1
        sm:text-lg
        lg:text-2xl
        "
        >
          Now transitioning into Full-Stack Web Development. I specialize in
          building modern, scalable apps using React.js & Express.js and am
          actively seeking an internship to contribute and grow with an IT team.
        </div>

        <div className="w-full flex justify-evenly mt-2 items-center">
          <button
            className="flex gap-2 border py-2 px-2 rounded-lg 
        transition active:translate-y-1 bg-blue-700  ring-0"
          >
            <Download />
            Resume
          </button>

          <button
            className="flex gap-2 border py-2 px-2 rounded-lg 
        transition active:translate-y-1 bg-orange-700 ring-0 items-center"
          >
            <FaGithub />
            Github Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
