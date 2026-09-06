import { Link } from "react-router-dom";
import FitText from "../../../components/ui/FitText";
import Reveal from "../../../components/ui/Reveal";
import { education, focusAreas, techStack } from "../../../data/aboutData";

import assetUrl from "../../../utils/assetUrl";

export default function AboutContent({ showProjectsLink = false, page = false }) {
  return (
    <>


      <FitText
        className={`${page ? "animate-fade-up " : ""}relative font-black leading-none tracking-tighter text-center mx-auto text-[10vw]`}
      >
        ABOUT KLINE
      </FitText>

      <Reveal className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-8 sm:mt-12 sm:gap-10 md:mt-16 md:flex-row md:items-start md:gap-12">
        <div className="aspect-square w-full max-w-[180px] shrink-0 overflow-hidden bg-[var(--fg)]/10 transition-transform duration-500 hover:scale-105 sm:max-w-[200px] md:max-w-[220px]">
          <img
            src={assetUrl("assets/image2.jpg")}
            alt="Portrait of Kline"
            className="h-full w-full object-cover"
            width="220"
            height="220"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-[var(--fg)]/80 sm:text-lg md:space-y-8 md:text-xl">
          <p>Hi, I'm Kline — a developer who builds systems that work when you don't.</p>

          <p>
            I work across the stack, but I care most about the parts that don't
            show up in a demo: what happens when the network drops, when data's
            stale, and when two things try to save at once.
          </p>

          {page && (
            <>
              <p>
                Software that looks good in a five-minute walkthrough and software
                that survives real use are two different things, and I build for
                the second one.
              </p>

              <p>
                My process is deliberate — I trace decisions back to what's actually
                in the code, not what should be there, and I'd rather ship something
                smaller that's solid than something bigger that's held together with
                assumptions.
              </p>

              <p>
                Whether it's a frontend interface, an API, or the offline logic nobody
                thinks about until it breaks, I'm interested in the systems underneath
                the surface.
              </p>
            </>
          )}
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-20 max-w-4xl border-t border-[var(--fg)]/15 pt-8 sm:mt-24 sm:pt-10 md:mt-28">
        <p className="text-sm font-mono uppercase tracking-wide text-[var(--fg)]/50">Education →</p>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">{education.degree}</h2>
            <p className="mt-2 text-base text-[var(--fg)]/65 sm:text-lg">{education.school}</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--fg)]/50">{education.details.join(" · ")}</p>
          </div>
          <p className="font-mono text-sm text-[var(--fg)]/55">{education.period}</p>
        </div>
      </Reveal>

      {!page && (
        <Reveal className="mt-12 pb-20 text-center sm:mt-16 sm:pb-24 md:pb-32">
          <Link
            to="/about"
            className="text-sm font-medium underline-offset-4 transition-opacity hover:opacity-60 hover:underline"
          >
            → More about me
          </Link>
        </Reveal>
      )}

      {page && (
        <>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-14 sm:mt-24 sm:gap-y-16 md:mt-32 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold text-[var(--fg)]/55 md:text-xl">Focus</h2>
              <ul className="mt-6 flex flex-col items-center space-y-4 sm:mt-8 sm:space-y-5 md:items-start md:space-y-6">
                {focusAreas.map((area, i) => (
                  <Reveal
                    as="li"
                    key={area.name}
                    delay={i * 90}
                    className={`flex max-w-full items-center gap-3 text-center text-2xl font-bold leading-tight transition-colors duration-300 sm:text-3xl md:text-left md:text-4xl ${area.active
                      ? "text-[var(--fg)] hover:text-[var(--fg)]/70"
                      : "text-[var(--fg)]/35 hover:text-[var(--fg)]/55"
                      }`}
                  >
                    {area.name}
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold text-[var(--fg)]/55 md:text-xl">Tech</h2>
              <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
                {techStack.map((row, i) => (
                  <Reveal key={row.label} delay={i * 100}>
                    <span className="block text-sm font-mono uppercase tracking-wide text-[var(--fg)]/50">
                      {row.label} →
                    </span>
                    <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 font-mono text-xl font-bold sm:gap-x-3 sm:text-2xl md:justify-start md:text-3xl">
                      {row.items.map((item, idx) => (
                        <span key={item}>
                          <span className="text-[var(--fg)] transition-colors hover:text-[var(--fg)]/70">
                            {item}
                          </span>
                          {idx < row.items.length - 1 && (
                            <span className="text-[var(--fg)]/35"> /</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal className="mt-16 text-center sm:mt-20 md:mt-24">
            <h2 className="text-lg font-bold text-[var(--fg)]/55 md:text-xl">Contributions</h2>
            <div className="mx-auto mt-6 max-w-4xl overflow-x-auto sm:mt-8">
              <a
                href="https://github.com/pndesal1295"
                target="_blank"
                rel="noopener noreferrer"
                className="block min-w-[680px] transition-opacity hover:opacity-70"
              >
                <img
                  src="https://ghchart.rshah.org/000000/pndesal1295"
                  alt="Kline's GitHub contribution graph"
                  className="w-full invert gh-chart"
                  loading="lazy"
                />
              </a>
            </div>
          </Reveal>
        </>
      )}
    </>
  );
}
