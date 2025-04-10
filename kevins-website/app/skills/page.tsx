"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaCode ,FaServer } from "react-icons/fa";
import { BsStack, BsServer } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background">
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
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/kev.jpeg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
