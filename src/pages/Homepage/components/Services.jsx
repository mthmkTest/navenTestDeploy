import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../../data/servicesData";

function Services() {
  const renderCard = servicesData.map((cardData) => {
    return (
      <ServicesCard
        key={cardData.id}
        icon={cardData.id}
        header={cardData.header}
        paragraph={cardData.paragraph}
      />
    );
  });

  return (
    <section className="mx-auto py-8 text-white md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col"
      >
        <h1 className="mx-10 mb-8 place-self-center text-2xl font-bold uppercase sm:text-3xl md:mb-16 md:text-4xl lg:mb-40 lg:text-5xl">
          Digital services for your company
        </h1>
      </motion.div>

      <div className="lg:gap-18 mx-auto flex w-3/5 flex-col items-center gap-8 text-start md:gap-12 md:text-center lg:flex-row lg:justify-center xl:gap-36">
        {renderCard}
      </div>
    </section>
  );
}

export default Services;
