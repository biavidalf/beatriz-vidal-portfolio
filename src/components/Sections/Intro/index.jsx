import ProfilePic from "../../../assets/profile-pic.jpeg";

import TechnologiesSlide from "../Hero/TechnologiesSlide";

export default function Intro() {
  return (
    <section
      id="intro"
      className="bg-bg-intro -mb-10 flex h-screen w-full !max-w-none flex-col items-center bg-bottom bg-no-repeat pt-20"
    >
      <div className="mx-auto w-full space-y-8 lg:max-w-5xl">
        <div className="flex flex-col items-center gap-4 py-14 md:flex-row md:gap-12">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-64 rounded"
          />

          <div className="flex flex-col items-center gap-4  text-center md:items-start md:text-left">
            <div className="space-y-1 font-medium">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Beatriz Vidal
              </h2>
              <p className="text-gray-100/60 lg:text-2xl">
                Web Developer | Designer
              </p>
              <p className="text-gray-100/60 lg:text-2xl">
                Salesforce Developer | Admin
              </p>
            </div>

            <h1 className="mt-4 text-2xl font-medium lg:text-4xl">
              Understand client needs and deliver{" "}
              <span className="text-purple-main">exceptional results.</span>
            </h1>
          </div>
        </div>

        <TechnologiesSlide />
      </div>
    </section>
  );
}

/*  */
