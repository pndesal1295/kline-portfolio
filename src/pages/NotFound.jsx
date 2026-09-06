import { Link } from "react-router-dom";
import FitText from "../components/ui/FitText";
import PageTitle from "../components/ui/PageTitle";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg)] px-5 pt-28 pb-16 text-center sm:px-8 sm:pt-32 sm:pb-20 md:px-16 md:pb-24">
      <PageTitle title="Not Found" />

      <FitText className="animate-fade-up font-black leading-none tracking-tighter text-[24vw] md:text-[16vw]">
        404
      </FitText>

      <p
        className="animate-fade-up mt-5 max-w-md text-base leading-relaxed text-[var(--fg)]/60 sm:text-lg md:mt-6 md:text-xl"
        style={{ animationDelay: "150ms" }}
      >
        This page doesn't exist, or it may have moved.
      </p>

      <div
        className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:mt-10"
        style={{ animationDelay: "300ms" }}
      >
        <Link
          to="/"
          className="group flex items-center gap-3 text-xl font-bold transition-colors hover:text-[var(--fg)]/70 sm:text-2xl md:text-3xl"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--fg)]/30 text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Home
        </Link>

        <Link
          to="/projects"
          className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--fg)]/50 transition-colors hover:text-[var(--fg)]"
        >
          View Projects
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}