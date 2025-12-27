// app/skills/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    icon: <BsStack className="h-5 w-5 " />,
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
    <div className="min-h-screen px-4 md:px-20 pb-20 sm:p-0">
      <FloatingNav />
      <TitleCard
        title1="My"
        title2="Skills"
        description="Here are some of the skills I have acquired over the years."
      />

      <div className="flex flex-wrap gap-3 md:gap-4 justify-start mt-8">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium overflow-hidden group ${activeCategory === c.id
                ? "text-white shadow-[0_0_20px_rgba(227,11,93,0.3)] scale-105"
                : "bg-white/80 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-white/10 hover:scale-105 border border-black/5 dark:border-white/10 backdrop-blur-sm"
              }`}
          >
            {activeCategory === c.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {c.icon}
              <span>{c.name}</span>
            </span>
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
