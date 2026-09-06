import AboutContent from "../features/about/components/AboutContent";
import PageTitle from "../components/ui/PageTitle";

export default function AboutPage() {
  return (
    <section className="bg-[var(--bg)] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 md:px-16 md:pt-40 md:pb-24">
      <PageTitle title="About" />
      <AboutContent page />
    </section>
  );
}
