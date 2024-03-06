import Hero from "../../components/Sections/Hero";
import Intro from "../../components/Sections/Intro";
import Projects from "../../components/Sections/Projects";
import About from "../../components/Sections/About";
import Certificates from "../../components/Sections/Certificates";
import Contact from "../../components/Sections/Contact";
import Footer from "../../components/Sections/Footer";
import { CurrentProjectContextProvider } from "src/contexts/currentProject";

import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Hero />
      <Navbar />

      <div className=" mx-auto w-full space-y-24 pb-16 *:mx-auto *:px-7 *:md:max-w-5xl ">
        <Intro />

        <CurrentProjectContextProvider>
          <Projects />
        </CurrentProjectContextProvider>

        <About />
        <Certificates />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;
