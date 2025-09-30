"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({
  children,
  className = "",
  gradient = false,
  container = true,
  id,
}: {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  container?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${gradient ? "gradient-brand text-white" : "bg-slate-900"} ${className}`}>
      <div className={`${container ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : ""} py-16 sm:py-20`}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}


