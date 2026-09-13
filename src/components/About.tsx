"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const skills = [
  {
    name: "Voice AI & Agentic Systems",
    icon: CpuChipIcon,
    description:
      "Engineering real-time voice agents (Vapi, Bolna, Retell) optimized for sub-300ms latency, LLM function calling, and contextual multi-turn dialogue.",
  },
  {
    name: "Distributed Full-Stack & Edge",
    icon: CodeBracketIcon,
    description:
      "Architecting multi-tenant platforms with Next.js, React 19, TypeScript, NestJS, and Cloudflare Workers with dynamic branding and config schemas.",
  },
  {
    name: "Interoperability & Data Pipelines",
    icon: DevicePhoneMobileIcon,
    description:
      "Connecting 20+ enterprise APIs, HL7/FHIR healthcare data workflows, Redis caching layers, PostgreSQL/Prisma, and automated WhatsApp communication.",
  },
];

const techStack = [
  { name: "Voice AI (Vapi, Bolna, Retell)", level: 94, color: "from-teal-400 to-emerald-500" },
  { name: "Next.js & React 19", level: 92, color: "from-indigo-500 to-purple-600" },
  { name: "TypeScript & Node.js", level: 92, color: "from-blue-500 to-cyan-600" },
  { name: "NestJS & REST APIs", level: 90, color: "from-red-500 to-pink-600" },
  { name: "PostgreSQL & Prisma ORM", level: 88, color: "from-cyan-500 to-blue-600" },
  { name: "Redis Caching & In-Memory", level: 86, color: "from-rose-500 to-red-600" },
  { name: "MongoDB & Aggregations", level: 88, color: "from-green-600 to-teal-600" },
  { name: "Cloudflare Workers & Edge", level: 85, color: "from-amber-500 to-orange-600" },
  { name: "Python & Machine Learning", level: 82, color: "from-blue-600 to-indigo-700" },
  { name: "Tailwind CSS v4", level: 95, color: "from-cyan-500 to-blue-500" },
  { name: "Healthcare Interop (HL7/FHIR)", level: 84, color: "from-teal-500 to-emerald-600" },
  { name: "Clerk Auth & Multi-Tenancy", level: 90, color: "from-purple-600 to-indigo-700" },
];

const languages = [
  { name: "Telugu", level: "Native" },
  { name: "English", level: "Fluent" },
];

export default function About() {
  return (
    <section
      id="about"
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
            Engineering Profile
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            About Me & Engineering Philosophy
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Bridging low-latency Voice AI, robust full-stack architecture, and
            strict healthcare interoperability into resilient production products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-2xl shadow-teal-950/40 ring-2 ring-teal-400/50">
              <Image
                src="https://res.cloudinary.com/dosz4fxdk/image/upload/v1761910988/Gemini_Generated_Image_KMR_edited_catljr.png"
                alt="Katkuri Maniruthvik"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              I am a Software Development Engineer with 8 months of production startup
              experience at <span className="font-semibold text-teal-300">2care.ai</span> (Dec 2025 – Jul 2026),
              where I engineered production-ready healthcare AI solutions, Voice AI agents,
              and integrations with 20+ external clinical and communication systems.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed mb-4">
              Concurrently, I am in my 3rd year (6th semester) pursuing dual degrees in
              Computer Science & Engineering at{" "}
              <span className="font-semibold text-zinc-200">Chaitanya Deemed to be University (GPA: 9.8)</span>{" "}
              and specialized Data Science & Machine Learning at{" "}
              <span className="font-semibold text-zinc-200">NIAT (NxtWave Institute of Advanced Technologies)</span>.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              My engineering approach prioritizes{" "}
              <span className="text-teal-300 font-semibold">low latency, high observability, and data reliability</span>
              . Whether shaving milliseconds off Voice AI turn-taking response times, modeling
              fault-tolerant multi-tenant schemas in PostgreSQL & Prisma, or structuring
              HL7/FHIR compliant health record pipelines, I build systems engineered to
              perform under production pressure.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 hover:border-teal-400/60 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="w-14 h-14 bg-neutral-950 rounded-xl flex items-center justify-center mb-5 mx-auto border border-zinc-800">
                <skill.icon className="h-7 w-7 text-teal-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-50 mb-3 text-center">
                {skill.name}
              </h3>
              <p className="text-zinc-400 text-center text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-zinc-50 mb-8 text-center">
              Core Competencies & Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-zinc-200">
                      {tech.name}
                    </span>
                    <span className="text-sm font-medium text-teal-300">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2.5 overflow-hidden border border-zinc-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-zinc-50 mb-6">Languages</h3>
          <div className="flex justify-center gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900 px-8 py-4 rounded-lg border border-zinc-800 hover:border-teal-400 transition-all duration-300"
              >
                <p className="font-semibold text-zinc-50">{lang.name}</p>
                <p className="text-sm text-teal-300">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
