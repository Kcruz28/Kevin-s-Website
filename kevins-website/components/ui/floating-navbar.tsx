"use client";
import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconHome,
  IconMessage,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

const defaultItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4" />, // Removed explicit color
  },
  {
    name: "Skills",
    link: "/skills",
    icon: <GiSkills className="h-4 w-4" />, // Removed explicit color
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <GrProjects className="h-4 w-4" />, // Removed explicit color
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4" />, // Removed explicit color
  },
];

export const FloatingNav = () => {
  const navItems = defaultItems;
  const [visible] = React.useState(true);
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const isDarkMode = theme === "dark";
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
          "flex max-w-fit fixed top-3 inset-x-0 mx-auto border border-transparent rounded-xl dark:bg-black bg-white px-8 py-3 items-center justify-center space-x-8",
          "bg-[#e30b5d] dark:bg-[#e30b5d] shadow-xl shadow-[#e30b5d]/30 dark:shadow-[#e30b5d]/30",
          "z-50"
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive =
            pathname === navItem.link ||
            (pathname.startsWith(navItem.link) && navItem.link !== "/");

          return (
            <Link
              prefetch={true}
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 font-bold transition-all duration-200 ease-in-out hover:cursor-pointer rounded-lg px-2 py-1",
                "!text-white dark:!text-white",
                "hover:scale-110 hover:bg-white dark:hover:bg-white hover:!text-[#e30b5d] dark:hover:!text-[#e30b5d]",
                isActive &&
                  "bg-white dark:bg-white !text-[#e30b5d] dark:!text-[#e30b5d]"
              )}
            >
              <span className="block sm:hidden flex items-center justify-center">
                {navItem.icon}
              </span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          );
        })}

        <button
          onClick={() => {
            setTheme(isDarkMode ? "light" : "dark");
          }}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:scale-110 transition-transform"
        >
          {isDarkMode ? (
            <IconSun className="h-5 w-5" />
          ) : (
            <IconMoon className="h-5 w-5" />
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
