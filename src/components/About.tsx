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
    name: "Full Stack Development",
    icon: CodeBracketIcon,
    description:
      "Building end-to-end web applications with MERN stack, Next.js, and NestJS frameworks.",
  },
  {
    name: "Modern UI/UX",
    icon: DevicePhoneMobileIcon,
    description:
      "Creating responsive and beautiful interfaces with Tailwind CSS and modern design principles.",
  },
  {
    name: "AI & Innovation",
    icon: CpuChipIcon,
    description:
      "Exploring artificial intelligence to design impactful and transformative applications.",
  },
];

const techStack = [
  { name: "Next.js", level: 88, color: "from-indigo-500 to-purple-600" },
  { name: "NestJS", level: 85, color: "from-red-500 to-pink-600" },
  { name: "React", level: 90, color: "from-blue-500 to-cyan-600" },
  { name: "TypeScript", level: 87, color: "from-indigo-600 to-blue-600" },
  { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-600" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-600" },
  { name: "Python", level: 80, color: "from-blue-600 to-indigo-700" },
  { name: "MongoDB", level: 85, color: "from-green-600 to-teal-600" },
  { name: "SQL", level: 82, color: "from-gray-600 to-gray-800" },
  { name: "Tailwind CSS", level: 93, color: "from-cyan-500 to-blue-500" },
  { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
  { name: "C/C++", level: 78, color: "from-purple-600 to-indigo-700" },
];

const languages = [
  { name: "Telugu", level: "Native" },
  { name: "English", level: "Fluent" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        {/* Profile Photo and Bio Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg ring-4 ring-slate-200">
              <Image
                src="https://res.cloudinary.com/dosz4fxdk/image/upload/v1761910988/Gemini_Generated_Image_KMR_edited_catljr.png"
                alt="Katkuri Mani Ruthvik"
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
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              As a second-year student at{" "}
              <span className="font-semibold text-blue-600">
                NIAT (NxtWave Institute of Advanced Technologies)
              </span>
              , I'm deeply passionate about web development and committed to
              creating innovative, tech-driven solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              I'm currently mastering{" "}
              <span className="font-semibold text-blue-600">
                Full-stack web development
              </span>{" "}
              and exploring{" "}
              <span className="font-semibold text-blue-600">
                artificial intelligence
              </span>{" "}
              to design impactful applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With strong dedication to continuous learning and a passion for
              building scalable, modern applications, I aim to contribute to
              transformative projects in the tech industry and shape the future
              of technology.
            </p>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto border border-blue-100">
                <skill.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">
                {skill.name}
              </h3>
              <p className="text-slate-600 text-center">{skill.description}</p>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-800">
                      {tech.name}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
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
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Languages</h3>
          <div className="flex justify-center gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 px-8 py-4 rounded-full border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <p className="font-semibold text-slate-900">{lang.name}</p>
                <p className="text-sm text-blue-600">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
