"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundSlideshow({
  images,
  durationMs = 5000,
  className = "",
}: {
  images: string[];
  durationMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, durationMs);
    return () => clearInterval(id);
  }, [images, durationMs]);

  if (!images?.length) return null;

  return (
    <div className={`absolute inset-0 -z-10 ${className}`} aria-hidden>
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-1000 ${idx === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
