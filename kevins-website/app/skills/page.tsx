"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { FaCode ,FaServer } from "react-icons/fa";
import { BsStack, BsServer } from "react-icons/bs";

import React, { useState } from "react";
import {
  programmingLanguages,
  webTechnologies,
  frameworksAndLibraries,
  backendSkills,
  devOpsSkills,
} from "@/data/skills_data";
import { FlatCard } from "@/components/ui/card";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const skillsByCategory = {
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
      skills: backendSkills.filter((skill) => skill.category === "Backend"),
    },
    databases: {
      title: "Databases & Cloud",
      skills: backendSkills.filter(
        (skill) => skill.category === "Databases & Cloud"
      ),
    },
    web: {
      title: "Web Technologies",
      skills: webTechnologies,
    },
    other: {
      title: "Development & Tools",
      skills: devOpsSkills,
    }
  };

  const categories = [
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
    {
      id: "backend",
      name: "Backend",
       icon: <FaServer className="h-5 w-5" />,
    },
    {
      id: "databases",
      name: "Databases",
      icon: <BsServer className="h-5 w-5" />,
    },
    {
      id: "other",
      name: "Other Skills",
      icon: <FaCode className="h-5 w-5" />,
    },
  ];

  const activeSkillCategory = skillsByCategory[activeCategory];
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingNav />
      <div className="flex flex-col gap-6 mt-16">
        <h1 className="text-xl md:text-9xl font-bold text-left text-black dark:text-white">
          My
          <br />
          Skills
        </h1>
        <p className="text-xl md:text-2xl text-left text-black dark:text-white">
          Here are some of the skills I have acquired over the years.
        </p>
      </div>

      {/* // Category buttons */}
      <div className="flex flex-wrap gap-2 md:gap-4 justify-start mt-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeCategory === category.id
                ? "bg-[#e30b5d] text-white font-bold "
                : "bg-black text-white font-bold dark:bg-white dark:text-black hover:cursor-pointer hover:scale-105"
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold text-left text-black dark:text-white mb-4">
          {activeSkillCategory.title}
        </h1>

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
