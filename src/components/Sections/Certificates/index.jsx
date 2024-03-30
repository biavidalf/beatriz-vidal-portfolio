import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

import { SectionTitle, TextHighlight } from "../../Text";
import { BlogCard } from "../../BlogCard";
import Pagination from "../../Pagination";

export default function Certificates() {
  const { t } = useTranslation();

  const certificates = Object.values(
    t("certificatesList", { returnObjects: true }),
  );
  const perPage = 2;
  const totalPages = Math.ceil(certificates.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  // Animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section
      id="certificates"
      className="h-fit w-full !max-w-none bg-bg-mesh bg-center bg-no-repeat"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-y-5 py-20">
        <motion.div
          ref={ref}
          variants={animationTitle}
          initial="hidden"
          animate={control}
        >
          <SectionTitle content={t("certificates.title")} />
          <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
            <Trans i18nKey="certificates.description">
              During my <TextHighlight>journey</TextHighlight>, I’ve earned a
              variaty of certificates in web development, Salesforce, and
              design. I firmly believe in the power of continuous
              learning—constantly
              <TextHighlight>
                seeking new knowledge and refining my skills
              </TextHighlight>
              . These certifications represent my
              <TextHighlight>commitment to growth</TextHighlight> and excellence
              in the ever-evolving world of technology.
            </Trans>
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={animationContent}
          initial="hidden"
          animate={control}
          className="mt-4 flex flex-col gap-y-7 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-4"
        >
          {window.innerWidth <= 960 ? (
            ""
          ) : (
            <IconButton
              size="sm"
              className="bg-transparent text-gray-300 hover:bg-bg-purple-hover focus:ring-purple-main"
              disabled={currentPage === 0}
            >
              <ChevronLeft
                size={24}
                onClick={() =>
                  currentPage != 0 && setCurrentPage(currentPage - 1)
                }
              />
            </IconButton>
          )}
          {certificates &&
            certificates
              .slice(currentPage * perPage, perPage * currentPage + perPage)
              .map((certificate, index) => {
                return (
                  <BlogCard certificate={certificate} key={certificate.id} />
                );
              })}
          {window.innerWidth <= 960 ? (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              total={totalPages}
              className="self-center"
            />
          ) : (
            <IconButton
              size="sm"
              className="bg-transparent text-gray-300 hover:bg-bg-purple-hover focus:ring-purple-main"
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight
                size={24}
                onClick={() =>
                  currentPage != totalPages - 1 &&
                  setCurrentPage(currentPage + 1)
                }
              />
            </IconButton>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Motion Animations
const animationTitle = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const animationContent = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, y: 200 },
};
