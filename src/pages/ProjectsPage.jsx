import FitText from "../components/ui/FitText";
import ProjectGrid from "../features/projects/components/ProjectGrid";
import PageTitle from "../components/ui/PageTitle";

export default function ProjectsPage() {
  return (
    <section className="mobile-landscape-page bg-[var(--bg)] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 md:px-16 md:pt-40 md:pb-24">
      <PageTitle title="Projects" />
      <FitText className="mobile-landscape-heading animate-fade-up mx-auto text-center text-[10vw] font-black leading-none tracking-tighter">
        PROJECTS
      </FitText>
      <p
        className="animate-fade-up mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[var(--fg)]/65 sm:text-lg md:mt-6 md:text-xl"
        style={{ animationDelay: "150ms" }}
      >
        A collection of applications, systems, and experiments I've designed and built.
      </p>
      <ProjectGrid />
    </section>
  );
}
