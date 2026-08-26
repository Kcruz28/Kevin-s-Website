"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { projects, stack, tickerItems, Project } from "@/lib/data";

/* ─── Cursor halo ─────────────────────────────────────────────────────── */
export function Halo() {
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[data-hover]")) setHover(true);
    };
    const out = () => setHover(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [x, y]);

  if (!mounted) return null;
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-screen"
      style={{ left: sx, top: sy }}
      animate={{
        width: hover ? 90 : 28,
        height: hover ? 90 : 28,
        x: hover ? -45 : -14,
        y: hover ? -45 : -14,
        backgroundColor: hover ? "rgba(212,255,58,0.25)" : "rgba(212,255,58,0.12)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    />
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────────── */
export function Nav() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit", minute: "2-digit", hour12: false,
      }).format(new Date());
    setTime(fmt());
    const i = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { l: "Work", h: "#work" },
    { l: "Stack", h: "#stack" },
    { l: "About", h: "#about" },
    { l: "Contact", h: "#contact" },
  ];

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 lg:hidden">
        <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-line bg-void/75 px-3 py-1.5 font-mono text-[11px] tracking-wider text-bone backdrop-blur-xl">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
          </span>
          KCL
        </a>
        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-void/75 backdrop-blur-xl">
          <span className="relative block h-3 w-4">
            <span className="absolute left-0 h-px w-4 bg-bone transition-all duration-300" style={{ top: open ? "50%" : "0", transform: open ? "rotate(45deg) translateY(-50%)" : "none" }} />
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-bone transition-opacity duration-200" style={{ opacity: open ? 0 : 1 }} />
            <span className="absolute left-0 h-px w-4 bg-bone transition-all duration-300" style={{ top: open ? "50%" : "calc(100% - 1px)", transform: open ? "rotate(-45deg) translateY(-50%)" : "none" }} />
          </span>
        </button>
      </nav>

      <div className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-void/90 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="absolute inset-x-5 top-20 rounded-2xl border border-line bg-ink/95 p-6">
          <ul className="space-y-4">
            {items.map((it, i) => (
              <li key={it.l}>
                <a href={it.h} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-line pb-3 text-xl font-medium text-bone">
                  <span>{it.l}</span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-fog">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            <span>CHICAGO, IL</span>
            <span className="text-acid">{time || "--"} CT</span>
          </div>
        </div>
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 hidden justify-center px-8 py-4 lg:flex">
        <div className="flex w-full max-w-[1500px] items-center justify-between gap-3 rounded-full border border-line bg-void/70 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 font-mono text-[12px] tracking-wider text-bone">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            KCL / KEVIN.SH
          </a>
          <ul className="flex items-center gap-7">
            {items.map((it) => (
              <li key={it.l}>
                <a href={it.h} className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog transition-colors hover:text-acid">{it.l}</a>
              </li>
            ))}
          </ul>
          <div className="font-mono text-[11px] tracking-wider text-fog">CHI {time || "--"}</div>
        </div>
      </nav>
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(8,9,12,0.7) 100%)" }} />
      <motion.div style={{ y: titleY, opacity: titleO }} className="relative z-10 flex h-full flex-col justify-between px-6 pt-28 pb-12 md:px-10">
        <div className="mx-auto flex w-full max-w-[1500px] items-start justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <div className="text-acid">{"// portfolio.2026"}</div>
            <div className="mt-1">v3.0.0 : production</div>
          </div>
          <div className="hidden text-right font-mono text-[11px] uppercase tracking-[0.2em] text-fog md:block">
            <div>41.8781° N</div>
            <div>87.6298° W</div>
            <div className="mt-1 text-acid">CHICAGO, IL</div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1500px]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            <span className="text-acid">▸</span> SOFTWARE ENGINEER
          </motion.div>
          <h1 className="font-sans font-bold leading-[0.85] tracking-[-0.04em]" style={{ fontSize: "clamp(4rem, 13.5vw, 13rem)" }}>
            <motion.span className="block" initial={{ opacity: 0, y: 60, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>KEVIN</motion.span>
            <motion.span className="block text-bone" initial={{ opacity: 0, y: 60, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>CRUZ <span className="text-acid">LOPEZ</span></motion.span>
          </h1>
        </div>
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1 }} className="max-w-md text-[15px] leading-relaxed text-bone/75">
            Engineering across the stack from kernel to cursor. Currently shipping full-stack systems, ML, and cloud infrastructure from Chicago.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.2 }} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
            <span className="text-acid">scroll</span>
            <span className="h-px w-12 bg-line">
              <motion.span className="block h-full bg-acid" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            </span>
            <span>↓</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Ticker ──────────────────────────────────────────────────────────── */
export function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-void/80 py-3 backdrop-blur">
      <div className="marquee flex gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-bone/70">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">{t} <span className="text-acid">✦</span></span>
        ))}
      </div>
    </div>
  );
}

/* ─── Typographic Card Art ────────────────────────────────────────────── */
function CardArt({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 bg-[#0a0b0e]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,230,225,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(232,230,225,0.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute -right-10 -top-14 h-56 w-56 rounded-full opacity-25 blur-[80px]"
        style={{ background: project.glow }}
      />
      <div
        aria-hidden
        className="absolute -right-2 top-1/2 -translate-y-1/2 select-none font-mono font-bold leading-none tracking-tighter"
        style={{ fontSize: "8.5rem", color: "transparent", WebkitTextStroke: `1px ${project.glow}30` }}
      >
        {project.n}
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-5">
        <div className="truncate font-mono text-[11px] text-bone/80">
          <span className="text-acid">$</span> <span className="text-fog">{project.cmd}</span>
          <span className="caret" />
        </div>
        <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.22em] text-fog">
          kevin.dev / {project.category}
        </div>
      </div>
    </div>
  );
}

/* ─── Project Card ────────────────────────────────────────────────────── */
export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = !!project.links && project.links.length > 0;

  return (
    <motion.div
      layout
      data-hover
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block overflow-hidden rounded-xl border border-line bg-ink/70 backdrop-blur"
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />

      <div className="relative aspect-[4/3] overflow-hidden pointer-events-none">
        {project.image ? (
          <Image src={project.image} alt={project.name} fill className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]">
            <CardArt project={project} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 100%, ${project.glow}33, transparent 70%)` }} />
        
        <div className="absolute inset-x-3 top-3 flex items-start justify-between font-mono text-[10px] tracking-[0.2em] z-20">
          <span className="rounded-sm bg-void/60 px-1.5 py-0.5 text-acid backdrop-blur-sm">{project.n}</span>
          <span className="rounded-sm bg-void/60 px-1.5 py-0.5 text-fog backdrop-blur-sm">{project.year}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 z-30 transition-opacity duration-400 md:group-hover:opacity-0 pointer-events-none">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-[17px] font-semibold tracking-tight text-bone">{project.name}</h3>
            <span className="font-mono text-acid transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </div>
          {hasLinks ? (
            <div className="mt-2.5 flex flex-wrap gap-1.5 md:hidden pointer-events-auto">
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="relative z-40 rounded-md border border-line bg-void/80 px-2 py-1 font-mono text-[10px] text-bone/90 hover:text-acid transition-colors">
                  {link.label.split(" (")[0]} ↗
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {project.stack.slice(0, 3).map((s) => (
                <span key={s} className="rounded-sm border border-bone/15 bg-void/40 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-bone/70 backdrop-blur-sm">{s}</span>
              ))}
            </div>
          )}
        </div>

        <div className="absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-ink via-ink/85 to-ink/30 p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100 md:flex z-30 pointer-events-none">
          <div className="font-mono text-[10px] tracking-[0.22em] text-acid">{project.n} / {project.year}</div>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-bone">{project.name}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-bone/75">{project.blurb}</p>
          {hasLinks ? (
            <div className="mt-3.5 space-y-1.5 pointer-events-auto">
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="relative z-40 flex items-center justify-between rounded-md border border-line bg-cell/40 px-3 py-1.5 font-mono text-[11px] text-bone transition-colors hover:border-acid hover:text-acid">
                  <span>{link.label}</span>
                  <span className="text-acid">↗</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-sm border border-line bg-cell/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bone/80">{s}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section Heading ────────────────────────────────────────────────── */
export function SectionHead({ num, label, title, accent }: { num: string; label: string; title: React.ReactNode; accent?: string; }) {
  return (
    <div className="mb-12 md:mb-20">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
        <span className="text-acid">{num}</span>
        <span className="h-px w-8 bg-line" />
        <span>{label}</span>
      </div>
      <h2 className="mt-5 font-sans font-bold leading-[0.95] tracking-[-0.03em]" style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", color: accent ?? "#e8e6e1" }}>
        {title}
      </h2>
    </div>
  );
}

/* ─── Work ────────────────────────────────────────────────────────────── */
export function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["All", "Systems & Robotics", "AI & Agents", "Full-Stack & Web", "Cloud Systems", "Open Source"];
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section id="work" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead num="01" label="Selected Work" title={<>Things I&apos;ve <span className="text-acid">built</span><span className="text-flame">.</span></>} />
        
        <div className="mb-10 flex flex-wrap items-center gap-1.5 border-b border-line pb-6">
          {categories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button key={cat} onClick={() => handleCategoryChange(cat)} className={`relative px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${active ? "text-void font-semibold" : "text-fog hover:text-bone"}`} style={{ WebkitTapHighlightColor: "transparent" }}>
                {active && <motion.span layoutId="active-category-pill" className="absolute inset-0 z-0 rounded-full bg-acid" transition={{ type: "spring", stiffness: 350, damping: 26 }} />}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p) => (
              <motion.div key={p.n} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setVisibleCount((prev) => prev + 6)} className="group relative inline-flex items-center gap-3 rounded-full border border-line bg-ink/60 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-acid hover:text-acid">
              <span>Show More</span>
              <span className="text-fog group-hover:text-acid transition-colors">↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Stack ───────────────────────────────────────────────────────────── */
export function Stack() {
  const groups = Object.entries(stack);
  return (
    <section id="stack" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead num="02" label="Stack" title={<>The <span className="text-violet">tools</span> in rotation<span className="text-acid">.</span></>} />
        <div className="rounded-2xl border border-line bg-ink/60 p-5 md:rounded-3xl md:p-10">
          <div className="mb-5 flex items-center justify-between border-b border-line pb-3 md:mb-6 md:pb-4">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="h-2 w-2 rounded-full bg-flame md:h-2.5 md:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-acid md:h-2.5 md:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-violet md:h-2.5 md:w-2.5" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:text-[11px]">~/kevin/stack.zsh</span>
          </div>
          <div className="mb-5 font-mono text-[12px] text-bone/70 md:mb-6 md:text-[13px]">
            <span className="text-acid">kevin@chi</span><span className="text-fog">:</span><span className="text-violet">~</span><span className="text-fog">$ </span><span className="caret">cat ./stack.json</span>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
            {groups.map(([group, items], gi) => (
              <motion.div key={group} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: gi * 0.08 }}>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-acid md:text-[11px]">▸ {group}</div>
                <ul className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:block md:space-y-2">
                  {items.map((it) => (
                    <li key={it} className="rounded-md border border-line bg-cell/40 px-2 py-1 font-mono text-[11.5px] text-bone/85 transition-colors hover:text-acid md:border-0 md:bg-transparent md:p-0 md:text-[14px]">
                      <span className="hidden text-fog md:inline">{"› "}</span>{it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────────── */
export function About() {
  return (
    <section id="about" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead num="03" label="About" title={<>Systems mind. <br /><span className="text-flame">Builder&apos;s</span> hands.</>} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink" style={{ aspectRatio: "4/5" }}>
              <Image src="/kev.jpeg" alt="Kevin Cruz Lopez" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 40vw" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="text-acid">kevin.jpg</span><span className="text-fog">2026</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-[16px] leading-[1.7] text-bone/85">
              <p>I&apos;m a software engineer in Chicago, working across full-stack web, robotics, and cloud infrastructure. The seams between layers are where I&apos;m most at home.</p>
              <p>Over the last three years I&apos;ve built and shipped projects ranging from adversarial card-game agents in PyTorch, to networking education platforms in Next.js, to containerized services running on Google Cloud. The work that keeps me interested is whatever sits closest to the metal and still has a person on the other end.</p>
              <p>As a member of the Society of Hispanic Professional Engineers, I lead technical projects that bridge engineering education and real-world application.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4">
              {[ { k: "Based", v: "Chicago, IL" }, { k: "Building", v: "4+ years" }, { k: "Affil.", v: "SHPE · UIUC" }, { k: "Status", v: "Open 2026" } ].map((d) => (
                <div key={d.k}>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">{d.k}</div>
                  <div className="mt-2 text-[18px] font-medium text-bone">{d.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────────── */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-flame/15 blur-[120px]" />
      <div className="relative mx-auto max-w-[1500px]">
        <SectionHead num="04" label="Contact" title={<>Let&apos;s build <br />something <span className="text-acid">real</span><span className="text-flame">.</span></>} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <a href="mailto:kcruzlopez10@gmail.com" data-hover className="group flex w-full max-w-full items-center gap-2.5 rounded-2xl border border-line bg-ink/60 px-4 py-3.5 backdrop-blur transition-colors hover:border-acid sm:inline-flex sm:w-auto sm:gap-4 sm:rounded-full sm:px-7 sm:py-5">
              <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog group-hover:text-acid sm:text-[11px]">Email</span>
              <span className="hidden h-5 w-px shrink-0 bg-line sm:block" />
              <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-bone sm:flex-none sm:text-lg md:text-xl">kcruzlopez10@gmail.com</span>
              <span className="shrink-0 text-acid">↗</span>
            </a>
            <div className="mt-10 font-mono text-[13px] leading-[1.8] text-bone/70">
              <div><span className="text-acid">$</span> <span className="text-fog">curl</span> -X POST kevin.dev/hi</div>
              <div><span className="text-acid">$</span> <span className="text-fog">await</span> response<span className="text-violet">()</span><span className="caret" /></div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">Elsewhere</div>
            <ul className="mt-5 space-y-3">
              {[ { l: "LinkedIn", h: "https://www.linkedin.com/in/kcruz10/", icon: <Linkedin className="w-5 h-5" /> }, { l: "GitHub", h: "https://github.com/Kcruz28", icon: <Github className="w-5 h-5" /> }, { l: "Email", h: "mailto:kcruzlopez10@gmail.com", icon: <Mail className="w-5 h-5" /> } ].map((s) => (
                <li key={s.l}>
                  <a href={s.h} target="_blank" rel="noopener noreferrer" data-hover className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-acid">
                    <div className="flex items-center gap-3">
                      <span className="text-bone/50 group-hover:text-acid transition-colors">{s.icon}</span>
                      <span className="text-lg text-bone group-hover:text-acid">{s.l}</span>
                    </div>
                    <span className="font-mono text-sm text-fog group-hover:text-acid">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fog md:flex-row md:items-center md:justify-between">
        <span>© Kevin Cruz Lopez · 2026</span>
        <span className="text-bone/40">Built with Next · R3F · Tailwind</span>
        <span className="text-acid">END OF LINE</span>
      </div>
    </footer>
  );
}
