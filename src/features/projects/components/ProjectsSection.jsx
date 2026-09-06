import FitText from "../../../components/ui/FitText";
import Reveal from "../../../components/ui/Reveal";
import ProjectGrid from "./ProjectGrid";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--bg)] px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24"
    >
      <FitText className="animate-fade-up font-black leading-none tracking-tighter text-center mx-auto text-[10vw]">
        PROJECTS
      </FitText>

      <ProjectGrid compact />

      <Reveal className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="text-sm font-medium underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
        >
          → View all projects
        </Link>
      </Reveal>
    </section>
  );
}