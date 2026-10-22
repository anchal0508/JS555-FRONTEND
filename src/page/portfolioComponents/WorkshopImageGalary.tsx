import React, { useState } from "react";
import { Link } from "react-router-dom";

const imagesData = [
  {
    id: 0,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785256214/IMG_20180222_122114665_cw8gyk.jpg",
    alt: "Ernakulam Workshop",
    wrapperClass: "col-span-1 row-span-1",
    imgClass: "lg:col-span-1"
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785323685/places_ujmvys.jpg",
    alt: "Workshop and visits in India",
    wrapperClass: "col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-lg shadow-cyan-400/50 lg:col-span-1 lg:row-span-3 lg:row-start-1 lg:col-start-3",
    imgClass: "scale-180 -translate-y-5 rounded-3xl lg:scale-150"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785256247/DSC_9084_ehr5a5.jpg",
    alt: "SIOM Collage workshop Inauguration",
    wrapperClass: "col-span-1 row-span-1 lg:row-start-2 lg:col-start-1",
    imgClass: ""
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785256217/IMG_20200119_163400_g5njuy.jpg",
    alt: "Certificates",
    wrapperClass: "col-span-1 row-span-1 hidden lg:row-start-3 lg:col-start-1 lg:block",
    imgClass: ""
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785315499/copy_of_img-20190814-wa0000_m3l0tf.jpg",
    alt: "News Paper",
    wrapperClass: "col-span-1 row-span-1 hidden lg:row-start-1 lg:col-start-2 lg:block",
    imgClass: ""
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785256210/IMG_20180118_094250857_lru7m1.jpg",
    alt: "Presentation",
    wrapperClass: "col-span-1 row-span-1 hidden lg:row-start-2 lg:col-start-2 lg:block",
    imgClass: ""
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/yj60kujr/image/upload/v1785256204/IMG-20220928-WA0027_wxropb.jpg",
    alt: "PCB Designing",
    wrapperClass: "col-span-1 row-span-1 hidden lg:row-start-3 lg:col-start-2 lg:block",
    imgClass: ""
  }
];

const WorkshopImageGalary: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <h2 className="text-3xl mb-2 font-semibold text-cyan-400">
        Workshop Image Galary
      </h2>
      <div className="grid grid-cols-2 gap-3 my-5 lg:grid-cols-3 lg:w-3/5 lg:ml-auto lg:mr-auto md:w-4/5 md:ml-auto md:mr-auto">
        
        {imagesData.map((img) => {
          const isImageLoaded = loadedImages[img.id];

          return (
            <div
              key={img.id}
              className={`${img.wrapperClass} rounded-2xl overflow-hidden
              ${!isImageLoaded ? "animate-pulse bg-slate-800 min-h-37.5" : ""}`}
            >
              <img
                className={`w-full h-full object-cover rounded-2xl shadow-lg shadow-cyan-400/50 transition-opacity duration-500 ${img.imgClass}
                ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
                src={img.src}
                alt={img.alt}
                onLoad={() => handleImageLoad(img.id)}
              />
            </div>
          );
        })}

      </div>
      <Link to="/gallery">
        <button className="bg-blue-900 px-4 py-2 m-2 rounded-md text-white font-medium hover:bg-blue-800 transition">
          Click to view more
        </button>
      </Link>
    </div>
  );
};

export default WorkshopImageGalary;
