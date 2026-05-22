"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

const Scene = dynamic(() => import("./scene"), { ssr: false });

/* ─── Data ────────────────────────────────────────────────────────────── */

const projects = [
  {
    n: "01",
    name: "Research Swarm",
    blurb:
      "A multi-agent LangGraph pipeline collaborating to read research PDFs, draft summaries, critique drafts, and produce refined briefs.",
    stack: ["Python", "LangGraph", "Ollama"],
    year: "2026",
    image: "/research_swarm.png",
    href: "https://github.com/Kcruz28/Research_Swarm",
    glow: "#d4ff3a",
    category: "AI & Agents",
  },
  {
    n: "02",
    name: "Robotic Arm RL",
    blurb:
      "A simulation and control environment for a physical robotic arm manipulator, training deep reinforcement learning agents for precision tasks.",
    stack: ["Python", "ROS2", "PyTorch", "Conda"],
    year: "2026",
    image: "/robotic_arm.png",
    href: "https://github.com/Kcruz28/robotic-arm",
    glow: "#6d4cff",
    category: "Systems & Robotics",
  },
  {
    n: "03",
    name: "Autonomous Vehicle Stack",
    blurb:
      "A full-scale autonomous driving stack built for CS 588, implementing sensor fusion (Lidar/Vision), Bayesian state localization, and path control.",
    stack: ["C++", "Python", "ROS2", "PyTorch"],
    year: "2026",
    image: "/cs588_vehicle.png",
    href: "https://github.com/Kcruz28/cs588_group14",
    glow: "#ff4d2e",
    category: "Systems & Robotics",
  },
  {
    n: "04",
    name: "Parasol Planning Library 2.0",
    blurb:
      "A high-performance C++ motion planning library implementing Probabilistic Roadmaps (PRMs), RRTs, and collision detection strategies.",
    stack: ["C++", "Python", "CMake"],
    year: "2026",
    image: "/parasol_ppl.png",
    href: "https://github.com/Kcruz28/Parasol-PPL-2.0",
    glow: "#6d4cff",
    category: "Systems & Robotics",
  },
  {
    n: "05",
    name: "Kubernetes ML Inference (MP13)",
    blurb:
      "Containerized machine learning model endpoints deployed as scalable microservices orchestrated on a Kubernetes cluster.",
    stack: ["Kubernetes", "Docker", "Flask", "ML Inference"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#6d4cff",
    category: "Cloud Systems",
  },
  {
    n: "06",
    name: "AutoML Pipeline (MP12)",
    blurb:
      "An automated machine learning pipeline executing data preprocessing, model selection, hyperparameter tuning, and registration.",
    stack: ["Python", "Scikit-Learn", "MLflow", "AWS"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#d4ff3a",
    category: "Cloud Systems",
  },
  {
    n: "07",
    name: "Spark GraphFrames & MLLib (MP11)",
    blurb:
      "Large-scale graph analytics (PageRank, Label Propagation) and predictive modeling using Spark GraphFrames and MLlib.",
    stack: ["PySpark", "GraphFrames", "MLlib", "Python"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#ff4d2e",
    category: "Cloud Systems",
  },
  {
    n: "08",
    name: "Real-Time Analytics Dashboard (MP10)",
    blurb:
      "Interactive data visualization dashboard rendering time-series metrics over log files ingested from distributed systems.",
    stack: ["Python", "Streamlit", "Matplotlib", "AWS"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#6d4cff",
    category: "Cloud Systems",
  },
  {
    n: "09",
    name: "Flink & Kinesis Streaming (MP9)",
    blurb:
      "Real-time stateful stream processing and sliding window analytics over high-throughput live events using Apache Flink and AWS Kinesis.",
    stack: ["Apache Flink", "AWS Kinesis", "Java", "Python"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#d4ff3a",
    category: "Cloud Systems",
  },
  {
    n: "10",
    name: "SparkSQL Analytics (MP8)",
    blurb:
      "Optimized query execution plans and distributed analytical processing over massive structured parquet datasets using SparkSQL.",
    stack: ["SparkSQL", "PySpark", "Parquet", "Hive"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#ff4d2e",
    category: "Cloud Systems",
  },
  {
    n: "11",
    name: "Spark MapReduce (MP7)",
    blurb:
      "Distributed text processing and batch analytical algorithms implemented from scratch on Apache Spark clusters.",
    stack: ["Apache Spark", "Python", "MapReduce", "Hadoop"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#6d4cff",
    category: "Cloud Systems",
  },
  {
    n: "12",
    name: "Kafka Message Broker (MP6)",
    blurb:
      "Event-driven streaming pipeline utilizing Apache Kafka for scalable message delivery, consumer groups, and partition management.",
    stack: ["Apache Kafka", "Python", "Docker"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#d4ff3a",
    category: "Cloud Systems",
  },
  {
    n: "13",
    name: "Aurora & ElastiCache Caching (MP5)",
    blurb:
      "Performance optimization for cloud databases through write-through and read-through caching using Redis and Amazon Aurora.",
    stack: ["Amazon Aurora", "Redis", "ElastiCache", "Python"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#ff4d2e",
    category: "Cloud Systems",
  },
  {
    n: "14",
    name: "Cloud-Native Full Stack App (MP4)",
    blurb:
      "A secure, containerized web application deployed on AWS managing persistent relational state, user sessions, and credentials.",
    stack: ["React", "Node", "Express", "PostgreSQL", "AWS"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#6d4cff",
    category: "Cloud Systems",
  },
  {
    n: "15",
    name: "AWS Lex & Lambda Bot (MP3)",
    blurb:
      "Serverless backend integrating AWS Lex NLP capabilities with Lambda handlers to execute complex database query workflows.",
    stack: ["AWS Lambda", "AWS Lex", "DynamoDB", "Python"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#d4ff3a",
    category: "Cloud Systems",
  },
  {
    n: "16",
    name: "Auto Scaling & Load Balancing (MP2)",
    blurb:
      "Designing fault-tolerant cloud configurations using AWS Auto Scaling Groups (ASG) and Elastic Load Balancers (ELB).",
    stack: ["AWS EC2", "ELB", "ASG", "CloudWatch"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#ff4d2e",
    category: "Cloud Systems",
  },
  {
    n: "17",
    name: "EC2 & S3 Infrastructure (MP1)",
    blurb:
      "Provisioning programmatic virtual machines and secure object storage assets using AWS EC2, S3, and IAM policy definitions.",
    stack: ["AWS EC2", "AWS S3", "IAM", "Python"],
    year: "2026",
    image: "/lab_placeholder.png",
    href: "https://github.com/Kcruz28",
    glow: "#6d4cff",
    category: "Cloud Systems",
  },
  {
    n: "18",
    name: "AI Loteria",
    blurb:
      "A bilingual reimagining of the classic Mexican card game, with an adversarial agent that scales difficulty in real time.",
    stack: ["Python", "React", "PyTorch"],
    year: "2024",
    image: "/loteria_deck.jpg",
    href: "https://github.com/Kcruz28/AI-Loteria",
    glow: "#ff4d2e",
    category: "AI & Agents",
  },
  {
    n: "19",
    name: "NetWhiz",
    blurb:
      "Interactive learning platform that turns networking fundamentals into hands-on labs with live progress tracking.",
    stack: ["Next.js", "TypeScript", "Node"],
    year: "2024",
    image: "/network.jpg",
    href: "https://github.com/Networking-Platform/NetWhiz",
    glow: "#6d4cff",
    category: "Full-Stack & Web",
  },
  {
    n: "20",
    name: "SHPE Tech",
    blurb:
      "Official site for BU's Society of Hispanic Professional Engineers chapter, designed and shipped by the tech team.",
    stack: ["React", "TypeScript"],
    year: "2024",
    image: "/shpelogo.png",
    href: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
    glow: "#d4ff3a",
    category: "Full-Stack & Web",
  },
  {
    n: "21",
    name: "Ticket Masterer",
    blurb:
      "Real-time price comparison and recommendation engine for live events, ingesting from multiple marketplaces.",
    stack: ["Node", "React", "REST"],
    year: "2023",
    image: "/tickets.webp",
    href: "https://github.com/ajay-del-bot/CS411_CRUDApp",
    glow: "#ff4d2e",
    category: "Full-Stack & Web",
  },
];

const stack = {
  Languages: ["TypeScript", "Python", "C / C++", "Java"],
  Web:       ["React", "Next.js", "Node.js", "Express", "GraphQL"],
  Systems:   ["PyTorch", "Apache Spark", "Apache Kafka", "Apache Flink"],
  "Cloud & Infra": ["AWS", "Kubernetes", "Docker", "GCP", "Terraform", "Git"],
  Robotics:  ["ROS2", "Autonomous Vehicles", "Motion Planning", "Sensor Fusion", "Bayesian Filtering"],
};

const tickerItems = [
  "BUILDING IN CHICAGO",
  "OPEN TO 2026 ROLES",
  "ROBOTICS · CLOUD · SYSTEMS",
  "REACT · NEXT · PYTHON",
  "KUBERNETES · AWS · DOCKER",
  "ROS2 · PYTORCH · KAFKA · FLINK",
];

/* ─── Cursor halo ─────────────────────────────────────────────────────── */

function Halo() {
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

function Nav() {
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
      {/* Mobile: compact floating chip + menu button */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 lg:hidden">
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-void/75 px-3 py-1.5 font-mono text-[11px] tracking-wider text-bone backdrop-blur-xl"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
          </span>
          KCL
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-void/75 backdrop-blur-xl"
        >
          <span className="relative block h-3 w-4">
            <span
              className="absolute left-0 h-px w-4 bg-bone transition-all duration-300"
              style={{
                top: open ? "50%" : "0",
                transform: open ? "rotate(45deg) translateY(-50%)" : "none",
              }}
            />
            <span
              className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-bone transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 h-px w-4 bg-bone transition-all duration-300"
              style={{
                top: open ? "50%" : "calc(100% - 1px)",
                transform: open ? "rotate(-45deg) translateY(-50%)" : "none",
              }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu sheet */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-void/90 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="absolute inset-x-5 top-20 rounded-2xl border border-line bg-ink/95 p-6">
          <ul className="space-y-4">
            {items.map((it, i) => (
              <li key={it.l}>
                <a
                  href={it.h}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line pb-3 text-xl font-medium text-bone"
                >
                  <span>{it.l}</span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-fog">
                    0{i + 1}
                  </span>
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

      {/* Desktop nav */}
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
                <a
                  href={it.h}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog transition-colors hover:text-acid"
                >
                  {it.l}
                </a>
              </li>
            ))}
          </ul>
          <div className="font-mono text-[11px] tracking-wider text-fog">
            CHI {time || "--"}
          </div>
        </div>
      </nav>
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */

function Hero({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full">
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(8,9,12,0.7) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: titleY, opacity: titleO }}
        className="relative z-10 flex h-full flex-col justify-between px-6 pt-28 pb-12 md:px-10"
      >
        {/* Top labels */}
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

        {/* Name */}
        <div className="mx-auto w-full max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-fog"
          >
            <span className="text-acid">▸</span> SOFTWARE ENGINEER
          </motion.div>
          <h1
            className="font-sans font-bold leading-[0.85] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem, 13.5vw, 13rem)" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              KEVIN
            </motion.span>
            <motion.span
              className="block text-bone"
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              CRUZ <span className="text-acid">LOPEZ</span>
            </motion.span>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="max-w-md text-[15px] leading-relaxed text-bone/75"
          >
            Engineering across the stack from kernel to cursor. Currently
            shipping full-stack systems, ML, and cloud infrastructure from
            Chicago.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fog"
          >
            <span className="text-acid">scroll</span>
            <span className="h-px w-12 bg-line">
              <motion.span
                className="block h-full bg-acid"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <span>↓</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Ticker ──────────────────────────────────────────────────────────── */

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative z-10 overflow-hidden border-y border-line bg-void/80 py-3 backdrop-blur">
      <div className="marquee flex gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-bone/70">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            {t} <span className="text-acid">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Project Card ────────────────────────────────────────────────────── */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.a
      layout
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block overflow-hidden rounded-xl border border-line bg-ink/70 backdrop-blur"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Base gradient - always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />

        {/* Glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${project.glow}33, transparent 70%)`,
          }}
        />

        {/* Top labels */}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between font-mono text-[10px] tracking-[0.2em]">
          <span className="rounded-sm bg-void/60 px-1.5 py-0.5 text-acid backdrop-blur-sm">
            {project.n}
          </span>
          <span className="rounded-sm bg-void/60 px-1.5 py-0.5 text-fog backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {/* Bottom-anchored title block */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-[17px] font-semibold tracking-tight text-bone">
              {project.name}
            </h3>
            <span className="font-mono text-acid transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-sm border border-bone/15 bg-void/40 px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-bone/70 backdrop-blur-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Hover-revealed blurb (desktop only) */}
        <div
          className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-ink via-ink/85 to-ink/30 p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100 md:flex"
        >
          <div className="font-mono text-[10px] tracking-[0.22em] text-acid">
            {project.n} / {project.year}
          </div>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-bone/75">
            {project.blurb}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-line bg-cell/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bone/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ─── Section Heading ────────────────────────────────────────────────── */

function SectionHead({
  num,
  label,
  title,
  accent,
}: {
  num: string;
  label: string;
  title: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="mb-12 md:mb-20">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
        <span className="text-acid">{num}</span>
        <span className="h-px w-8 bg-line" />
        <span>{label}</span>
      </div>
      <h2
        className="mt-5 font-sans font-bold leading-[0.95] tracking-[-0.03em]"
        style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)", color: accent ?? "#e8e6e1" }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── Work ────────────────────────────────────────────────────────────── */

function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Systems & Robotics", "AI & Agents", "Full-Stack & Web", "Cloud Systems"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          num="01"
          label="Selected Work"
          title={
            <>
              Things I&apos;ve <span className="text-acid">built</span>
              <span className="text-flame">.</span>
            </>
          }
        />

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-1.5 border-b border-line pb-6">
          {categories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active ? "text-void font-semibold" : "text-fog hover:text-bone"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {active && (
                  <motion.span
                    layoutId="active-category-pill"
                    className="absolute inset-0 z-0 rounded-full bg-acid"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.n}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Stack ───────────────────────────────────────────────────────────── */

function Stack() {
  const groups = Object.entries(stack);
  return (
    <section id="stack" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          num="02"
          label="Stack"
          title={
            <>
              The <span className="text-violet">tools</span> in rotation
              <span className="text-acid">.</span>
            </>
          }
        />

        <div className="rounded-2xl border border-line bg-ink/60 p-5 md:rounded-3xl md:p-10">
          {/* Terminal header */}
          <div className="mb-5 flex items-center justify-between border-b border-line pb-3 md:mb-6 md:pb-4">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="h-2 w-2 rounded-full bg-flame md:h-2.5 md:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-acid md:h-2.5 md:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-violet md:h-2.5 md:w-2.5" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:text-[11px]">
              ~/kevin/stack.zsh
            </span>
          </div>

          <div className="mb-5 font-mono text-[12px] text-bone/70 md:mb-6 md:text-[13px]">
            <span className="text-acid">kevin@chi</span>
            <span className="text-fog">:</span>
            <span className="text-violet">~</span>
            <span className="text-fog">$ </span>
            <span className="caret">cat ./stack.json</span>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
            {groups.map(([group, items], gi) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: gi * 0.08 }}
              >
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-acid md:text-[11px]">
                  ▸ {group}
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:block md:space-y-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-line bg-cell/40 px-2 py-1 font-mono text-[11.5px] text-bone/85 transition-colors hover:text-acid md:border-0 md:bg-transparent md:p-0 md:text-[14px]"
                    >
                      <span className="hidden text-fog md:inline">{"› "}</span>
                      {it}
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

function About() {
  return (
    <section id="about" className="relative px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <SectionHead
          num="03"
          label="About"
          title={
            <>
              Systems mind. <br />
              <span className="text-flame">Builder&apos;s</span> hands.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/kev.jpeg"
                alt="Kevin Cruz Lopez"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="text-acid">kevin.jpg</span>
                <span className="text-fog">2026</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-5 text-[16px] leading-[1.7] text-bone/85">
              <p>
                I&apos;m a software engineer in Chicago, working across full-stack
                web, robotics, and cloud infrastructure. The seams between
                layers are where I&apos;m most at home.
              </p>
              <p>
                Over the last three years I&apos;ve built and shipped projects
                ranging from adversarial card-game agents in PyTorch, to
                networking education platforms in Next.js, to containerized
                services running on Google Cloud. The work that keeps me
                interested is whatever sits closest to the metal and still has
                a person on the other end.
              </p>
              <p>
                As a member of the Society of Hispanic Professional Engineers,
                I lead technical projects that bridge engineering education and
                real-world application.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4">
              {[
                { k: "Based",    v: "Chicago, IL" },
                { k: "Building", v: "3+ years" },
                { k: "Affil.",   v: "SHPE · BU" },
                { k: "Status",   v: "Open 2026" },
              ].map((d) => (
                <div key={d.k}>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
                    {d.k}
                  </div>
                  <div className="mt-2 text-[18px] font-medium text-bone">
                    {d.v}
                  </div>
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

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-44">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-flame/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <SectionHead
          num="04"
          label="Contact"
          title={
            <>
              Let&apos;s build <br />
              something <span className="text-acid">real</span>
              <span className="text-flame">.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <a
              href="mailto:kcruzlopez10@gmail.com"
              data-hover
              className="group flex w-full max-w-full items-center gap-2.5 rounded-2xl border border-line bg-ink/60 px-4 py-3.5 backdrop-blur transition-colors hover:border-acid sm:inline-flex sm:w-auto sm:gap-4 sm:rounded-full sm:px-7 sm:py-5"
            >
              <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog group-hover:text-acid sm:text-[11px]">
                Email
              </span>
              <span className="hidden h-5 w-px shrink-0 bg-line sm:block" />
              <span className="min-w-0 flex-1 truncate text-[14px] font-medium text-bone sm:flex-none sm:text-lg md:text-xl">
                kcruzlopez10@gmail.com
              </span>
              <span className="shrink-0 text-acid">↗</span>
            </a>

            <div className="mt-10 font-mono text-[13px] leading-[1.8] text-bone/70">
              <div>
                <span className="text-acid">$</span>{" "}
                <span className="text-fog">curl</span> -X POST kevin.dev/hi
              </div>
              <div>
                <span className="text-acid">$</span>{" "}
                <span className="text-fog">await</span> response<span className="text-violet">()</span>
                <span className="caret" />
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              Elsewhere
            </div>
            <ul className="mt-5 space-y-3">
              {[
                { l: "LinkedIn", h: "https://www.linkedin.com/in/kcruz10/" },
                { l: "GitHub",   h: "https://github.com/Kcruz28" },
                { l: "Email",    h: "mailto:kcruzlopez10@gmail.com" },
              ].map((s) => (
                <li key={s.l}>
                  <a
                    href={s.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-acid"
                  >
                    <span className="text-lg text-bone group-hover:text-acid">
                      {s.l}
                    </span>
                    <span className="font-mono text-sm text-fog group-hover:text-acid">
                      ↗
                    </span>
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

function Footer() {
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

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function Home() {
  const scrollRef = useRef(0);
  const [veil, setVeil] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const s = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      scrollRef.current = s;
      // veil fades in past hero, caps at ~85%
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
      {/* Persistent 3D background - sits behind everything */}
      <div className="fixed inset-0 z-0">
        <Scene scrollRef={scrollRef} />
      </div>
      {/* Scroll-driven dark veil - calms the scene behind content */}
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
        <Hero scrollRef={scrollRef} />
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
