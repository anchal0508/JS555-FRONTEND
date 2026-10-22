import type React from "react";
import ContactInformation from "./portfolioComponents/ContactInformation";
import Skills from "./portfolioComponents/Skills";
import ProfileInfo from "./portfolioComponents/ProfileInfo";
import ProjectOverview from "./portfolioComponents/ProjectOverview";
import MomentosGalary from "./portfolioComponents/MomentosGalary";
import WorkshopImageGalary from "./portfolioComponents/WorkshopImageGalary";

const Portfolio: React.FC = () => {
  const gridstyle =
    " ml-auto mr-auto flex  flex-col gap-2 backdrop-blur-sm w-full p-3 inset-shadow-sm inset-shadow-amber-200 rounded-2xl";
  return (
    <div
      className="   
      max-w-300
    w-full text-center grid grid-cols-1 gap-5
    md:grid-cols-2
    lg:grid-cols-4
    "
    >
      <div
        className={`
      ${gridstyle} 
      md:col-span-2
      lg:col-span-4
      `}
      >
        <ProfileInfo />
      </div>

      <div
        className={`
      ${gridstyle} 
      items-center justify-center
       md:col-span-1
       lg:col-span-1
       `}
      >
        <ContactInformation />
      </div>

      <div
        className={`
        ${gridstyle}
        md:col-span-1
        lg:col-span-3
        `}
      >
        <Skills />
      </div>
      <div
        className={`
        ${gridstyle}
        md:col-span-2
        lg:col-span-4
        `}
      >
        <ProjectOverview />
      </div>
      <div
        className={`
        ${gridstyle} h-min-50
        md:col-span-2
        lg:col-span-4
        `}
      >
        <MomentosGalary />
      </div>
      <div
        className={`
        ${gridstyle}
        md:col-span-2
        lg:col-span-4
        `}
      >
        <WorkshopImageGalary />
      </div>
    </div>
  );
};

export default Portfolio;
