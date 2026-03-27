"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "SlashEasy turned my Patreon-inspired idea into a real MVP in just 7 days. They helped me clarify my concept and delivered a polished, working product faster than I ever expected.",
    name: "Stefan M.",
    role: "Founder, Xcalibre",
    location: "Australia",
    category: "Creator Support Platform",
    avatar: "#6C3FE6",
    initials: "SM",
    stars: 5,
  },
  {
    quote: "SlashEasy handled our complex event app with impressive quality. The team was organized, easy to coordinate with, and delivered a solid MVP on time. I plan to work with them again.",
    name: "Meaghan M.",
    role: "Founder, Naspa",
    location: "United States",
    category: "Event Management App",
    avatar: "#EC4899",
    initials: "MM",
    stars: 4.5,
  },
  {
    quote: "SlashEasy delivered great work as always. Consistent quality, fast turnaround, and a team that truly understands what founders need when launching an MVP.",
    name: "Jason P.",
    role: "Managing Director, Sorted AI",
    location: "Australia",
    category: "Research & Productivity SaaS",
    avatar: "#8B5CF6",
    initials: "JP",
    stars: 5,
  },
  {
    quote: "SlashEasy has been a superb partner in building out my app. They delivered exactly what I needed and I would hire them again without hesitation for future projects.",
    name: "Jason V.",
    role: "Founder, Lawn Looker",
    location: "United States",
    category: "Service Marketplace App",
    avatar: "#10B981",
    initials: "JV",
    stars: 5,
  },
  {
    quote: "SlashEasy built our mentorship platform end-to-end — Stripe Connect, video calls, scheduling, and automated notifications. They went above and beyond. Trustworthy, budget-friendly, and highly efficient.",
    name: "Dr. Arjun R.",
    role: "Founder, Scrutiny",
    location: "India",
    category: "Mentor Membership Platform",
    avatar: "#F59E0B",
    initials: "AR",
    stars: 5,
  },
  {
    quote: "SlashEasy completed an extremely complex project on time and within budget. The team is amazing to work with and I will definitely be using them again.",
    name: "Martin V.",
    role: "Founder, Veloceo",
    location: "Europe",
    category: "AI SaaS Application",
    avatar: "#3B82F6",
    initials: "MV",
    stars: 5,
  },
  {
    quote: "SlashEasy was very knowledgeable about the tech stack and communicated clearly throughout. They supported me every step of the way in getting my MVP off the ground.",
    name: "Sarah D.",
    role: "Founder, Chiefly",
    location: "United States",
    category: "SaaS Task Management App",
    avatar: "#14B8A6",
    initials: "SD",
    stars: 4.5,
  },
  {
    quote: "SlashEasy built my app from scratch with clear communication and great professionalism. They handled every change request smoothly and delivered an app I genuinely love.",
    name: "Ishaan H.",
    role: "Founder, Networth Tracker",
    location: "India",
    category: "Personal Finance App",
    avatar: "#F97316",
    initials: "IH",
    stars: 5,
  },
  {
    quote: "SlashEasy brings real expertise — not just UI development but strategic input on architecture and implementation. Their contribution went well beyond what I expected.",
    name: "Fabian K.",
    role: "Founder, BackCaster",
    location: "Germany",
    category: "Tech Platform",
    avatar: "#A855F7",
    initials: "FK",
    stars: 4.5,
  },
  {
    quote: "SlashEasy delivered great work with excellent communication and on-time delivery. Exactly what you need when launching an MVP on a tight schedule.",
    name: "Usama A.",
    role: "Founder, Octa AI",
    location: "Pakistan",
    category: "AI Application",
    avatar: "#EF4444",
    initials: "UA",
    stars: 5,
  },
  {
    quote: "SlashEasy built exactly what we needed on time, and we've worked together for multiple years. Highly organized, prompt with communication, and they always go above and beyond.",
    name: "Rachel S.",
    role: "Founder, Alternew",
    location: "United States",
    category: "Alteration Marketplace",
    avatar: "#06B6D4",
    initials: "RS",
    stars: 5,
  },
  {
    quote: "SlashEasy are proactive problem-solvers who came up with innovative ways to build our features. We've hired them for two projects and will definitely hire them again.",
    name: "Yesuto A.",
    role: "Founder, Opto",
    location: "United Kingdom",
    category: "Personal Finance App",
    avatar: "#84CC16",
    initials: "YA",
    stars: 5,
  },
  {
    quote: "SlashEasy delivered great work with timely delivery and perfect communication. Exactly what a founder needs to get their MVP launched without any stress.",
    name: "Damon D.",
    role: "Founder, SurePath",
    location: "United States",
    category: "SaaS Platform",
    avatar: "#D946EF",
    initials: "DD",
    stars: 4.5,
  },
  {
    quote: "SlashEasy built our prototype quickly and efficiently. Great work delivered with speed — perfect for founders who need a working MVP fast.",
    name: "Erol H.",
    role: "Client, Client Portal Project",
    location: "Europe",
    category: "Client Portal",
    avatar: "#0EA5E9",
    initials: "EH",
    stars: 5,
  },
];

// Split testimonials into 3 columns
const COL_1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
const COL_2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
const COL_3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, j) => {
        const filled = j < Math.floor(stars);
        const half = !filled && j < stars;
        return (
          <svg key={j} width="14" height="14" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-star-${j}`}>
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill={`url(#half-star-${j})`}
                />
              </>
            ) : (
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill={filled ? "#FBBF24" : "#D1D5DB"}
              />
            )}
          </svg>
        );
      })}
      <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-1 font-medium">
        {stars.toFixed(1)}
      </span>
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-100 dark:border-surface-dark-border hover:border-brand-primary/20 dark:hover:border-brand-primary/30 ambient-card transition-all duration-300 mb-5">
      {/* Stars + Rating */}
      <StarRating stars={t.stars} />

      <p className="text-gray-700 dark:text-gray-300 text-[14px] leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-light/60 dark:bg-brand-primary/10 text-brand-primary text-[11px] font-medium">
          {t.category}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
          style={{ backgroundColor: t.avatar }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm">
            {t.name}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-[12px]">
            {t.role} &middot; {t.location}
          </p>
        </div>
      </div>

      {/* Quote decoration */}
      <div className="absolute top-4 right-6 text-brand-primary/[0.05] dark:text-brand-primary/[0.07] text-6xl font-serif leading-none select-none pointer-events-none">
        &ldquo;
      </div>
    </div>
  );
}

function ScrollColumn({
  testimonials,
  speed = 25,
  direction = "up",
}: {
  testimonials: typeof TESTIMONIALS;
  speed?: number;
  direction?: "up" | "down";
}) {
  const columnRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the list to create seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  const animationDuration = testimonials.length * speed;

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "700px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F0F0F8] dark:from-surface-dark-card to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F0F0F8] dark:from-surface-dark-card to-transparent z-10 pointer-events-none" />

      <div
        ref={columnRef}
        className="flex flex-col"
        style={{
          animation: `scroll-${direction} ${animationDuration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 md:py-32 bg-[#F0F0F8] dark:bg-surface-dark-card transition-colors duration-300"
      id="testimonials"
    >
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-light dark:bg-brand-primary/10 text-brand-primary text-[13px] font-semibold tracking-wide mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 dark:text-white leading-tight">
            Trusted by founders{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              across the globe
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Real feedback from real founders who launched their MVPs with SlashEasy.
            Rated 4.9 out of 5 on average.
          </p>

          {/* Aggregate rating */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-surface-dark-elevated border border-gray-100 dark:border-surface-dark-border shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              4.9/5.0
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              from 14+ clients
            </span>
          </div>
        </motion.div>

        {/* Auto-scrolling columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ScrollColumn testimonials={COL_1} speed={28} direction="up" />
          <ScrollColumn testimonials={COL_2} speed={32} direction="down" />
          <div className="hidden lg:block">
            <ScrollColumn testimonials={COL_3} speed={26} direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
}
