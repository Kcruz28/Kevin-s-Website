"use client";
import { motion } from "framer-motion";

type TitleCardProps = {
  title1: string;
  title2: string;
  description: string;
};

export function TitleCard({ title1, title2, description }: TitleCardProps) {
  return (
    <div className="flex flex-col gap-6 mt-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-extrabold text-left text-black dark:text-white drop-shadow-[0_4px_32px_rgba(60,60,60,0.18)] leading-[1.05]"
      >
        {title1}
        <br />
        {title2}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, type: "tween" }}
        className="flex gap-4 mt-1"
      >
        <p className="text-xl md:text-2xl text-left text-black dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
}


