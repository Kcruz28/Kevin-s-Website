"use client";

import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";

interface ProjectDetails {
  [key: string]: {
    title: string;
    description: string;
    imageUrl?: string;
    websiteUrl?: string;
    githubUrl?: string;
    techStack?: string[]; // Adding this for the new layout
  };
}

const projectDetails: ProjectDetails = {
  loteria: {
    title: "AI Loteria",
    description: `I built an interactive web application that recognizes Lotería cards in real time using dual camera feeds. The app automatically matches drawn cards for autonomous gameplay, all showcased through an intuitive Gradio interface deployed on Hugging Face. Highlighting real-time computer vision and easy user interaction. This project served as the central piece of our exhibit at the Engineering Open House (EOH), drawing visitors’ attention to the possibilities of modern technology.`,
    imageUrl: "/loteria_di.jpg",
    websiteUrl:
      "https://huggingface.co/spaces/LaFlame10/AI_Loteria_Detection_YOLO8V",
    githubUrl: "https://github.com/Kcruz28/AI-Loteria",
    techStack: ["Python", "YOLOv8", "Gradio", "Hugging Face"]
  },
  "shpe-tech-team": {
    title: "SHPE Tech Team Website",
    description: `The official website for the SHPE Tech Team highlights our projects and events, and serves as a central hub for engaging current and prospective members. I led a team of students in building the site using JavaScript and CSS, focusing on modern web design and practical development experience. Our main goal was to introduce the SHPE Tech Team to visitors, promote our achievements, and encourage new engineers to join us. The website was showcased at the Engineering Open House (EOH), helping spread awareness about our community and attract more talent to our organization.`,
    imageUrl: "/shpelogo.png",
    websiteUrl: "https://shpe-tech-team.github.io/AI_Loteria_24-25/",
    githubUrl: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
    techStack: ["React", "JavaScript", "CSS", "GitHub Pages"]
  },
  "ticket-masterer": {
    title: "Ticket Masterer",
    description: `Ticket Masterer is a web app designed to help users find the best ticket prices for events. I built a Python Flask backend connected to a Google Cloud-hosted SQL database, managing over 1,000 records. I also designed the database schema and optimized queries to ensure quick data access. The project gave me a chance to dive into cloud integration and backend optimization, all while creating a smooth, user-friendly experience.`,
    githubUrl: "https://github.com/ajay-del-bot/CS411_CRUDApp",
    techStack: ["Python", "Flask", "SQL", "Google Cloud"]
  },
  netwhiz: {
    title: "NetWhiz Project",
    description: `NetWhiz is an interactive learning platform that teaches computer networking in a style inspired by Duolingo. I worked alongside a 10-person team, helping to build a modular frontend using React, TypeScript, and React Flow. My focus was on creating reusable components and improving the structure of the app to enhance learning and engagement. It was a great experience in collaborative development, UI/UX thinking, and frontend architecture.`,
    imageUrl: "/NetWhiz.jpg",
    githubUrl: "https://github.com/Networking-Platform/NetWhiz",
    techStack: ["React", "TypeScript", "React Flow", "Tailwind"]
  },
  "tic-tac-toe": {
    title: "Tic Tac Toe",
    description: `This simple command-line Tic Tac Toe game, written in C, was a fun project to practice programming fundamentals. It supports two players, runs entirely in the terminal, and helped me reinforce logic, user input handling, and basic game design in a low-level language.`,
    imageUrl: "/tictactoedemo.png",
    githubUrl: "https://github.com/Kcruz28/tic-tac-toe",
    techStack: ["C", "Terminal"]
  },
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const router = useRouter();
  const project = projectDetails[projectId as string];

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-center text-red-500 text-xl">Project not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] selection:bg-[#e30b5d] selection:text-white">
      <FloatingNav />

      {/* Immersive Hero Header */}
      <div className="relative h-[60vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e30b5d]/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl mx-auto"
        >
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {project.techStack?.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600 dark:from-white dark:to-gray-400 mb-8"
            style={{ lineHeight: 1.1 }}
          >
            {project.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#111] dark:bg-white text-white dark:text-black font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <FaExternalLinkAlt />
                <span>Visit Live</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-black dark:text-white font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                <span>View Code</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Cinematic Showcase Image */}
      {project.imageUrl && (
        <div className="relative w-full max-w-4xl mx-auto -mt-32 px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#111]"
          >
            <div className="aspect-video relative w-full bg-gray-100 dark:bg-zinc-900 max-h-[500px]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-contain bg-black"
                priority
              />
            </div>
            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Glow under the image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9] opacity-20 blur-3xl -z-10 rounded-[3rem]" />
        </div>
      )}

      {/* Narrative Section */}
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg dark:prose-invert prose-neutral mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white border-b pb-4 border-gray-200 dark:border-gray-800">
            About the Project
          </h3>
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line font-light">
            {project.description}
          </p>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => router.push("/projects")}
            className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}
