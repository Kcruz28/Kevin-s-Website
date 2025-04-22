"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundParticles() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const particleColor = currentTheme === "dark" ? "#ffffff" : "#000000";
  const particleCount = isMobile ? 30 : 80;
  
  return (
    <Particles
      key={currentTheme}
      className="absolute inset-0 z-[-1]"
      init={loadSlim}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: particleCount },
          color: { value: particleColor },
          shape: { type: "triangle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
            attract: { distance: 50, duration: 0.4, factor: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
