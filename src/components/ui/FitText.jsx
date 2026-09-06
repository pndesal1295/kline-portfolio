import { useLayoutEffect, useRef, useState } from "react";

export default function FitText({ as: Tag = "h2", className = "", children }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scale, setScale] = useState(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      text.style.transform = "scaleX(1)";
      const containerWidth = container.clientWidth;
      const textWidth = text.getBoundingClientRect().width;
      if (textWidth > 0) setScale(containerWidth / textWidth);
    };

    fit();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }
    const ro = new ResizeObserver(fit);
    ro.observe(container);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [children]);

  return (
    <Tag ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          transform: scale ? `scaleX(${scale})` : "scaleX(1)",
          transformOrigin: "center",
          opacity: scale ? 1 : 0,
        }}
      >
        {children}
      </span>
    </Tag>
  );
}