'use client';

import { useRef } from "react";
import { motion, useTransform, useScroll, useMotionValueEvent } from "motion/react";


const FADE_OUT = [0.35, 0.55];
const FADE_IN = [0.45, 0.65];

export default function CarbonCaptureVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });


  const beforeOpacity = useTransform(scrollYProgress, FADE_OUT, [1, 0]);
  const afterOpacity = useTransform(scrollYProgress, FADE_IN, [0, 1]);


  return (
    <div ref={ref} className="absolute inset-0 flex items-center justify-center lg:block">
      {/* One shared box so both images have identical size and position.*/}
      <div className="relative lg:left-40 lg:h-auto aspect-square h-full max-w-full lg:w-1/2">
        <motion.img
          src="/Hydroxide.png"
          alt="Copper hydroxide complex"
          className="absolute inset-0 h-full w-full object-contain scale-100 lg:scale-200"
          style={{ opacity: beforeOpacity }}
        />
        <motion.img
          src="/Bicarbonate.png"
          alt="Copper complex with CO2 captured as bicarbonate"
          className="absolute inset-0 h-full w-full object-contain scale-100 lg:scale-200"
          style={{ opacity: afterOpacity }}
        />
      </div>
    </div>
  );
}