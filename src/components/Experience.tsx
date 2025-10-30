"use client";
import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    id: 1,
    role: "Computer Science Program in Data Science and ML Specialisation",
    company: "NxtWave Institute of Advanced Technologies (NIAT)",
    period: "Aug 2024 - Present",
    description:
      "Pursuing a comprehensive computer science program focused on Data Science and Machine Learning specialisation, emphasizing hands-on learning through real-world projects.",
    icon: AcademicCapIcon,
  },
  {
    id: 2,
    role: "Bachelor of Technology - BTech, Computer Science",
    company: "Chaitanya Deemed to be University",
    period: "Aug 2024 - Present",
    description:
      "Undergraduate degree program in Computer Science, covering programming fundamentals, data structures, and object-oriented programming principles.",
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    role: "Intermediate, MPC",
    company: "Sri Chaitanya College of Education",
    period: "Jun 2022 - Apr 2024",
    description:
      "Completed intermediate education in Mathematics, Physics, and Chemistry with Grade A, building a strong foundation in analytical and problem-solving skills.",
    icon: AcademicCapIcon,
  },
  {
    id: 4,
    role: "Secondary School Certificate (SSC)",
    company: "Sri Chaitanya School, Karimnagar",
    period: "2021 - 2022",
    description:
      "Completed SSC with Grade A, demonstrating academic excellence and active participation in school-level activities.",
    icon: AcademicCapIcon,
  },
];

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Nest.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "AWS S3",
  "C++",
  "C",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A summary of my professional journey and educational background.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md -translate-x-1/2 z-10">
                  <exp.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-16 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <span className="text-indigo-600 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
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
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-shadow"
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
