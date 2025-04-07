"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconHome, IconMessage, IconUser} from "@tabler/icons-react";



const defaultItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 !text-white dark:!text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <IconUser className="h-4 w-4 !text-white dark:!text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconUser className="h-4 w-4 !text-white dark:!text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white dark:text-white" />
      ),
    },
  ];

export const FloatingNav = () => {

  const navItems = defaultItems;
  const [visible] = React.useState(true);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-3 inset-x-0 mx-auto border border-transparent rounded-xl dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 items-center justify-center space-x-8",
          "bg-[#e30b5d] dark:bg-[#e30b5d] shadow-lg"
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative !text-white dark:!text-white items-center flex space-x-1 font-bold hover:scale-110 transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-white dark:hover:bg-white rounded-lg px-2 py-1 hover:!text-[#e30b5d] dark:hover:!text-[#e30b5d]"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

