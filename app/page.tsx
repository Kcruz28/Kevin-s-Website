"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Halo, Nav, Hero, Ticker, Work, Stack, About, Contact, Footer } from "@/components/HomeComponents";

const Scene = dynamic(() => import("./scene"), { ssr: false });

export default function Home() {
  const scrollRef = useRef(0);
  const [veil, setVeil] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const s = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      scrollRef.current = s;
      const vh = window.innerHeight;
      const past = Math.max(0, window.scrollY - vh * 0.4);
      const v = Math.min(past / (vh * 0.8), 1) * 0.85;
      setVeil(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Persistent 3D background */}
      <div className="fixed inset-0 z-0">
        <Scene scrollRef={scrollRef} />
      </div>
      {/* Scroll-driven dark veil */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-[background-color] duration-200"
        style={{ backgroundColor: `rgba(8,9,12,${veil})` }}
      />
      {/* Persistent grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] grid-bg opacity-30" />

      <Halo />
      <div className="noise" />

      <main className="relative z-10">
        <Nav />
        <Hero />
        <Ticker />
        <Work />
        <Stack />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
