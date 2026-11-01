"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export type TitleLine = { words: string[]; accent?: boolean };

/** Display headline that reveals word by word through a mask. Screen readers get `label`. */
export default function RevealTitle({
  id,
  label,
  lines,
  className = "",
}: {
  id?: string;
  label: string;
  lines: TitleLine[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1 id={id} className={`hx-title ${className}`} aria-label={label}>
      {lines.map((line) => (
        <span key={line.words.join(" ")} className={`hx-line${line.accent ? " hx-line--accent" : ""}`} aria-hidden="true">
          {line.words.map((w) => {
            const i = wordIndex++;
            return (
              <span className="hx-mask" key={`${w}-${i}`}>
                <motion.span
                  className="hx-word"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.05 + i * 0.06 }}
                >
                  {w}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
