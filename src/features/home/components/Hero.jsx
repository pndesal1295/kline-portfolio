import assetUrl from "../../../utils/assetUrl";

export default function Hero() {
  return (
    <header id="top" className="relative bg-[var(--bg)] px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 md:px-16 md:pt-40 md:pb-24">
      <div className="relative">
        <h1
          className="animate-fade-up text-[22vw] font-black leading-[0.85] tracking-tighter text-center mx-auto sm:text-[18vw]"
          style={{ animationDelay: "100ms" }}
        >
          kline
        </h1>
      </div>

      <p
        className="animate-fade-up mx-auto mt-8 max-w-6xl text-center text-xl leading-snug text-[var(--fg)]/65 sm:mt-10 sm:text-2xl md:text-4xl"
        style={{ animationDelay: "300ms" }}
      >
        I build software that holds up under real conditions —{" "}
        <span className="font-semibold text-[var(--fg)]">resilient systems</span>,{" "}
        <span className="font-semibold text-[var(--fg)]">clean architecture</span>,
        and interfaces that work whether{" "}
        <span className="font-semibold text-[var(--fg)]">the connection does or not.</span>
      </p>

      <div
        className="animate-fade-up relative mt-10 aspect-[4/3] w-full overflow-hidden bg-[var(--fg)]/10 transition-transform duration-500 hover:scale-[1.01] sm:mt-14 sm:aspect-video md:mt-16"
        style={{ animationDelay: "500ms" }}
      >
        <img
          src={assetUrl("assets/image1.png")}
          alt="Kline riding a fixed-gear bicycle"
          className="h-full w-full object-cover"
          width="1920"
          height="1080"
        />
      </div>
    </header>
  );
}
