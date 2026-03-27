"use client";

import { motion } from "framer-motion";

/* ─── Project Categories We've Delivered ─── */
const PROJECT_TYPES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "SaaS Platforms",
    description: "Subscription-based apps with dashboards, billing, analytics, and user management.",
    examples: "Sorted AI, Chiefly, SurePath",
    color: "#6C3FE6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: "Marketplaces",
    description: "Two-sided platforms connecting buyers and sellers with payments and listings.",
    examples: "Lawn Looker, Alternew",
    color: "#10B981",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 4-4 8-2-4-4-6.05-4-8a4 4 0 014-4z" />
        <path d="M12 18v4" /><circle cx="12" cy="14" r="2" />
        <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "AI Applications",
    description: "AI-powered tools with LLM integrations, automation, and intelligent workflows.",
    examples: "Octa AI, Veloceo, BackCaster",
    color: "#8B5CF6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Membership Platforms",
    description: "Subscription models with gated content, Stripe Connect, and member dashboards.",
    examples: "Xcalibre, Scrutiny",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "FinTech & Finance",
    description: "Personal finance trackers, payment integrations, and financial dashboards.",
    examples: "Networth Tracker, Opto",
    color: "#3B82F6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Event & Booking Apps",
    description: "Event management, scheduling, video calls, and automated notifications.",
    examples: "Naspa",
    color: "#EC4899",
  },
];

/* ─── Tech Stack ─── */
const TECH_STACK = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: "/tech/react.svg", fallbackColor: "#61DAFB" },
      { name: "Next.js", icon: "/tech/nextjs.svg", fallbackColor: "#000000" },
      { name: "TypeScript", icon: "/tech/typescript.svg", fallbackColor: "#3178C6" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.svg", fallbackColor: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: "/tech/nodejs.svg", fallbackColor: "#339933" },
      { name: "Python", icon: "/tech/python.svg", fallbackColor: "#3776AB" },
      { name: "Express", icon: "/tech/express.svg", fallbackColor: "#000000" },
      { name: "REST APIs", icon: "/tech/api.svg", fallbackColor: "#6C3FE6" },
    ],
  },
  {
    category: "Database & Cloud",
    techs: [
      { name: "MongoDB", icon: "/tech/mongodb.svg", fallbackColor: "#47A248" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg", fallbackColor: "#4169E1" },
      { name: "Firebase", icon: "/tech/firebase.svg", fallbackColor: "#FFCA28" },
      { name: "AWS", icon: "/tech/aws.svg", fallbackColor: "#FF9900" },
    ],
  },
  {
    category: "Tools & Integrations",
    techs: [
      { name: "Stripe", icon: "/tech/stripe.svg", fallbackColor: "#635BFF" },
      { name: "Docker", icon: "/tech/docker.svg", fallbackColor: "#2496ED" },
      { name: "GitHub", icon: "/tech/github.svg", fallbackColor: "#181717" },
      { name: "Vercel", icon: "/tech/vercel.svg", fallbackColor: "#000000" },
    ],
  },
];

function TechBadge({ name, fallbackColor }: { name: string; fallbackColor: string }) {
  return (
    <div className="group/badge flex flex-col items-center gap-2">
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover/badge:scale-110 group-hover/badge:shadow-lg"
        style={{
          backgroundColor: `${fallbackColor}12`,
          border: `1px solid ${fallbackColor}25`,
        }}
      >
        <span
          className="text-lg font-bold"
          style={{ color: fallbackColor }}
        >
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
        {name}
      </span>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function DeliveredAndTech() {
  return (
    <section
      className="relative py-24 md:py-32 transition-colors duration-300 overflow-hidden"
      id="delivered"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-light dark:bg-brand-primary/10 text-brand-primary text-[13px] font-semibold tracking-wide mb-4">
            What We Build
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 dark:text-white leading-tight">
            MVPs we&apos;ve shipped across{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              every industry
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            From SaaS dashboards to AI-powered tools — we&apos;ve launched 50+ MVPs
            for founders worldwide. Here&apos;s what we deliver best.
          </p>
        </motion.div>

        {/* ── Project Type Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-24">
          {PROJECT_TYPES.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group relative rounded-2xl p-7 bg-white dark:bg-surface-dark-elevated border border-gray-100 dark:border-surface-dark-border hover:border-brand-primary/20 dark:hover:border-brand-primary/30 ambient-card transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/[0.04]"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${project.color}12`,
                  color: project.color,
                }}
              >
                {project.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Example clients */}
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium text-brand-primary/80 dark:text-brand-secondary/80">
                  Clients:
                </span>
                <span className="text-[12px] text-gray-400 dark:text-gray-500">
                  {project.examples}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Tech Stack Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-light dark:bg-brand-primary/10 text-brand-primary text-[13px] font-semibold tracking-wide mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 dark:text-white leading-tight">
            Built with{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              modern tools
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            We use production-grade technologies trusted by top startups and enterprises.
          </p>
        </motion.div>

        {/* ── Tech Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TECH_STACK.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: gi * 0.1, duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl p-6 bg-white dark:bg-surface-dark-elevated border border-gray-100 dark:border-surface-dark-border ambient-card"
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {group.category}
              </h4>
              <div className="grid grid-cols-2 gap-5">
                {group.techs.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    fallbackColor={tech.fallbackColor}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
