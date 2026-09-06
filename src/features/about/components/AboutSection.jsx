import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24">
      <AboutContent showProjectsLink />
    </section>
  );
}
