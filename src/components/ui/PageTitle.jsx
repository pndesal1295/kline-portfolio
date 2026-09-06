import { useEffect } from "react";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Kline Olasiman`
      : "Kline Olasiman";
  }, [title]);

  return null;
}