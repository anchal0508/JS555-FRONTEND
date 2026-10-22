import type React from "react";

const Skills: React.FC = () => {
  const boxStyle =
    "rounded-md px-2 py-3 inset-shadow-sm inset-shadow-green-700 flex justify-center items-center";
  return (
    <div>
      <h2 className="text-3xl mb-2 font-semibold text-cyan-400">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-4  ">
        <div className={`${boxStyle}`}>Node.js</div>
        <div className={`${boxStyle}`}>React.js</div>
        <div className={`${boxStyle}`}>Python</div>
        <div className={`${boxStyle}`}> Java</div>
        <div className={`${boxStyle}`}> Embedded C</div>
        <div className={`${boxStyle}`}> C++</div>
        <div className={`${boxStyle}`}> Embedded Systems & IoT</div>
        <div className={`${boxStyle}`}> PCB Designing</div>
        <div className={`${boxStyle} bg-amber-300/20 text-cyan-600`} > View more...</div>
      </div>
    </div>
  );
};

export default Skills;
