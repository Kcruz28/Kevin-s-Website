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
    title: "SHPE Tech Team AI Loteria",
    description: `AI Lotería is a modern take on the traditional Mexican bingo-style game, built as part of SHPE Tech Team. I developed the entire AI system, creating a custom PyTorch CNN capable of detecting up to 16 Lotería cards in real time using two multithreaded camera feeds. I also handled the backend using Python Flask and helped integrate it with a React frontend. While the rest of the team focused on building the web interface, I guided them through best practices in full-stack development, acting as both the AI lead and technical mentor.`,
    imageUrl: "/loteria_di.jpg",
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
    <div className="max-w-3xl mx-auto px-4 py-10 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black dark:text-white transition duration-500">
        {project.title}
      </h1>

      {project.imageUrl && (
        <div className="mb-8 group transition duration-300">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-xl shadow-lg group-hover:shadow-[0_0_25px_#e30b5d] transition-shadow duration-500"
          />
        </div>
      )}

      <div className="mb-8 bg-white/80 dark:bg-black/60 backdrop-blur-md p-6 rounded-xl shadow-md border border-white transition duration-500">
        <p className="text-lg whitespace-pre-line text-black dark:text-white">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-[#e30b5d] hover:scale-105 transition-all shadow-md"
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
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-[#e30b5d] hover:scale-105 transition-all shadow-md"
          >
            <FaGithub />
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}
