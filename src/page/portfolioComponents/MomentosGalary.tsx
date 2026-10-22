import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import type React from "react";
import { useState } from "react";

const MomentosGalary: React.FC = () => {
 const [activeIndex, setActiveIndex] = useState<number>(0);

  const imagesList = [
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893959/Ambition_Ganesh_ji_ouj4c7.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893960/KLN_Minakshi_Mata_kgv4x5.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893960/RadhaKrishna_mkyx5t.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893960/VB_s0qe5m.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893960/DEV_pen_Stand_t5umar.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893954/DEV_Paper_waight_v4b54r.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791918747/Manipal_mqlopw.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893953/Laughing_Buddha_wcsimg.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791893953/buddha_lfgdf7.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791918818/Clock_SIOM_hnsl2h.png",
    "https://res.cloudinary.com/yj60kujr/image/upload/v1791900088/SKIT_Jaipur_xw0rem.png",
  ];

  const ShiftRight = () => {
    if (activeIndex < imagesList.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      setActiveIndex(0);  
    }
  };

  const ShiftLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else {
      setActiveIndex(imagesList.length - 1);  
  };

  }
  return (
     <div className="h-72 relative overflow-hidden flex flex-col justify-center items-center w-full   text-white">
      <h2 className="text-xl font-bold mb-6">Momento Gallery</h2>

      {/* Main Outer Box */}
      <div className="relative w-full flex justify-center items-center h-44">
        
        {/* Slider Track: CSS variables ka use karke width ko screen size ke according manage kiya hai */}
        <div 
          className="flex gap-6 transition-transform duration-500 ease-in-out absolute
                     [--card-w:120px] md:[--card-w:140px] lg:[--card-w:160px]"
          style={{
            // Ek baar me sirf ek photo ki width + gap (24px yani 1.5rem) jitna hi khiskega
            transform: `translateX(calc(-${activeIndex} * (var(--card-w) + 1.5rem)))`,
            left: "50%",
            // Active photo ko barabar center me rakhne ke liye left margin ka use kiya hai
            marginLeft: `calc(-1 * (var(--card-w) / 2))`, 
          }}
        >
          {imagesList.map((url, index) => {
            const isActive = activeIndex === index;
            const isNext = activeIndex + 1 === index;
            const isPrev = activeIndex - 1 === index;

            return (
              <div
                key={index}
                className="flex justify-center items-center shrink-0 
                           w-(--card-w) h-32 md:h-36 lg:h-40
                           transition-all duration-500 ease-in-out"
                style={{
                  // 3D rotation jo active ke left/right wali photo ko tilt karega
                  transform: isActive 
                    ? "scale(1.25)" 
                    : isNext 
                    ? "scale(0.9) rotateY(-30deg)" 
                    : isPrev 
                    ? "scale(0.9) rotateY(30deg)" 
                    : "scale(0.8)",
                  opacity: isActive ? 1 : 0.4,
                  perspective: "1000px"
                }}
              >
                <img
                  src={url}
                  alt={`Momento ${index}`}
                  className="w-full h-full object-contain rounded-lg shadow-2xl bg-slate-800/50 p-1"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={ShiftLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full z-20"
      >
        <CircleChevronLeft size={36} className="text-yellow-400" />
      </button>
      <button
        onClick={ShiftRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full z-20"
      >
        <CircleChevronRight size={36} className="text-yellow-400" />
      </button>
    </div>
  );
};

export default MomentosGalary;
