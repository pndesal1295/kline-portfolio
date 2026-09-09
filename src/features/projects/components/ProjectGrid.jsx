import Reveal from "../../../components/ui/Reveal";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "../../../data/projectsData";
import { ArrowUpRight } from "lucide-react";

function ProjectLinks({ project }) {
  if (project.private) {
    return (
      <span className="inline-flex items-center gap-2 text-[var(--fg)]/55">
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        Source confidential
      </span>
    );
  }

  return (
    <>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]/60"
        >
          Live site
<ArrowUpRight
  size={16}
  strokeWidth={2}
  className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
/>
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 transition-colors hover:text-[var(--fg)]/60"
        >
          GitHub
      <ArrowUpRight
           size={16}
           strokeWidth={2}
           className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
        />
        </a>
      )}
    </>
  );
}

function StandardProjectCard({ project, compact = false }) {
  return (
    <article className="flex h-full flex-col border-t border-[var(--fg)]/20 pt-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <ProjectCarousel images={project.images} name={project.name} />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/45">
            {project.type}
          </p>
          <h3 className="mobile-landscape-project-title mt-2 text-2xl font-bold leading-tight sm:text-3xl">
            {project.name}
          </h3>
        </div>

        <span className="shrink-0 text-sm text-[var(--fg)]/50">{project.year}</span>
      </div>

      <p className="mobile-landscape-project-description mt-5 max-w-xl text-sm leading-6 text-[var(--fg)]/65 sm:text-base sm:leading-7">
        {compact && project.shortDescription
          ? project.shortDescription
          : project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--fg)]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--fg)]/55"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex min-h-10 items-center gap-5 text-sm font-semibold uppercase tracking-[0.12em]">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function FeaturedProjectCard({ project, compact = false }) {
  return (
    <article className="border-t border-[var(--fg)]/30 pt-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg)]/45">
            Featured project · {project.type}
          </p>
          <h3 className="mobile-landscape-project-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            {project.name}
          </h3>
        </div>

        <span className="shrink-0 text-sm text-[var(--fg)]/50">{project.year}</span>
      </div>

      <ProjectCarousel images={project.images} name={project.name} featured />

      <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.65fr)_minmax(220px,0.75fr)] md:gap-12">
        <p className="mobile-landscape-project-description max-w-4xl text-sm leading-6 text-[var(--fg)]/68 sm:text-base sm:leading-7">
          {compact && project.shortDescription
            ? project.shortDescription
            : project.description}
        </p>

        <div className="md:border-l md:border-[var(--fg)]/15 md:pl-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/35">
            Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--fg)]/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--fg)]/55"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex min-h-10 items-center gap-5 text-sm font-semibold uppercase tracking-[0.12em]">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectGrid({ compact = false }) {
  return (
    <div className="mobile-landscape-project-grid mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-12 md:mt-16 md:grid-cols-2 md:gap-y-20">
      {projects.map((project, i) => (
        <Reveal
          key={project.name}
          delay={i * 120}
          className={project.featured ? "group md:col-span-2" : "group"}
        >
          {project.featured ? (
            <FeaturedProjectCard project={project} compact={compact} />
          ) : (
            <StandardProjectCard project={project} compact={compact} />
          )}
        </Reveal>
      ))}
    </div>
  );
}
