
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThreeDCard } from "@/components/ui/3d-card";

const projectInfo = [
  {
    projects: "SHPE Tech Team AI Loteria",
    description:
      "A fun and interactive game of Loteria, powered by AI. Play against the computer or challenge your friends",
    githubLink: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
    image: "/loteria_deck.jpg",
  },
  {
    projects: "Ticket Masterer",
    description:
      "Academic project that we compare and share the best ticket prices for events",
    githubLink: "https://github.com/ajay-del-bot/CS411_CRUDApp",
    image: "/tickets.webp",
  },
  {
    projects: "NetWhiz Project",
    description: "A website where it has lessons about Computer Network",
    githubLink: "https://github.com/Networking-Platform/NetWhiz",
    image: "/network.jpg",
  },
  {
    projects: "Tic Tac Toe",
    description: "A simple tic tac toe game that is played in the terminal",
    githubLink: "https://github.com/Kcruz28/tic-tac-toe",
    image: "/tic tac toe.jpg",
  },
];

export default function Projects() {
    return (
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
        <FloatingNav />
        <div className="flex flex-col gap-6 mt-16">
          <h1 className="text-xl md:text-9xl font-bold text-left text-black dark:text-white">
            My
            <br />
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-left text-black dark:text-white">
            Here's a showcase of projects I've built, demonstrating my skills
            and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-1">
          {projectInfo.map((project, index) => (
            <ThreeDCard
              key={index}
              projectName={project.projects}
              description={project.description}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
    );
 }

