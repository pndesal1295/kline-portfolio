import Reveal from "../components/ui/Reveal";
import PageTitle from "../components/ui/PageTitle";
import { contactLinks } from "../data/contactData";
import assetUrl from "../utils/assetUrl";

export default function ContactPage() {
  return (
    <section className="bg-[var(--bg)] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 md:px-16 md:pt-40 md:pb-24">
      <PageTitle title="Contact" />
      <p className="animate-fade-up mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-[var(--fg)]/65 sm:text-lg md:text-xl">
        Have a project, opportunity, or idea? Let's talk.
      </p>

      <Reveal className="mx-auto mt-12 max-w-4xl text-center sm:mt-16">
        <a
          href="mailto:klineolasiman1@gmail.com"
          className="group inline-flex flex-col items-center"
        >

          <span className="hover-glow text-center text-4xl font-black leading-[0.88] tracking-tight transition-transform duration-300 hover:scale-[1.02] sm:text-5xl md:text-6xl">
            LET&apos;S WORK
            <br />
            TOGETHER
          </span>

          <span className="mt-4 font-mono text-sm text-[var(--fg)]/50 sm:text-base">
            klineolasiman1@gmail.com
          </span>
        </a>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-x-20 gap-y-8 sm:mt-16 sm:gap-y-10 md:mt-20 md:grid-cols-[repeat(2,max-content)] md:justify-center md:gap-y-12">
        {contactLinks.map((link, i) => {
          const href = link.assetPath ? assetUrl(link.assetPath) : link.href;
          const external = href.startsWith("http");
          const isResume = link.label === "Résumé";

          return (
            <Reveal key={link.label} delay={i * 100}>
              <a
                href={href}
                target={external || isResume ? "_blank" : undefined}
                rel={external || isResume ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-start gap-4 text-2xl font-bold transition-colors hover:text-[var(--fg)]/70 sm:gap-4 sm:text-3xl md:text-4xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--fg)]/30 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45 sm:h-12 sm:w-12 sm:text-xl">
                  →
                </span>

                <span>{link.label}</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
