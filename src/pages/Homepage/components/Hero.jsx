import useMediaQuery from "../../../hooks/useMediaQuery";
import { motion } from "framer-motion";

import heroImg from "../../../assets/imgs/hero.jpg";

function Hero() {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <section className="mx-auto w-3/4 gap-20 py-6 xs:h-full md:flex md:items-center md:justify-between lg:h-screen">
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboveLargeScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="overflow-hidden rounded-md shadow-3xl shadow-gray-700">
              <img
                className="z-10 w-full max-w-[400px] transition duration-500 md:max-w-[550px]"
                src={heroImg}
                alt="Photo of a guy working on a laptop"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="overflow-hidden rounded-md shadow-xl shadow-gray-700">
              <img
                className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                src={heroImg}
                alt="Photo of a guy working on a laptop"
              />
            </div>
          </motion.div>
        )}
      </div>

      <div className="z-30 mt-12 basis-2/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
            <p className="z-10 text-center font-cinzel text-lg text-lighterMainText md:text-start md:text-2xl">
              Name Nickname Surname
            </p>
            <div className="gap-0.25 flex flex-col md:gap-1 lg:gap-2">
              <p className="mb-1 text-center text-3xl md:text-start md:text-5xl xl:text-6xl">
                <span
                  className={`cursor-default bg-gradient-to-r from-gray-300 to-mainColorGradientTint2  bg-[length:0%_1px] bg-left-bottom bg-no-repeat text-gray-400 transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white `}
                >
                  Copywriter
                </span>
              </p>
              <p className="mb-1 text-center text-3xl md:text-start md:text-5xl xl:text-6xl">
                <span
                  className={`cursor-default bg-gradient-to-r from-gray-300 to-mainColorGradientTint2  bg-[length:0%_1px] bg-left-bottom bg-no-repeat text-gray-400 transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white `}
                >
                  Marketer
                </span>
              </p>
              <p className="mb-3 text-center text-3xl md:text-start md:text-5xl xl:text-6xl">
                <span
                  className={`cursor-default bg-gradient-to-r from-gray-300 to-mainColorGradientTint2  bg-[length:0%_1px] bg-left-bottom bg-no-repeat text-gray-400 transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white `}
                >
                  UX Designer
                </span>
              </p>
            </div>
            <p className="text-center text-sm text-gray-200 md:text-start md:text-base lg:text-lg">
              Professional content, web design and marketing for your company.
              Reach new customers and skyrocket your sales.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
