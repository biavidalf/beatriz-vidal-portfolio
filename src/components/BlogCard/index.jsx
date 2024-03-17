import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import Tag from "../Tag";

export function BlogCard() {
  return (
    <Card className="max-w-full overflow-hidden rounded-md border border-stroke bg-bg-glass/50 text-gray-100 lg:max-w-sm">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className=" pb-0">
        <Typography variant="h5" className="text-gray-200">
          OSF Academy
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-3 font-normal text-gray-300"
        >
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Tag content="5 Weeks" />
          <Tag content="Salesforce" />
          <Tag content="English" />
        </div>
      </CardBody>
      <CardFooter className="flex items-center">
        <a target="_blank" href="#" className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 rounded text-gray-200 hover:bg-bg-purple-hover"
          >
            See details
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
