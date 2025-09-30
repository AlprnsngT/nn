"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ to, duration = 1200, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    function step(ts: number) {
      if (startRef.current == null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      const next = Math.floor(progress * to);
      setValue(next);
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span>{value.toLocaleString()} {suffix}</span>;
}


