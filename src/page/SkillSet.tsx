import type React from "react";

const SkillSet: React.FC = () => {
  const videoLink = [
    "uae_Mq9z5WQ",
    "r1uax1IpxUo",
    "n05rqcQ9vJo",
    "pV6miVz1WF8",
    "0XqgKZrzya8",
    "tVEdRTbYstk",
    "aDrHpzYKKDw",
    "rXzcfDCRVPA",
    "5SuFMkWo2mk",
    "WN5nZF8HXAw",
    "_yuOYaPe33w",
    "HsDQ9JcZ7WM",
    "BpRAYU28k44",
    "JPegjQYqq3Q",
    "8y5L1vrockI",
    "nQ3M1dHgwhM",
    "C1isUgf1IgA",
    "LksPqkpLN8k",
    "xifAzQ2Uno0",
    "A4fhCxknPXE", // 8051 Microcontroller delay
    "WxA9ei-Vrn4",
    "15ICQ71knKw",
    "DaGzDdLMtyE",
  ];
  const currentSkills = [
    "Node.js",
    "Express.js",
    "React.js",
    "MongoDB.js",
    "SQL.js",
    "MySQL.js",
    "Postgress.js",
    "NoSQL.js",
    "Java",
  ];
  const archivedSkills = [
    "Embedded Systems (Using Raspberry-PI, Arduino, AVR, ARM, 8051 & PIC Microcontroller)",
    "PCB designing",
    "IoT workshops across India (Wi-Fi module)",
    "PHP",
    "Python",
    "C and Embedded C",
    "C++",
    "Embroidary Designing",
  ];

  return (
    <div>
      {/* Current Skills */}
      <div>
        <h1 className= "mt-2 text-center w-full bg-amber-600 px-2 text-2xl font-semibold">Current Skills</h1>
        <div>
          {currentSkills.map((skill, index) => (
            <div>
              {index + 1}: {skill}
            </div>
          ))}
        </div>
      </div>
      {/* Archived Skills */}
      <div >
        <h1 className="mt-2 text-center w-full bg-amber-600 px-2 text-2xl font-semibold">Archived Skills</h1>
        <div>
          {archivedSkills.map((skill, index) => (
            <div>
              {index + 1}: {skill}
            </div>
          ))}
        </div>
      </div>

      <div  >
        <h1 className="mt-2 text-center w-full bg-amber-600 px-2 text-2xl font-semibold">Videos of previous work</h1>
        <div className="  grid grid-cols-3 gap-2 flex-wrap">
          {videoLink.map((id, index) => (
            <iframe
            key={index}
            loading="lazy"
              width="350"
              height="250"
              src={`https://www.youtube.com/embed/${id}`}
              title="Robot | Motor IC  | l293d | Autonomous bot | Robot Car | Atmega16 microcontroller | AVR | #abcrob"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
