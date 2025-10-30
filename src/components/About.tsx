"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    name: "Web Development",
    icon: CodeBracketIcon,
    description:
      "Building responsive and performant web applications using modern frameworks.",
  },
  {
    name: "UI/UX Design",
    icon: DevicePhoneMobileIcon,
    description:
      "Creating beautiful and intuitive user interfaces with attention to detail.",
  },
  {
    name: "Problem Solving",
    icon: CpuChipIcon,
    description:
      "Breaking down complex problems and finding efficient solutions.",
  },
];

const techStack = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "Nest.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "SQL/NoSQL", level: 80 },
  { name: "MongoDB", level: 85 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a strong foundation in web
            technologies and a keen eye for design. I love turning ideas into
            reality through clean, efficient code and intuitive user
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <skill.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              My Skills
            </h3>
            <div className="space-y-4">
              {techStack.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {tech.name}
                    </span>
                    <span className="text-sm text-gray-500">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-indigo-600 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
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
