// app/skills/page.tsx
"use client";

import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FlatCard } from "@/components/ui/card";
import { FaCode, FaServer } from "react-icons/fa";
import { BsStack, BsServer } from "react-icons/bs";
import { TitleCard } from "@/components/title-card";

import {
  programmingLanguages,
  webTechnologies,
  frameworksAndLibraries,
  backendSkills,
  devOpsSkills,
} from "@/data/skills_data";


type Category =
  | "languages"
  | "frameworks"
  | "backend"
  | "databases"
  | "web"
  | "other";

export interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
  category?: string;
}


const skillsByCategory: Record<Category, { title: string; skills: Skill[] }> = {
  languages: {
    title: "Programming Languages",
    skills: programmingLanguages,
  },
  frameworks: {
    title: "Frameworks & Libraries",
    skills: frameworksAndLibraries,
  },
  backend: {
    title: "Backend Technologies",
    // filter backendSkills which is already Skill[]
    skills: backendSkills.filter((s) => s.category === "Backend"),
  },
  databases: {
    title: "Databases & Cloud",
    skills: backendSkills.filter((s) => s.category === "Databases & Cloud"),
  },
  web: {
    title: "Web Technologies",
    skills: webTechnologies,
  },
  other: {
    title: "Development & Tools",
    skills: devOpsSkills,
  },
};

const categories: { id: Category; name: string; icon: React.ReactNode }[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: <FaCode className="h-5 w-5" />,
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <BsStack className="h-5 w-5" />,
  },
  { id: "backend", name: "Backend", icon: <FaServer className="h-5 w-5" /> },
  {
    id: "databases",
    name: "Databases",
    icon: <BsServer className="h-5 w-5" />,
  },
  { id: "other", name: "Other Skills", icon: <FaCode className="h-5 w-5" /> },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("languages");

  const activeSkillCategory = skillsByCategory[activeCategory];

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <FloatingNav />
      <TitleCard
        title1="My"
        title2="Skills"
        description="Here are some of the skills I have acquired over the years."
      />

      <div className="flex flex-wrap gap-2 md:gap-4 justify-start mt-4">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeCategory === c.id
                ? "bg-[#e30b5d] text-white font-bold"
                : "bg-black text-white dark:bg-white dark:text-black hover:scale-105"
            }`}
          >
            {c.icon}
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{activeSkillCategory.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeSkillCategory.skills.map((skill) => (
            <FlatCard
              key={skill.name}
              name={skill.name}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
