import Hero from "../features/home/components/Hero";
import Projects from "../features/projects/components/ProjectsSection";
import About from "../features/about/components/AboutSection";
import PageTitle from "../components/ui/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle />

      <Hero />
      <Projects />
      <About />
    </>
  );
}