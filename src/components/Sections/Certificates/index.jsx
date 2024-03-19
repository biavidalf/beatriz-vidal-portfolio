import { SectionTitle, TextHighlight } from "../../Text";
import { BlogCard } from "../../BlogCard";
import Pagination from "../../Pagination";

import { IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

export default function Certificates() {
  const { t } = useTranslation();

  const certificates = Object.values(
    t("certificatesList", { returnObjects: true }),
  );
  const perPage = 2;
  const totalPages = Math.ceil(certificates.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section
      id="certificates"
      className="h-fit w-full !max-w-none bg-bg-mesh bg-no-repeat"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-y-5 py-20">
        <SectionTitle content={t("certificates.title")} />
        <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
          <Trans i18nKey="certificates.description">
            During my <TextHighlight>journey</TextHighlight>, I’ve earned a
            variaty of certificates in web development, Salesforce, and design.
            I firmly believe in the power of continuous learning—constantly
            <TextHighlight>
              seeking new knowledge and refining my skills
            </TextHighlight>
            . These certifications represent my
            <TextHighlight>commitment to growth</TextHighlight> and excellence
            in the ever-evolving world of technology.
          </Trans>
        </p>
        <div className="mt-4 flex flex-col gap-y-7 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-4">
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
                console.log(certificate);
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
        </div>
      </div>
    </section>
  );
}
