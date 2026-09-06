import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}) {
  const ref = useRef(null);
  const hasBeenVisible = useRef(false);
  const scrollDirection = useRef("down");
  const lastScrollY = useRef(window.scrollY);

  const [visible, setVisible] = useState(false);
  const [exitDirection, setExitDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      scrollDirection.current =
        currentScrollY > lastScrollY.current ? "down" : "up";

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenVisible.current = true;
          setVisible(true);
        } else if (hasBeenVisible.current) {
          setExitDirection(scrollDirection.current);
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${
        visible
          ? "is-visible"
          : exitDirection === "down"
            ? "exit-up"
            : "exit-down"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}