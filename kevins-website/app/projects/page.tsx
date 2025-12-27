import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThreeDCard } from "@/components/ui/3d-card";
import { TitleCard } from "@/components/title-card";

const projectInfo = [
  {
    projects: "AI Loteria",
    description:
      "A fun and interactive game of Loteria, powered by AI. Play against the computer or challenge your friends",
    githubLink: "https://github.com/Kcruz28/AI-Loteria",
    image: "/loteria_deck.jpg",
    id: "loteria",
  },
  {
    projects: "SHPE Tech Team Website",
    description:
      "The official website for the SHPE Tech Team, showcasing our projects and events",
    githubLink: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
    image: "/shpelogo.png",
    id: "shpe-tech-team",
  },
  {
    projects: "Ticket Masterer",
    description:
      "Academic project that we compare and share the best ticket prices for events",
    githubLink: "https://github.com/ajay-del-bot/CS411_CRUDApp",
    image: "/tickets.webp",
    id: "ticket-masterer",
  },
  {
    projects: "NetWhiz Project",
    description: "A website where it has lessons about Computer Network",
    githubLink: "https://github.com/Networking-Platform/NetWhiz",
    image: "/network.jpg",
    id: "netwhiz",
  },
  {
    projects: "Tic Tac Toe",
    description: "A simple tic tac toe game that is played in the terminal",
    githubLink: "https://github.com/Kcruz28/tic-tac-toe",
    image: "/tic tac toe.jpg",
    id: "tic-tac-toe",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-4 md:px-20 pb-20 pt-24 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <TitleCard
        title1="My"
        title2="Projects"
        description="Here's a showcase of projects I've built, demonstrating my skills and passion for development."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-1">
        {projectInfo.map((project, index) => (
          <ThreeDCard
            key={index}
            projectName={project.projects}
            description={project.description}
            githubLink={project.githubLink}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
}
