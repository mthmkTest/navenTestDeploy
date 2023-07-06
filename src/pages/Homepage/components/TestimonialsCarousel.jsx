import { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs";
import { testimonialsData } from "../../../data/testimonialsData";

import { motion } from "framer-motion";

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="group relative mx-auto min-w-[300px] max-w-[300px] rounded-lg border border-borderLightestMain bg-gradient-to-br from-cardServiceBg1 to-cardServiceBg2 text-white sm:min-w-[600px] sm:max-w-[600px] lg:min-w-[900px] lg:max-w-[900px]">
        <div className="flex h-[30vh] flex-col items-center justify-center gap-2 rounded-2xl bg-cover bg-center duration-500 sm:h-[300] md:gap-6 lg:gap-8">
          <h2 className="border-b border-borderLightestMain text-center font-cinzel text-2xl font-medium md:text-3xl lg:text-4xl">
            {testimonialsData[currentIndex].header}
          </h2>
          <div className="mx-auto max-w-[80%] px-4">
            <p className="place-self-center text-center text-sm md:text-base">
              {testimonialsData[currentIndex].paragraph}
            </p>
          </div>
        </div>
        <div className="top-4 flex justify-center py-2">
          {testimonialsData.map((testimonial, slideIndex) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`cursor-pointer text-2xl md:text-3xl lg:text-4xl ${
                currentIndex === slideIndex ? "text-mainColor" : "text-gray-400"
              }`}
            >
              <BsDot />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialsCarousel;
