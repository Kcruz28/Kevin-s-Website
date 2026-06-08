export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  n: string;
  name: string;
  blurb: string;
  stack: string[];
  year: string;
  image: string;
  href: string;
  glow: string;
  category: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
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
    image: "/yellow_arm.png",
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
    image: "/autonomous_car.png",
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
    image: "/cluttered_map-visualized.png",
    href: "https://github.com/Kcruz28/Parasol-PPL-2.0",
    glow: "#6d4cff",
    category: "Systems & Robotics",
  },
  {
    n: "05",
    name: "Apache Log4j 2",
    blurb:
      "Contributed to the Apache Log4j 2 core logging module. Diagnosed and fixed flaky tests, resolved test state leakage, and replaced fixed delays with adaptive Awaitility polling.",
    stack: ["Java", "Awaitility", "JUnit", "NonDex", "Debugging"],
    year: "2024",
    image: "/lab_placeholder.png",
    href: "https://github.com/apache/logging-log4j2/pull/3956",
    glow: "#ff4d2e",
    category: "Open Source",
    links: [
      { label: "PR #3956 (Timeout Fix)", href: "https://github.com/apache/logging-log4j2/pull/3956" },
      { label: "PR #3944 (Polling Delay)", href: "https://github.com/apache/logging-log4j2/pull/3944" },
      { label: "PR #3945 (State Leakage)", href: "https://github.com/apache/logging-log4j2/pull/3945" },
    ],
  },
  {
    n: "06",
    name: "Spring Cloud Gateway",
    blurb:
      "Contributed to the Spring Cloud Gateway project. Fixed a critical bytecode ordering dependency in the GatewayAutoConfiguration test suite discovered using NonDex.",
    stack: ["Java", "Spring Boot", "JUnit", "NonDex", "Testing"],
    year: "2024",
    image: "/lab_placeholder.png",
    href: "https://github.com/spring-cloud/spring-cloud-gateway/pull/3985",
    glow: "#6d4cff",
    category: "Open Source",
  },
  {
    n: "07",
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
    n: "08",
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
    n: "09",
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
    n: "10",
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
    n: "11",
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
    n: "12",
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
    n: "13",
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
    n: "14",
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
    n: "15",
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
    n: "16",
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
    n: "17",
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
    n: "18",
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
    n: "19",
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
    n: "20",
    name: "AI Loteria",
    blurb:
      "A bilingual reimagining of the classic Mexican card game, with an adversarial agent that scales difficulty in real time.",
    stack: ["RaspberryPi", "Python", "PyTorch", "OpenCV", "YOLOv26"],
    year: "2024",
    image: "/loteria_deck.jpg",
    href: "https://github.com/Kcruz28/AI-Loteria",
    glow: "#ff4d2e",
    category: "AI & Agents",
  },
  {
    n: "21",
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
    n: "22",
    name: "UIUC SHPE Tech",
    blurb:
      "Official site for UIUC's Society of Hispanic Professional Engineers chapter, designed and shipped by the tech team.",
    stack: ["React", "TypeScript"],
    year: "2024",
    image: "/shpelogo.png",
    href: "https://github.com/SHPE-Tech-Team/AI_Loteria_24-25",
    glow: "#d4ff3a",
    category: "Full-Stack & Web",
  },
  {
    n: "23",
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

export const stack = {
  Languages: ["Python", "C / C++", "Go", "Java", "TypeScript"],
  "Web Frameworks": ["FastAPI", "Flask", "Django", "gRPC", "Express"],
  Systems: ["PyTorch", "Apache Spark", "Apache Kafka", "Apache Flink", "CUDA", "OpenCV"],
  "Cloud & MLOps": ["Kubernetes", "AWS", "MLflow", "Model Serving", "Docker", "Terraform"],
  Robotics: ["ROS2", "Autonomous Driving Stack", "Motion Planning", "Sensor Fusion", "Bayesian Filtering"],
};

export const tickerItems = [
  "BUILDING IN CHICAGO",
  "OPEN TO 2026 ROLES",
  "ROBOTICS · CLOUD · SYSTEMS",
  "C++ · PYTHON · PYTORCH · GO",
  "KUBERNETES · AWS · DOCKER",
  "ROS2 · KAFKA · FLINK · SPARK",
];
