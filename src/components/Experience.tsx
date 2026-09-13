"use client";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  CpuChipIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  statusBadge?: string;
  summary: string;
  pillars?: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  bullets?: string[];
  icon: React.ComponentType<{ className?: string }>;
  logoText?: string;
  highlight: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Development Engineer (SDE) Intern",
    company: "2care.ai",
    period: "Dec 2025 - Jul 2026 · 8 mos",
    location: "Bengaluru, Karnataka, India · On-site",
    statusBadge: "Internship Completed",
    summary:
      "Core engineer in a fast-paced healthcare AI startup, driving 0-to-1 architecture and 1-to-100 scaling across Voice AI pipelines, distributed multi-tenant backends, and EHR/EMR interoperability.",
    pillars: [
      {
        title: "Voice AI & Low-Latency Orchestration (<300ms)",
        description:
          "Architected and deployed production AI voice agents utilizing Vapi, Bolna, and Retell. Engineered real-time turn-taking and speech inference pipelines to consistently sustain sub-300ms latency across critical clinical workflows (appointment booking, automated follow-ups, and post-discharge care).",
        icon: SignalIcon,
      },
      {
        title: "Distributed Multi-Tenant Architecture",
        description:
          "Designed backend microservices using NestJS, Node.js, Express, and Cloudflare Workers to power unified B2B & B2C healthcare platforms with dynamic tenant branding, custom domain routing, and strict data partitioning.",
        icon: ServerStackIcon,
      },
      {
        title: "Healthcare Interoperability & 20+ Integrations",
        description:
          "Engineered bidirectional data pipelines connecting 20+ external applications, including clinical EHR/EMR platforms adhering to HL7 & FHIR interoperability standards, alongside automated WhatsApp patient engagement flows.",
        icon: CpuChipIcon,
      },
      {
        title: "Performance, Redis Caching & RBAC Security",
        description:
          "Modeled relational and document schemas across PostgreSQL (Prisma) and MongoDB. Implemented a Redis caching tier for high-throughput clinical queries and integrated Clerk organization-based access control with HIPAA & DPDP compliance awareness.",
        icon: ShieldCheckIcon,
      },
    ],
    bullets: [
      "Took full engineering ownership from architectural design and schema migrations to production deployment, monitoring, and live incident mitigation.",
      "Collaborated closely with founders and clinical stakeholders to ship high-reliability features under rigorous data compliance constraints.",
    ],
    icon: BriefcaseIcon,
    logoText: "Healthcare AI",
    highlight: true,
  },
  {
    id: 2,
    role: "Computer Science Program in Data Science & ML Specialisation",
    company: "NxtWave Institute of Advanced Technologies (NIAT)",
    period: "Aug 2024 - Aug 2028 (Expected)",
    location: "Hyderabad, India",
    summary:
      "Advanced hands-on CS program focusing on modern Machine Learning, Agentic AI, full-stack architecture, and production-grade project engineering.",
    icon: AcademicCapIcon,
    highlight: true,
  },
  {
    id: 3,
    role: "Bachelor of Technology - BTech, Computer Science & Engineering",
    company: "Chaitanya Deemed to be University",
    period: "Aug 2024 - Aug 2028 · GPA: 9.8 / 10",
    location: "Hyderabad, India",
    summary:
      "Core computer science curriculum covering advanced algorithms, distributed systems, operating systems, database management, and discrete mathematics.",
    icon: AcademicCapIcon,
    highlight: true,
  },
  {
    id: 4,
    role: "Intermediate, MPC (Mathematics, Physics, Chemistry)",
    company: "Sri Chaitanya College of Education",
    period: "May 2022 - May 2024 · GPA: 9.8 / 10",
    location: "Hyderabad, India",
    summary:
      "Graduated with top academic honors (9.8 GPA), developing a strong quantitative foundation in analytical modeling, calculus, and mechanics.",
    icon: AcademicCapIcon,
    highlight: false,
  },
  {
    id: 5,
    role: "Secondary School Certificate (SSC)",
    company: "Sri Chaitanya School, Karimnagar",
    period: "Apr 2021 - Apr 2022 · GPA: 9.8 / 10",
    location: "Karimnagar, India",
    summary:
      "Graduated with high distinction (9.8 GPA) with excellence in mathematics, physical sciences, and computer foundations.",
    icon: AcademicCapIcon,
    highlight: false,
  },
];

const certifications = [
  {
    title: "Software Development Engineer Intern - Experience & Completion",
    issuer: "2care.ai",
    date: "Dec 2025 - Jul 2026",
    badge: "Production Experience",
    description:
      "Official certificate of completion recognizing full-time engineering contributions across Voice AI, multi-tenant backend infrastructure, and healthcare integrations.",
  },
  {
    title: "UI/UX Mega Workshop & App Redesign Certification",
    issuer: "NxtWave Institute of Advanced Technologies (NIAT)",
    date: "Dec 2024",
    badge: "Design Thinking",
    description:
      "Certified for mastering user observation, interface hierarchy, and end-to-end Figma UI/UX prototyping.",
  },
];

const skillCategories = [
  {
    category: "AI & Voice Engineering",
    skills: [
      "AI Voice Agents",
      "Agentic AI",
      "Vapi",
      "Bolna",
      "Retell",
      "RAG Systems",
      "LLM Applications",
      "Sub-300ms Turn-Taking",
      "Machine Learning",
    ],
  },
  {
    category: "Backend & Distributed Systems",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Cloudflare Workers",
      "REST APIs",
      "Webhooks",
      "Multi-Tenant Architecture",
      "Microservices",
    ],
  },
  {
    category: "Databases, Caching & Data Layer",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "Redis Caching",
      "SQL",
      "Schema Design",
    ],
  },
  {
    category: "Frontend Architecture",
    skills: [
      "Next.js 15/16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "State Management",
    ],
  },
  {
    category: "Healthcare & Enterprise Integrations",
    skills: [
      "HL7",
      "FHIR",
      "EHR/EMR Integrations",
      "WhatsApp Business API",
      "Clerk RBAC & Orgs",
      "HIPAA / DPDP Awareness",
    ],
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: [
      "AWS S3",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Incident Resolution",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-neutral-950 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-semibold mb-4 tracking-wider uppercase">
            Engineering Track Record
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Professional Experience & Education
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Production startup experience, distributed system design, low-latency
            Voice AI pipelines, and rigorous academic achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-800"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-lg ${
                    exp.highlight
                      ? "bg-teal-400 text-neutral-950"
                      : "bg-zinc-900 border-2 border-zinc-800 text-teal-300"
                  } z-10 shadow-lg`}
                >
                  <exp.icon className="h-6 w-6" />
                </div>
                <div
                  className={`ml-20 bg-zinc-900/90 p-6 sm:p-8 rounded-xl transition-all duration-300 border ${
                    exp.highlight
                      ? "border-teal-400/60 shadow-xl shadow-teal-950/20"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-50">
                          {exp.role}
                        </h3>
                        {exp.statusBadge && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                            <CheckBadgeIcon className="h-3.5 w-3.5" />
                            {exp.statusBadge}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-semibold text-teal-300">
                          {exp.company}
                        </h4>
                        {exp.logoText && (
                          <span className="inline-flex items-center rounded-md border border-zinc-700 bg-neutral-950 px-2.5 py-0.5 text-xs font-semibold text-zinc-300">
                            {exp.logoText}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`inline-block w-fit px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap ${
                        exp.highlight
                          ? "bg-teal-400 text-neutral-950 font-bold"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {exp.location && (
                    <p className="mb-4 text-xs sm:text-sm font-medium text-zinc-400">
                      {exp.location}
                    </p>
                  )}

                  <p className="text-zinc-300 leading-relaxed mb-6 font-medium">
                    {exp.summary}
                  </p>

                  {exp.pillars && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-zinc-800">
                      {exp.pillars.map((pillar) => (
                        <div
                          key={pillar.title}
                          className="bg-neutral-950/70 p-4 rounded-lg border border-zinc-800/80 hover:border-teal-400/40 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <pillar.icon className="h-4 w-4 text-teal-300 shrink-0" />
                            <h5 className="text-sm font-bold text-zinc-100">
                              {pillar.title}
                            </h5>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.bullets && (
                    <ul className="space-y-2 pt-2 border-t border-zinc-800/80">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-zinc-50 mb-8 flex items-center justify-center gap-2">
              <CheckBadgeIcon className="h-7 w-7 text-teal-300" />
              Certifications & Credentials
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-zinc-900/80 border border-zinc-800 hover:border-teal-400/60 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-400/10 text-teal-300 border border-teal-400/30">
                        {cert.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-zinc-100 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-teal-300 mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Categorized Skills Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-zinc-50 mb-8">
              Technical Skill Matrix
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((group) => (
                <div
                  key={group.category}
                  className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800"
                >
                  <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-neutral-950 border border-zinc-800 rounded-md text-xs font-medium text-zinc-300 hover:border-teal-400/60 hover:text-teal-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
