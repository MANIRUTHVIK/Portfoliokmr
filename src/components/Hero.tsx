"use client";
import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const bookingUrl = "https://cal.com/maniruthvik/15min";
const resumeUrl =
  "https://drive.google.com/file/d/1ae96s6nCjoL0W8vRmDVCgrBGVUcIvPen/view?usp=sharing";

const stats = [
  { label: "Voice Agent Latency", value: "<300ms" },
  { label: "External Integrations", value: "20+" },
  { label: "Production Startup SDE", value: "8 Mos" },
  { label: "Ekathon 2026 (Health AI)", value: "Runner-Up" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-neutral-950"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-teal-300 bg-zinc-900 rounded-lg border border-teal-400/30 tracking-wide">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                Software Development Engineer · Voice AI & Full Stack
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-teal-300">Katkuri Maniruthvik</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-200 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Architecting production Voice AI systems, low-latency streaming
              pipelines, multi-tenant healthcare platforms, and scalable web apps.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-zinc-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Completed an 8-month SDE tenure at{" "}
              <span className="text-teal-300 font-semibold">2care.ai</span>,
              where I engineered Voice AI agents optimized for &lt;300ms turn-taking
              latency, built multi-tenant backends supporting 20+ clinical EHR/EMR
              integrations, and automated patient communication on India&apos;s digital rails.
            </motion.p>

            {/* Senior Impact Metrics */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3.5 hover:border-teal-400/50 transition-colors text-center sm:text-left"
                >
                  <p className="text-lg sm:text-xl font-extrabold text-teal-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-zinc-400 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="min-h-12 px-5 py-3 bg-teal-400 text-neutral-950 text-sm font-bold rounded-lg hover:bg-rose-300 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
              >
                Get In Touch
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 px-5 py-3 border border-zinc-700 text-zinc-100 text-sm font-bold rounded-lg hover:border-teal-400 hover:text-teal-300 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
              >
                Book 15 Min Call
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 px-5 py-3 border border-zinc-700 text-zinc-100 text-sm font-bold rounded-lg hover:border-rose-300 hover:text-rose-300 transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <ArrowDownTrayIcon className="h-4 w-4 shrink-0" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="https://github.com/MANIRUTHVIK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-zinc-900 hover:bg-teal-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-zinc-800"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-zinc-300 group-hover:text-neutral-950 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/katkuri-mani-ruthvik-245834319"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-zinc-900 hover:bg-teal-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-zinc-800"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-zinc-300 group-hover:text-neutral-950 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl shadow-teal-950/30">
              <Image
                src="https://res.cloudinary.com/dosz4fxdk/image/upload/v1761910988/Gemini_Generated_Image_KMR_edited_catljr.png"
                alt="Katkuri Maniruthvik"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="text-zinc-500 hover:text-teal-300 transition-colors"
        >
          <span className="sr-only">Scroll down</span>
          <ArrowDownIcon className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
