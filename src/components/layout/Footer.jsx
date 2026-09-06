import { Link, useLocation } from "react-router-dom";
import FitText from "../ui/FitText";
import Reveal from "../ui/Reveal";

export default function Footer() {
  const { pathname } = useLocation();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--bg)] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 md:px-16 md:pt-24">
      <Reveal>
        {pathname === "/contact" ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="block w-full cursor-pointer"
          >
            <FitText className="relative mx-auto text-center text-[10vw] font-black leading-none tracking-tighter">
              GET IN TOUCH
            </FitText>
          </button>
        ) : (
          <Link
            to="/contact"
            className="block cursor-pointer"
          >
            <FitText className="relative mx-auto text-center text-[10vw] font-black leading-none tracking-tighter">
              GET IN TOUCH
            </FitText>
          </Link>
        )}
      </Reveal>

      <div className="mt-6 flex flex-col justify-between gap-6 border-b border-[var(--fg)]/15 pb-8 sm:mt-8 sm:pb-10 md:flex-row md:items-end">
        <p className="text-[var(--fg)]/60">
          Have a project, opportunity, or idea?
          <br />
          Let's talk.
        </p>

        <div className="md:text-right">
          <p className="text-sm text-[var(--fg)]/50">Say Hello</p>
          <a
            href="mailto:klineolasiman1@gmail.com"
            className="break-all text-base font-medium transition-colors hover:text-[var(--fg)]/70 sm:text-lg"
          >
            klineolasiman1@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-10 md:flex md:flex-row md:justify-between md:gap-10 md:items-start">
        <div className="col-span-2 text-3xl font-black leading-none tracking-tighter md:col-span-1">
          kline
          <br />
          <span className="font-accent font-normal not-italic text-4xl text-red-600">1295koo</span>
        </div>

        <div>
          <p className="text-xs text-[var(--fg)]/40">(Navigate)</p>
          <ul className="mt-4 space-y-2 text-3xl font-bold md:text-4xl">
            <li>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-[var(--fg)]/40">(Social)</p>
          <ul className="mt-4 space-y-2 text-3xl font-bold md:text-4xl">
            <li>
              <a
                href="https://github.com/pndesal1295"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/1295koo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@1pandesal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[var(--fg)]/70"
              >
                Tiktok
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#top"
          onClick={scrollToTop}
          className="group col-span-2 self-start text-sm font-medium text-[var(--fg)]/70 transition-colors hover:text-[var(--fg)] md:col-span-1 md:self-end"
        >
          Back to Top{" "}
          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}