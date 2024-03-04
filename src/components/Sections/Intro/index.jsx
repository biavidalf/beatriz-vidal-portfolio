import ProfilePic from "../../../assets/profile-pic.jpeg";

export default function Intro() {
  return (
    <section className="flex h-screen flex-col items-center gap-4 py-14 md:flex-row md:gap-12">
      <img src={ProfilePic} alt="Profile Picture" className="w-64 rounded" />

      <div className="flex flex-col items-center gap-4  text-center md:items-start md:text-left">
        <div className="space-y-1 font-medium">
          <h2 className="text-2xl font-semibold md:text-3xl">Beatriz Vidal</h2>
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
    </section>
  );
}

/*  */
