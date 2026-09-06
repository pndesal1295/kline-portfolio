import { useEffect, useState } from "react";
import assetUrl from "../../../utils/assetUrl";

const AUTO_ADVANCE_MS = 3500;

export default function ProjectCarousel({ images, name, featured = false }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultiple = images && images.length > 1;

  useEffect(() => {
    if (!hasMultiple || isHovered) return undefined;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [isHovered, hasMultiple, images]);

  if (!images || images.length === 0) return null;

  const goTo = (i) => setIndex(((i % images.length) + images.length) % images.length);


  return (
    <div
      className={`group/carousel relative mt-5 overflow-hidden bg-[var(--fg)]/5 ${featured ? "aspect-[16/8] sm:aspect-video" : "aspect-video"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={assetUrl(src)}
          alt={`${name} screenshot ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/carousel:scale-[1.025] ${hasMultiple ? "cursor-pointer" : ""
            }`}
          style={{
            opacity: i === index ? 1 : 0,
            transitionProperty: "opacity, transform",
          }}
          loading="lazy"
          onClick={hasMultiple ? () => goTo(index + 1) : undefined}
        />
      ))}

      {hasMultiple && (
        <>


          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "18px" : "6px",
                  background:
                    i === index
                      ? "var(--bg)"
                      : "color-mix(in srgb, var(--bg) 50%, transparent)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
