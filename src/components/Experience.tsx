"use client";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    id: 1,
    role: "SDE Intern",
    company: "2care.ai",
    period: "Dec 2025 - Present - 5 mos",
    location: "Bengaluru, Karnataka, India - On-site",
    description:
      "Contributing to 0 to 1 product development and 1 to 100 scaling for healthcare automation products across TCM, post-discharge care, AI voice agents, doctor and patient dashboards, WhatsApp engagement flows, Salesforce and EHR/EMR integrations, FHIR-based workflows, multi-tenant architecture, regional landing pages, EU AI workflow optimization, and compliance-aware development across DPDP, HIPAA, and GDPR.",
    icon: BriefcaseIcon,
    logoText: "2care.ai",
    highlight: true,
  },
  {
    id: 2,
    role: "Computer Science Program in Data Science and ML Specialisation",
    company: "NxtWave Institute of Advanced Technologies (NIAT)",
    period: "Aug 2024 - Present",
    description:
      "Pursuing a computer science program focused on Data Science and Machine Learning, with hands-on learning through real-world projects. Currently building with the MERN stack and modern AI technologies.",
    icon: AcademicCapIcon,
    highlight: true,
  },
  {
    id: 3,
    role: "Bachelor of Technology - BTech, Computer Science",
    company: "Chaitanya Deemed to be University",
    period: "Aug 2024 - Present",
    description:
      "Undergraduate Computer Science degree covering programming fundamentals, data structures, algorithms, databases, and object-oriented development.",
    icon: AcademicCapIcon,
    highlight: true,
  },
  {
    id: 4,
    role: "Intermediate, MPC",
    company: "Sri Chaitanya College of Education",
    period: "Jun 2022 - Apr 2024",
    description:
      "Completed intermediate education in Mathematics, Physics, and Chemistry with Grade A, building a strong foundation in analytical thinking and problem solving.",
    icon: AcademicCapIcon,
    highlight: false,
  },
  {
    id: 5,
    role: "Secondary School Certificate (SSC)",
    company: "Sri Chaitanya School, Karimnagar",
    period: "2021 - 2022",
    description:
      "Completed SSC with Grade A, demonstrating academic consistency and participation in school-level activities.",
    icon: AcademicCapIcon,
    highlight: false,
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "Tailwind CSS",
  "Cloudinary",
  "Clerk",
  "Google GenAI",
  "Git",
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
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Internship work, technical education, and the systems I am building
            with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative">
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
                      ? "bg-teal-400"
                      : "bg-zinc-900 border-2 border-zinc-800"
                  } z-10`}
                >
                  <exp.icon
                    className={`h-6 w-6 ${
                      exp.highlight ? "text-neutral-950" : "text-teal-300"
                    }`}
                  />
                </div>
                <div
                  className={`ml-20 bg-zinc-900 p-6 rounded-lg transition-all duration-300 border ${
                    exp.highlight ? "border-teal-400" : "border-zinc-800"
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-50">
                        {exp.role}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-semibold text-teal-300">
                          {exp.company}
                        </h4>
                        {"logoText" in exp && (
                          <span className="inline-flex items-center rounded-lg border border-zinc-700 bg-neutral-950 px-3 py-1 text-xs font-bold tracking-wide text-zinc-100">
                            {exp.logoText}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`inline-block w-fit px-4 py-1.5 text-sm font-semibold rounded-lg whitespace-nowrap ${
                        exp.highlight
                          ? "bg-teal-400 text-neutral-950"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  {"location" in exp && (
                    <p className="mb-3 text-sm font-medium text-zinc-500">
                      {exp.location}
                    </p>
                  )}
                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-zinc-50 mb-8">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-zinc-900 rounded-lg text-sm font-medium text-zinc-300 hover:bg-teal-400 hover:text-neutral-950 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
