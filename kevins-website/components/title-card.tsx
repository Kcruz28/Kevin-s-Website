"use client";
import { motion } from "framer-motion";

type TitleCardProps = {
  title1: string;
  title2: string;
  description: string;
};

export function TitleCard({ title1, title2, description }: TitleCardProps) {
  return (
    <div className="flex flex-col gap-6 mt-0 md:mt-0">
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

      <motion.span
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.12, type: "tween" }}
        className="block w-32 sm:w-48 h-2 rounded-full bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9] animate-gradient-move opacity-95 shadow-[0_0_32px_8px_rgba(227,11,93,0.20),0_0_40px_16px_rgba(99,102,241,0.15),0_0_48px_20px_rgba(14,165,233,0.10)] mb-2"
      />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, type: "tween" }}
        className="w-full max-w-xl py-4 px-6 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-gray-400/40 dark:shadow-none"
      >
        <p className="text-xl md:text-2xl text-left text-black dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
}


