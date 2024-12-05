import Intro from "@/src/components/intro";
import SectionDivider from "@/src/components/section-divider";
import About from "@/src/components/about";
import Projects from "@/src/components/projects";
import Skills from "@/src/components/skills";
import Experience from "@/src/components/experience";
import Contact from "@/src/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
