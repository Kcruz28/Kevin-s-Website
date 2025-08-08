"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMessage, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { ImFire } from "react-icons/im";

const defaultItems = [
  {
    name: "Home",
    link: "/",
    icon: <ImFire className="h-4 w-4" />,
  },
  {
    name: "Skills",
    link: "/skills",
    icon: <GiSkills className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <GrProjects className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4" />,
  },
];

export const FloatingNav = () => {
  const navItems = defaultItems;
  const [isMounted, setIsMounted] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;
  const isDarkMode = theme === "dark";
  return (
    <div
      style={{
        top: `${16 + scrollY}px`,
      }}
      className={cn(
        "group/nav flex max-w-fit fixed inset-x-0 mx-auto rounded-2xl border px-12 py-4 items-center justify-center gap-12 z-50",
        "bg-white/30 dark:bg-black/40 backdrop-blur-xl transition-colors duration-300",
        "border-white/70 dark:border-white/10",
        "shadow-[0_8px_32px_0_rgba(60,60,60,0.18)] dark:shadow-xl",
        "outline-none relative"
      )}
      tabIndex={0}
    >
      {/* Animated gradient outline (subtle, like the bar in page.tsx) */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl z-[-1] opacity-0 group-hover/nav:opacity-100 group-focus/nav:opacity-100 transition-opacity duration-300">
        <span
          className="block w-full h-full rounded-2xl border-4 border-transparent animate-navbar-gradient-outline"
          style={{
            background:
              "linear-gradient(90deg, #e30b5d, #6366f1, #0ea5e9, #e30b5d)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 50%",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </span>
      <style jsx global>{`
        @keyframes navbar-gradient-outline {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-navbar-gradient-outline {
          background-size: 200% 200%;
          animation: navbar-gradient-outline 2.5s linear infinite alternate;
          box-shadow: 0 0 8px 2px #e30b5d66, 0 0 16px 4px #6366f166,
            0 0 24px 8px #0ea5e966;
        }
      `}</style>
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
              "relative flex items-center justify-center gap-2 font-bold text-base transition-all duration-200 ease-in-out hover:cursor-pointer px-2 py-1",
              "text-black dark:text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.18)] dark:drop-shadow-none",
              "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:rounded-full after:opacity-0 after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#e30b5d] after:via-[#6366f1] after:to-[#0ea5e9]",
              "hover:after:opacity-100 hover:after:scale-100",
              isActive && "after:opacity-100 after:scale-100"
            )}
          >
            <div className="flex items-center justify-center h-4 w-4">
              {navItem.icon}
            </div>
            <span className="hidden sm:block text-sm leading-none">
              {navItem.name}
            </span>
          </Link>
        );
      })}

      <button
        onClick={() => {
          setTheme(isDarkMode ? "light" : "dark");
        }}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 dark:border-white/20 bg-white/30 dark:bg-black/40 backdrop-blur-md text-[#e30b5d] dark:text-[#e30b5d] hover:shadow-lg hover:shadow-[#e30b5d]/30 transition-all"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <IconSun className="h-5 w-5" />
        ) : (
          <IconMoon className="h-5 w-5" />
        )}
      </button>
      {/* Animated gradient accent bar */}
      <div className="absolute left-4 right-4 bottom-0 h-1 rounded-full bg-gradient-to-r from-[#e30b5d] via-[#6366f1] to-[#0ea5e9] animate-pulse opacity-80" />
    </div>
  );
};
