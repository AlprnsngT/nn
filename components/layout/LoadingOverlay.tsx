"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-white/80 dark:bg-red-50/80 backdrop-blur-sm transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 rounded-full border-4 border-red-500/30 border-t-red-600 animate-spin" />
        <span className="text-sm font-medium text-gray-900 dark:text-red-900">Yükleniyor...</span>
      </div>
    </div>
  );
}


