import { useState, useEffect } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { exampleComponentData } from "../../../data/exampleComponentData";

function Examples() {
  const [data, setData] = useState([]);
  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    setData(exampleComponentData);
  }, []);

  const renderElement = data.map((obj) => {
    return !isAboveMdScreens ? (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        key={obj.id}
      >
        <div className="flex flex-col gap-4 text-start text-white">
          <h2 className="text-3xl font-medium text-headerColor">
            {obj.header1}
          </h2>
          <p className="text-base font-medium">{obj.header2}</p>
          <p className="text-base">{obj.p1}</p>
          <p className="text-base">{obj.p2}</p>
          <p className="text-base">{obj.p3}</p>
        </div>
      </motion.div>
    ) : (
      <div key={obj.id}>
        {obj.id % 2 === 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex items-center gap-36 pb-16 lg:gap-48">
              <div className="flex basis-2/5 flex-col gap-8 text-start">
                <h2 className="text-2xl font-medium text-headerColor lg:text-3xl">
                  {obj.header1}
                </h2>
                <p className="text-base font-medium text-white lg:text-lg">
                  {obj.header2}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p1}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p2}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p3}
                </p>
              </div>
              <div className="max-h-xl max-w-xl basis-3/5 overflow-hidden rounded-md shadow-lg shadow-gray-500">
                <img
                  src={obj.img}
                  alt="Photo"
                  className="aspect-square transition delay-[1ms] md:hover:scale-[1.1]"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            key={obj.id}
          >
            <div className="flex items-center gap-36 pb-16 lg:gap-48">
              <div className="max-h-xl max-w-xl basis-3/5 overflow-hidden rounded-md shadow-lg shadow-gray-500">
                <img
                  src={obj.img}
                  alt="Photo"
                  className="aspect-square transition delay-[1ms] md:hover:scale-[1.1]"
                />
              </div>

              <div className="flex basis-2/5 flex-col gap-8 text-start">
                <h2 className="text-2xl font-medium text-headerColor lg:text-3xl">
                  {obj.header1}
                </h2>
                <p className="text-base font-medium text-white lg:text-lg">
                  {obj.header2}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p1}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p2}
                </p>
                <p className="text-base text-almostWhite lg:text-lg">
                  {obj.p3}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  });

  return (
    <section className="mx-auto flex h-full w-3/5 flex-col gap-10 py-6 md:h-full md:gap-20 md:py-20">
      {renderElement}
    </section>
  );
}

export default Examples;
