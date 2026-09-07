import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function Nav() {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const formatted = time.toLocaleTimeString("en-US", { hour12: false });

  const linkClass = ({ isActive }) =>
    `relative transition-colors ${isActive
      ? "font-semibold text-[var(--fg)] after:w-full"
      : "text-[var(--fg)]/60 after:w-0 hover:text-[var(--fg)] hover:after:w-full"
    } after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[var(--fg)] after:transition-all after:duration-300`;

  const mobileLinkClass = ({ isActive }) =>
    `block border-b border-[var(--fg)]/15 py-5 text-4xl font-black tracking-tight transition-colors ${isActive ? "text-[var(--fg)]" : "text-[var(--fg)]/55 hover:text-[var(--fg)]"
    }`;

  return (
    <>
      <nav className="animate-fade-down fixed top-0 left-0 right-0 z-[60] flex items-center justify-between bg-[var(--bg)]/90 px-5 py-5 backdrop-blur-sm sm:px-8 md:bg-transparent md:px-16 md:py-6 md:backdrop-blur-none">
        <Link
          to="/"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="inline-block text-sm font-bold tracking-wide transition-transform duration-300 hover:scale-110 text-red-600"
        >
          kline
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 gap-10 text-sm font-medium md:flex">
          <NavLink to="/projects" className={linkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>
        </div>

        <div className="flex items-center gap-3 text-sm text-[var(--fg)]/65 md:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--fg)]/25 text-[var(--fg)] transition-colors hover:border-[var(--fg)]/55 md:h-7 md:w-7"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <span className="hidden md:inline">
            LOCAL / <span className="text-[var(--fg)]">{formatted}</span>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-9 items-center gap-2 rounded-full border border-[var(--fg)]/25 px-3 text-xs font-bold tracking-wide text-[var(--fg)] transition-colors hover:border-[var(--fg)]/55 md:hidden"
          >
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-[var(--bg)] px-5 pb-8 pt-28 transition-all duration-300 sm:px-8 md:hidden ${menuOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col">
          <div>
            <NavLink to="/projects" className={mobileLinkClass}>
              PROJECTS
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass}>
              CONTACT
            </NavLink>
          </div>

          <div className="mt-auto border-t border-[var(--fg)]/15 pt-5">
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--fg)]/40">
              Local time
            </p>
            <p className="mt-2 font-mono text-lg text-[var(--fg)]/75">{formatted}</p>
          </div>
        </div>
      </div>
    </>
  );
}
