
import pic3 from "../../../assets/images/pic3.png";
import pic4 from "../../../assets/images/pic4.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

function OurMissionPage() {
  const { t } = useTranslation();
  return (
    <motion.div className="md:flex md:flex-col md:items-center md:justify-center md:h-screen md:w-screen bg-[#eef4fa]" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}>
      <motion.div className="diva md:flex md:h-3/6 justify-center md:gap-24" variants={cardVariants}>
        <div className="text-center md:text-left flex flex-col gap-6 justify-center p-4 md:w-2/6">
          <h5 className="font-normal ">{t("abt-us-mission")}</h5>
          <h1 className="text-5xl font-semibold">{t("abt-us-mis-title")}</h1>
          <p className="text-base">{t("abt-us-mis-desc")}</p>
        </div>
        <div className="cover p-12 no-repeat md:w-2/6 py-10 ">
          <img
            src={pic3}
            className="w-full h-[250px] md:max-h-full md:h-full md:w-[500px] object-cover object-center"
            alt="pic3"
          />
        </div>
      </motion.div>

      <motion.div className="divb md:flex h-3/6 justify-center md:gap-24" variants={cardVariants}>
        <div className="text-center md:text-left flex flex-col gap-6 justify-center p-4 md:w-2/6 md:order-2">
          <h5 className="font-normal ">{t("abt-us-vision")}</h5>
          <h1 className="text-5xl font-semibold">{ t("abt-us-vis-title")}</h1>
          <p className="text-base">{t("abt-us-vis-desc")}</p>
        </div>
        <div className="cover p-12 no-repeat md:w-2/6 py-10 md:order-1">
          <img
            src={pic4}
            className="w-full h-[250px] md:max-h-full md:w-[500px] m-auto object-cover object-center"
            alt="pic4"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
export default OurMissionPage;
