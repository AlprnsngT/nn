// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";

type SplashVideoProps = {
  targetId?: string;
};

export default function SplashVideo({ targetId = "after-splash" }: SplashVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      document.body.classList.add("splash-active");
    }
    return () => {
      document.body.classList.remove("splash-active");
    };
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = async () => {
      try {
        await video.play();
      } catch (err) {
        // Autoplay with sound may be blocked by the browser; do nothing.
      }
    };
    if (video.autoplay) {
      void tryPlay();
    }
  }, []);

  const handleEnded = () => {
    const target = document.getElementById(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
    // Reveal header just after scroll begins
    setTimeout(() => {
      document.body.classList.remove("splash-active");
      setIsPlaying(false);
    }, 60);
  };

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/Generated%20video%201.mp4"
        autoPlay
        playsInline
        controls={false}
        muted={false}
        onEnded={handleEnded}
        preload="auto"
      />
    </div>
  );
}

