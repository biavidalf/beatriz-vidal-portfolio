import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Tag from "../Tag";
import { useTranslation } from "react-i18next";
import { getImageURL } from "src/utils/imageURL";

export function BlogCard({ certificate: { id, cover, link } }) {
  const { t } = useTranslation();

  return (
    <Card className="max-w-full overflow-hidden rounded-md border border-stroke bg-bg-glass/50 text-gray-100 lg:min-h-[500px] lg:max-w-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 h-52 w-full rounded-none"
      >
        <img
          src={getImageURL(`courses/${cover}`)}
          alt={t(`certificatesList.${id}.title`)}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className=" pb-0">
        <Typography variant="h5" className="text-gray-200">
          {t(`certificatesList.${id}.title`)}
        </Typography>
        <Typography
          variant="h6"
          className="font-medium text-deep-purple-100 sm:text-deep-purple-200"
        >
          {t(`certificatesList.${id}.company`)}
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-3 font-normal text-gray-300"
        >
          {t(`certificatesList.${id}.description`)}
        </Typography>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {Object.values(
            t(`certificatesList.${id}.tags`, { returnObjects: true }),
          ).map((tag, index) => (
            <Tag content={tag} key={index} />
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex items-center">
        <a
          target="_blank"
          href={t(`certificatesList.${id}.link`)}
          className="inline-block"
        >
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 rounded text-gray-200 hover:bg-bg-purple-hover focus:bg-bg-purple-hover"
          >
            {t("certificates.details", {
              defaultValue: "certificates.details",
            })}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
