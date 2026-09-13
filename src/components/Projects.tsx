"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "FlyRoute (Optimal Airfare & Route Finding)",
    description:
      "Full-stack multi-city routing platform computing Pareto-optimal travel trajectories based on cost and transit duration. Architected an administrative control plane for real-time airfare updates, automated city creation, and an AWS S3 media pipeline with AI-generated visual fallbacks.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "AWS S3",
      "Route Optimization",
    ],
    image:
      "https://raw.githubusercontent.com/MANIRUTHVIK/AirfareDeploy/refs/heads/main/airfare_frontend/app/favicon.ico",
    liveUrl: "https://airfare-route-finder-frontend.vercel.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/AirfareDeploy",
  },
  {
    title: "Health Wallet (Personal Health Records)",
    description:
      "HIPAA-conscious personal health record (PHR) architecture featuring secure report ingestion, vitals tracking, and role-based sharing. Engineered with Next.js 15, Clerk RBAC, Neon Serverless Postgres, Prisma, and Google GenAI multimodal OCR extraction for clinical lab workflows.",
    tags: [
      "Next.js 15",
      "Clerk Auth",
      "Neon Postgres",
      "Prisma ORM",
      "Google GenAI",
      "Zod Validation",
    ],
    image: "https://play-lh.googleusercontent.com/koRzdzTKVQFAuGROwJooFttV3htWBBTO9_GG8RItBtQG1rpGomVuJVITke_n2-3iUyKm=w600-h300-pc0xffffff-pd",
    liveUrl: "https://digital-wallet-swart.vercel.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/DigitalWallet",
  },
  {
    title: "QuickCart / QuantumCart",
    description:
      "Full-stack e-commerce marketplace featuring an event-driven architecture powered by Inngest background workflow queues for asynchronous checkout, inventory synchronization, Clerk multi-role auth, and MongoDB persistence with isolated buyer/seller portals.",
    tags: ["Next.js", "Clerk Auth", "Inngest Workflows", "MongoDB", "Cloudinary"],
    image:
      "https://quick-cart-umber-omega.vercel.app/_next/static/media/logo.83ad3901.svg",
    liveUrl: "https://quick-cart-umber-omega.vercel.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/QuickCart",
  },
  {
    title: "Threads Application (Scalable Backend)",
    description:
      "Resilient social graph backend engineered in NestJS and MongoDB. Implemented JWT session lifecycle management, directional graph models for follower relationships, and token-bucket rate limiting to mitigate spam on real-time messaging endpoints.",
    tags: ["NestJS", "MongoDB", "Rate Limiting", "JWT Security", "REST APIs"],
    image:
      "https://cdn.vectorstock.com/i/500p/79/33/meta-threads-logo-symbol-vector-47787933.jpg",
    liveUrl: "https://github.com/MANIRUTHVIK/ThreadsApplication-Nest-Js-",
    codeUrl: "https://github.com/MANIRUTHVIK/ThreadsApplication-Nest-Js-",
  },
  {
    title: "NxtCart (E-Commerce Platform)",
    description:
      "Production-pattern e-commerce frontend in React.js featuring authenticated JWT session persistence, protected client-side route guards, synchronized global shopping cart state, and responsive checkout flows consuming REST APIs.",
    tags: ["React.js", "JWT Authentication", "REST APIs", "Context API"],
    image:
      "https://res.cloudinary.com/dosz4fxdk/image/upload/v1747737691/6fad20838855997d164dd88d885fad87bdfa3be6_1_fqtb9f.png",
    liveUrl: "https://kmrnxtcart.netlify.app/",
    codeUrl: "https://github.com/MANIRUTHVIK/kmrNxtcart",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-neutral-900 border-t border-zinc-800"
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
            Selected Full Stack Projects
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Product-style builds covering healthcare records, route planning,
            commerce, backend APIs, authentication, data modeling, and cloud
            integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 hover:border-teal-400 flex flex-col transition-all duration-300"
            >
              <div className="h-52 overflow-hidden relative border-b border-zinc-800 bg-neutral-950 p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-zinc-50 mb-3 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4 text-sm leading-relaxed grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold bg-zinc-900 text-zinc-300 rounded-lg hover:bg-teal-400 hover:text-neutral-950 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-zinc-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-950 bg-teal-400 rounded-lg hover:bg-rose-300 transition-all duration-300 whitespace-nowrap"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-100 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Code
                    <CodeBracketIcon className="h-4 w-4" />
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
