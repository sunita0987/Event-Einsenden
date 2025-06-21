import React, { useState } from "react";
const slides = [
  {
    id: 1,
    src: "../images/image1.png",
  },
  {
    id: 2,
    src: "../images/image2.png",
  },
  {
    id: 3,
    src: "../images/images3.png",
  },
];
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <div className="flex justify-center items-center bg-[#0a0a23] min-h-screen text-white px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold ff-Oswald w-[530px] font-regular">
            Your world is the game board, and your mind is at stake.
          </h1>
          <p className=" w-[400px] mt-10 ff-Open Sans">
            At the heart of Ingress is a desire to bring people together through
            exploration and teamwork.
          </p>
        </div>
        <div className="relative w-full flex items-center justify-center ">
          <div className="w-[300px] h-[400px] overflow-hidden rounded-md">
            <img
              src={slides[current].src}
              alt={`slide-${current}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 ">
            <button onClick={prevSlide}>&larr;</button>
            <button onClick={nextSlide}>&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
