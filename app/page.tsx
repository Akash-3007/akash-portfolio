import Nav from "@/components/Nav";
import ThreeBackground from "@/components/ThreeBackground";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Exploring from "@/components/sections/Exploring";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ThreeBackground />

      <div className="relative z-10">
        <Nav />

        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Exploring />
          <Activities />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}