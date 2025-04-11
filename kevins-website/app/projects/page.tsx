
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThreeDCard } from "@/components/ui/3d-card";

export default function Projects() {
    return (
      <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
          <ThreeDCard title="Project 1" description="sheeehs" />
          <ThreeDCard title="Project 1" description="sheeehs" />
          <ThreeDCard title="Project 1" description="sheeehs" />
          <ThreeDCard title="Project 1" description="sheeehs" />
          <ThreeDCard title="Project 1" description="sheeehs" />
          <ThreeDCard title="Project 1" description="sheeehs" />
        </div>
      </div>
    );
 }

