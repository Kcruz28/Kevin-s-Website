"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TypedText({
  text,
  delay = 50,
  startDelay = 0,
}: {
  text: string;
  delay?: number;
  startDelay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text, startTyping]);

  return <span>{displayedText}</span>;
}

export default function Home() {
  const [scrollY] = useState(0);
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col md:flex-row justify-between items-center mt-24 sm:mt-10 md:mt-6">
        <div className="md:w-1/2 flex flex-col items-start gap-3 sm:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-extrabold text-left text-black dark:text-white drop-shadow-[0_4px_32px_rgba(60,60,60,0.18)] leading-[1.05]"
          >
            Kevin <br /> Cruz
            <br /> Lopez
          </motion.h1>
          {/* Animated Gradient Bar */}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, type: "tween" }}
            className="block w-32 sm:w-48 h-2 rounded-full bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9] animate-gradient-move opacity-95 shadow-[0_0_32px_8px_rgba(227,11,93,0.35),0_0_40px_16px_rgba(99,102,241,0.22),0_0_48px_20px_rgba(14,165,233,0.16)] mb-2"
          />
          {/* Modern Glassy Description Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, type: "tween" }}
            className="w-full max-w-xl py-4 px-6 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-gray-400/40 dark:shadow-none"
          >
            <p className="text-base sm:text-lg md:text-xl text-left text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
              I am a software engineer with a passion for building web
              applications.
              <br className="hidden sm:block" />
              Experienced in full-stack development, I love working with modern
              technologies to create efficient and scalable solutions.
            </p>
          </motion.div>
          {/* Animated Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, type: "tween" }}
            className="flex gap-4 mt-1"
          >
            <a
              href="https://www.linkedin.com/in/kevin-cruz-lopez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group"
            >
              <span className="inline-flex items-center justify-center">
                <FaLinkedin className="text-5xl sm:text-6xl md:text-5xl text-[#0077B5] drop-shadow-lg group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_0_16px_#0077B5] transition-all duration-300" />
              </span>
            </a>
            <a
              href="https://github.com/Kcruz28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group"
            >
              <span className="inline-flex items-center justify-center">
                <FaGithub className="text-5xl sm:text-6xl md:text-5xl text-gray-800 dark:text-white drop-shadow-lg group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_0_16px_#6366f1] transition-all duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
        {/* Animated gradient bar keyframes */}
        <style jsx global>{`
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 2.5s linear infinite alternate;
          }
        `}</style>

        {/* Right column - Image */}
        <div className="hidden md:block md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end w-full"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-rose-500 to-purple-500 opacity-20 blur-xl"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
                {/* Terminal header */}
                <div className="flex items-center p-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-gray-400 text-sm font-mono">
                    kevin@portfolio ~{" "}
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-4 font-mono text-sm text-gray-300">
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <TypedText text="npm create portfolio" delay={40} />
                  </div>

                  <div className="mt-2 text-gray-400">
                    <div>Creating a new portfolio...</div>
                    <div className="mt-1">✓ Frontend skills installed</div>
                    <div>✓ Backend technologies configured</div>
                    <div>✓ Project experience loaded</div>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block w-3 h-3 bg-rose-500 rounded-full mr-2 animate-pulse"></span>
                      <span>Ready to collaborate</span>
                    </div>
                  </div>

                  <div className="mt-4 flex">
                    <span className="text-green-400 mr-2">$</span>
                    <TypedText
                      text="skills --list"
                      delay={40}
                      startDelay={1500}
                    />
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <span className="text-yellow-400">→</span> React.js
                    </div>
                    <div>
                      <span className="text-yellow-400">→</span> Node.js
                    </div>
                    <div>
                      <span className="text-yellow-400">→</span> TypeScript
                    </div>
                    <div>
                      <span className="text-yellow-400">→</span> Next.js
                    </div>
                    <div>
                      <span className="text-yellow-400">→</span> MongoDB
                    </div>
                    <div>
                      <span className="text-yellow-400">→</span> AWS
                    </div>
                  </div>

                  <div className="mt-4 flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="relative">
                      <span>_</span>
                      <span className="absolute top-0 left-0 h-full w-[1ch] bg-gray-300 animate-cursor"></span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800">
                <span className="text-3xl font-bold text-rose-500">3+</span>
                <span className="text-xs absolute bottom-5">years exp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
