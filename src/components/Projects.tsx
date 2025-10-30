"use client";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "FlyRoute",
    description:
      "A full-stack travel planning platform that computes optimal routes between cities based on cheapest airfare or fastest travel time. Includes route breakdowns, admin dashboard, dynamic airfare updates, and AI-generated city images. Showcases expertise in database modeling, authentication, and modern UI.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "AWS S3",
    ],
    image:
      "https://raw.githubusercontent.com/MANIRUTHVIK/AirfareDeploy/refs/heads/main/airfare_frontend/app/favicon.ico",
    liveUrl: "https://airfare-route-finder-frontend.vercel.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/AirfareDeploy",
  },
  {
    title: "QuickCart",
    description:
      "A full-stack e-commerce platform built using Next.js with Clerk for authentication, Inngest for backend workflows, and MongoDB for storage. Includes separate dashboards for users and sellers, product listing, image uploads, order tracking, and cart management.",
    tags: ["Next.js", "Clerk", "Inngest", "MongoDB", "Cloudinary"],
    image:
      "https://quick-cart-umber-omega.vercel.app/_next/static/media/logo.83ad3901.svg",
    liveUrl: "https://quick-cart-umber-omega.vercel.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/QuickCart",
  },
  {
    title: "NxtCart",
    description:
      "A simplified e-commerce web application built using React.js, featuring product browsing, cart management, and secure JWT-based authentication. Simulates real-world online marketplace workflows with API integration and frontend development best practices.",
    tags: ["ReactJS", "JWT", "REST APIs"],
    image:
      "https://res.cloudinary.com/dosz4fxdk/image/upload/v1747737691/6fad20838855997d164dd88d885fad87bdfa3be6_1_fqtb9f.png", // 🛒 E-commerce / Shopping
    liveUrl: "https://kmrnxtcart.netlify.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/kmrNxtcart",
  },
  {
    title: "ThreadsApplication",
    description:
      "A backend social media application built using NestJS and MongoDB. Includes user authentication, follower/following features, direct messaging, and rate limiting to prevent spam. Focused on backend architecture, API design, and secure authentication.",
    tags: ["NestJS", "MongoDB", "JWT", "REST APIs"],
    image:
      "https://cdn.vectorstock.com/i/500p/79/33/meta-threads-logo-symbol-vector-47787933.jpg",
    liveUrl: "https://github.com/MANIRUTHVIK/ThreadsApplication-Nest-Js-",
    codeUrl: "https://github.com/MANIRUTHVIK/ThreadsApplication-Nest-Js-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 group"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 group"
                  >
                    View Code
                    <CodeBracketIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
