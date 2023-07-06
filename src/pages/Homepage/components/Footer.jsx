import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

function Footer() {
  const myEmail = "mthw.miszczak@gmail.com";

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex flex-col items-center gap-4 py-8 text-white md:gap-6 md:py-12 lg:gap-16 lg:py-16"
    >
      <h2 className="text-xl font-medium uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl lg:font-semibold xl:text-5xl">
        Outrun your competition
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: 50, y: -50 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        className="lg:py-18 flex flex-col items-center gap-2 py-8 text-white md:gap-4 md:py-8 lg:gap-12"
      >
        <button className="text-md rounded-lg border border-borderLightestMain bg-mainColor p-4 font-bold uppercase shadow-lg shadow-gray-700 transition delay-[10ms] hover:scale-[0.95] hover:bg-opacity-40 md:text-xl lg:text-2xl">
          Go to platform
        </button>
        <h3 className="text-xl uppercase text-textLightestMain md:text-2xl lg:text-3xl">
          Stay in touch
        </h3>
        <div className="flex gap-2 md:gap-6 lg:gap-12">
          <a
            href="https://github.com/MateuszMiszczak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl lg:text-6xl xl:text-7xl"
          >
            <FaFacebookSquare className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
          </a>
          <a
            href="https://www.linkedin.com/in/mateusz-miszczak-a28571277/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl lg:text-6xl xl:text-7xl"
          >
            <FaLinkedin className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
          </a>
          <a
            href={`mailto:${myEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl lg:text-6xl xl:text-7xl"
          >
            <SiGmail className="transition delay-[10ms] hover:scale-[0.95] hover:opacity-60" />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
