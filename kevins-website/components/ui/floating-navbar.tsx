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
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const isDarkMode = theme === "dark";
  return (
    <div
      className={cn(
        "group/nav flex max-w-fit fixed inset-x-0 mx-auto rounded-2xl border px-10 sm:px-12 py-3 sm:py-4 items-center justify-center gap-8 sm:gap-12 z-50",
        "bg-white/30 dark:bg-black/40 backdrop-blur-xl transition-colors duration-300",
        "border-white/70 dark:border-white/10",
        "shadow-[0_8px_32px_0_rgba(60,60,60,0.18)] dark:shadow-xl",
        "outline-none relative",
        "sticky-navbar", // Add custom class for additional styling if needed
        "mb-16" // Add margin bottom for spacing
      )}
      tabIndex={0}
    >
      {/* Animated gradient outline (always visible) */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl z-[-1] opacity-100 transition-opacity duration-300">
        <span
          className="block w-full h-full rounded-2xl border-0 animate-navbar-gradient-outline outline-none"
          style={{
            background:
              "linear-gradient(90deg, #e30b5d, #6366f1, #0ea5e9, #e30b5d)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 50%",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "exclude",
            maskComposite: "exclude",
          }}
        />
      </span>
      <style jsx global>{`
        /* Ensure the navbar stays visible when scrolling */
        .sticky-navbar {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          margin-bottom: 5rem;
        }

        /* Add padding to the top of the body to prevent content from hiding under navbar */
        body {
          padding-top: 5rem;
        }

        /* Animated gradient outline styles */
        .animate-navbar-gradient-outline {
          background-size: 200% 200%;
          animation: navbar-gradient-outline 2.5s linear infinite alternate;
          box-shadow: 0 0 8px 2px #e30b5d66, 0 0 16px 4px #6366f166,
            0 0 24px 8px #0ea5e966;
          border-width: 4px;
          border-style: solid;
          border-color: transparent;
        }

        @keyframes navbar-gradient-outline {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Mobile responsiveness adjustments */
        @media (max-width: 640px) {
          .sticky-navbar {
            width: 95% !important;
            padding: 0.85rem 1.25rem !important;
            border: 0 !important;
          }
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
        className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/40 dark:border-white/20 bg-white/30 dark:bg-black/40 backdrop-blur-md text-[#e30b5d] dark:text-[#e30b5d] transition-all"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <IconSun className="h-5 w-5" />
        ) : (
          <IconMoon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};
