"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

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
    icon: <IconMessage className="h-4 w-4 text-white dark:text-white" />,
  },
];

export const FloatingNav = () => {
  const navItems = defaultItems;
  const [visible] = React.useState(true);
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key="floating-nav"
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
          "flex max-w-fit fixed top-3 inset-x-0 mx-auto border border-transparent rounded-xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 items-center justify-center space-x-8",
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

        {isMounted && (
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-black text-gray-800 dark:text-white hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              <IconSun className="h-5 w-5" />
            ) : (
              <IconMoon className="h-5 w-5" />
            )}
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
