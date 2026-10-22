import type React from "react";

const ProjectOverview: React.FC = () => {
  const fronendTools = [
    "React Hook Form",
    "Zod Validation",
    "Tailwind CSS",
    "RazorPay",
    "Google-Gemini",
    "React Query",
    "Cloudinary CDN",
  ];
  const backendTools = [
    "Zod Validation",
    "RazorPay",
    "Json Web Token (JWT)",
    "CORS",
    "Sequelize",
    "Nodemailer",
    "Docker"
  ];

  return (
    <div>
      <h2 className="text-3xl mb-2 font-semibold text-cyan-400">
        Project Overview
      </h2>

      <div
        className="
      md:grid md:grid-cols-2 md:gap-4
      "
      >
        {/* *************************** Frontend *************************** */}
        <div
          className="
        rounded-md inset-shadow-sm inset-shadow-cyan-600 p-2 flex flex-col items-center
        "
        >
          <div>
            {/* ----------- Heading ----------- */}
            <h3 className="text-2xl text-left font-semibold text-orange-500 mb-4">Frontend</h3>

            {/* Map to display data */}
            {fronendTools.map((data, index) => (
              <div className="w-fit " key={index}>
                {/* ----------- Vertical bar ----------- */}
                <div className="border w-1 h-5 ml-1 shadow-[0_0_20px_rgba(255,200,112,1)]"></div>

                <div className="flex gap-3 items-center">
                  {/* ----------- Bullet point ----------- */}
                  <div className="border w-3 h-3 rounded-xl shadow-[0_0_20px_rgba(255,0,212,1)]"></div>

                  {/* ----------- Text Data Side heading ----------- */}
                  <span> {data}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* *************************** Backend *************************** */}
        <div
          className="
        rounded-md inset-shadow-sm inset-shadow-cyan-600 p-2 flex flex-col items-center
        "
        >
          <div>
            {/* ----------- Heading ----------- */}
            <h3 className="text-2xl text-left font-semibold text-orange-500 mb-4">Backend</h3>

            {/* Map to display data */}
            {backendTools.map((data, index) => (
              <div className="w-fit " key={index}>
                {/* ----------- Vertical bar ----------- */}
                <div className="border w-1 h-5 ml-1 shadow-[0_0_20px_rgba(255,200,112,1)]"></div>

                <div className="flex gap-3 items-center">
                  {/* ----------- Bullet point ----------- */}
                  <div className="border w-3 h-3 rounded-xl shadow-[0_0_20px_rgba(255,0,212,1)]"></div>

                  {/* ----------- Text Data Side heading ----------- */}
                  <span> {data}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
