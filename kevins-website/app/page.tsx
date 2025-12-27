"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { useRef } from "react";
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
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen px-4 md:px-20 pb-20 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col md:flex-row justify-between items-center mt-24 sm:mt-10 md:mt-6">
        <div className="md:w-1/2 flex flex-col items-center md:items-start gap-3 sm:gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-extrabold text-center md:text-left text-black dark:text-white drop-shadow-[0_4px_32px_rgba(60,60,60,0.18)] leading-[1.05]"
          >
            Kevin <br /> Cruz
            <br /> Lopez
          </motion.h1>
          {/* Animated Gradient Bar */}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, type: "tween" }}
            className="block w-32 sm:w-48 h-2 rounded-full bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9] animate-gradient-move opacity-95 shadow-[0_0_32px_8px_rgba(227,11,93,0.20),0_0_40px_16px_rgba(99,102,241,0.15),0_0_48px_20px_rgba(14,165,233,0.10)] mb-2 mx-auto md:mx-0"
          />
          {/* Modern Glassy Description Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, type: "tween" }}
            className="w-full max-w-xl py-6 px-8 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-gray-400/40 dark:shadow-none"
          >
            <div className="flex flex-col gap-4 text-base sm:text-lg md:text-xl text-center md:text-left text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
              <p>
                I am a software engineer with a passion for building web applications.
              </p>
              <p>
                Experienced in full-stack development, I love working with modern
                technologies to create efficient and scalable solutions.
              </p>
            </div>
          </motion.div>
          {/* Animated Socials */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, type: "tween" }}
            className="relative z-10 flex flex-wrap gap-4 mt-0 w-full items-center justify-center md:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/kcruz10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <FaLinkedin className="text-2xl text-[#0077B5] group-hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.5)]" />
              <span className="font-semibold text-gray-800 dark:text-white">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Kcruz28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <FaGithub className="text-2xl text-gray-800 dark:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              <span className="font-semibold text-gray-800 dark:text-white">GitHub</span>
            </a>

            {/* Scroll Arrow - Centered on split line for desktop, flowing on mobile */}
            <div
              onClick={scrollToAbout}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group md:absolute md:right-0 md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
            >
              <FaArrowDown className="text-xl text-gray-800 dark:text-white animate-bounce" />
            </div>
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
              <div className="relative bg-black/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {/* Terminal header */}
                <div className="flex items-center p-3 bg-white/5 border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-gray-400 text-sm font-mono opacity-50">
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

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-4 border-white/5">
                <span className="text-3xl font-bold text-rose-500">3+</span>
                <span className="text-xs absolute bottom-5 text-gray-400">years exp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* About Me Section */}
      <div ref={aboutRef} className="mt-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-20 bg-gradient-to-r from-[#e30b5d] to-[#6366f1] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              About Me
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Text Content in Glass Card */}
            <div className="md:w-1/2 order-2 md:order-1 relative">
              <div className="relative bg-white/60 dark:bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl">
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                  <p>
                    Hello! I&apos;m <span className="font-semibold text-black dark:text-white">Kevin</span>, a passionate software engineer based in the United States.
                    My journey in tech started with a curiosity for how things work, which quickly
                    evolved into a love for building software that solves real-world problems.
                  </p>
                  <p>
                    I specialize in <span className="text-[#e30b5d] font-medium">full-stack development</span>, with a strong focus on the React ecosystem
                    (Next.js, TypeScript) and modern backend architectures. I strongly believe in
                    writing clean, maintainable code and creating intuitive user experiences.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new technologies, contributing
                    to open source, or enjoying a good cup of coffee while brainstorming my next project.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image with Frame */}
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center perspective-1000">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="/kev.jpeg"
                    alt="Kevin Cruz Lopez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
