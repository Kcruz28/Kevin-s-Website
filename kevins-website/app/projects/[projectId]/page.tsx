"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "next/navigation";
import Image from "next/image";

interface ProjectDetails {
  [key: string]: {
    title: string;
    description: string;
    imageUrl?: string;
    websiteUrl?: string;
    githubUrl?: string;
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
  },
  "shpe-tech-team": {
    title: "SHPE Tech Team Website",
    description: `The official website for the SHPE Tech Team highlights our projects and events, and serves as a central hub for engaging current and prospective members. I led a team of students in building the site using JavaScript and CSS, focusing on modern web design and practical development experience. Our main goal was to introduce the SHPE Tech Team to visitors, promote our achievements, and encourage new engineers to join us. The website was showcased at the Engineering Open House (EOH), helping spread awareness about our community and attract more talent to our organization.`,
    imageUrl: "/shpelogo.png",
    websiteUrl: "https://shpe-tech-team.github.io/AI_Loteria_24-25/",
    githubUrl: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
  },
  "ticket-masterer": {
    title: "Ticket Masterer",
    description: `Ticket Masterer is a web app designed to help users find the best ticket prices for events. I built a Python Flask backend connected to a Google Cloud-hosted SQL database, managing over 1,000 records. I also designed the database schema and optimized queries to ensure quick data access. The project gave me a chance to dive into cloud integration and backend optimization, all while creating a smooth, user-friendly experience.`,
    githubUrl: "https://github.com/ajay-del-bot/CS411_CRUDApp",
  },
  netwhiz: {
    title: "NetWhiz Project",
    description: `NetWhiz is an interactive learning platform that teaches computer networking in a style inspired by Duolingo. I worked alongside a 10-person team, helping to build a modular frontend using React, TypeScript, and React Flow. My focus was on creating reusable components and improving the structure of the app to enhance learning and engagement. It was a great experience in collaborative development, UI/UX thinking, and frontend architecture.`,
    imageUrl: "/NetWhiz.jpg",
    githubUrl: "https://github.com/Networking-Platform/NetWhiz",
  },
  "tic-tac-toe": {
    title: "Tic Tac Toe",
    description: `This simple command-line Tic Tac Toe game, written in C, was a fun project to practice programming fundamentals. It supports two players, runs entirely in the terminal, and helped me reinforce logic, user input handling, and basic game design in a low-level language.`,
    imageUrl: "/tictactoedemo.png",
    githubUrl: "https://github.com/Kcruz28/tic-tac-toe",
  },
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectDetails[projectId as string];

  if (!project)
    return <p className="text-center text-red-500 mt-10">Project not found.</p>;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-2 py-10 animate-fade-in">
      <div className="relative w-full max-w-5xl rounded-3xl shadow-2xl border border-white/30 dark:border-white/10 bg-white/80 dark:bg-black/70 p-0 sm:p-0 overflow-hidden">
        {/* Accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9]" />

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 p-8 lg:p-14">
          {/* Image section */}
          {project.imageUrl && (
            <div className="flex-[1.7] flex items-center justify-center mb-8 lg:mb-0">
              <div className="relative w-full max-w-[1000px] aspect-video mx-auto lg:mx-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl shadow-2xl transition-all duration-300"
                  sizes="(max-width: 1600px) 100vw, 1000px"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-white/40 dark:border-white/20 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Details section */}
          <div className="flex-[1.5] flex flex-col justify-center min-w-0">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-black dark:text-white tracking-tight flex items-center gap-3">
              <span className="inline-block w-2 h-10 bg-gradient-to-b from-[#e30b5d] to-[#6366f1] rounded-full mr-2" />
              {project.title}
            </h1>
            <div className="mb-8 bg-white/80 dark:bg-black/60 backdrop-blur p-7 rounded-xl shadow border border-black/10 dark:border-white/10">
              <p className="text-xl whitespace-pre-line text-black dark:text-white leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-2">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#0ea5e9] text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#e30b5d] hover:scale-105 transition-all"
                >
                  <FaExternalLinkAlt />
                  Visit Website
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#e30b5d] hover:scale-105 transition-all"
                >
                  <FaGithub />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
