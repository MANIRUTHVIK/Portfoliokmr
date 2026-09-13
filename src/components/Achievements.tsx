"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon, TrophyIcon } from "@heroicons/react/24/outline";

const achievements = [
  {
    id: 1,
    title:
      "Runner-Up at Ekathon 2026: Official Hackathon of AI Impact Summit",
    subtitle: "Health AI on India's Digital Rails · 36-Hour Hackathon",
    badge: "Runner-Up",
    image:
      "https://res.cloudinary.com/dosz4fxdk/image/upload/v1789282751/Ekathon_e9f1ih.png",
    imageAlt: "Ekathon 2026 team and runner-up moment",
    event: "Ekathon 2026",
    points: [
      "Secured Runner-Up in a 36-hour sprint at the official hackathon of the AI Impact Summit.",
      "Architected an ambient Scribe x EMR pipeline streaming consultation audio, voice agent outputs, and clinical pre-assessment entities directly into the physician's EHR workspace.",
      "Targeted zero copy-paste and eliminated clinical context-switching during live patient consultations.",
      "Built with practical healthcare product engineering experience gained from building at 2care.ai.",
    ],
    tags: ["Ekathon 2026", "Health AI", "EMR Integration", "Clinical Workflow", "Voice AI"],
  },
  {
    id: 2,
    title: "Build for Telangana Hackathon 2025 - Certificate of Participation",
    subtitle: "NIAT x TASK Hackathon | 600+ students, 150 teams",
    badge: "Certified Participant",
    image: "/Build for Telangana Hackathon.png",
    imageAlt: "Build for Telangana Hackathon certificate awarded to Katkuri Maniruthvik",
    event: "Build for Telangana 2025",
    points: [
      "Awarded a participation certificate by NxtWave Institute of Advanced Technologies (Issue Date: 21-06-2025).",
      "The two-day hackathon, covered by Telangana Today, brought together over 600 students across 150 teams to solve public service, rural development, and health challenges.",
      "Built a real-time public incident reporting web app where citizens can submit text, image, or video reports that are directly routed to relevant government departments.",
      "Added geotagging, category-based reporting, an admin dashboard, and a risk heatmap to help authorities prioritize and act faster.",
      "Proposed vernacular AI voice input so non-English speakers can report issues in local languages, making civic safety reporting more inclusive.",
    ],
    tags: [
      "NIAT",
      "TASK",
      "CivicTech",
      "Public Safety",
      "Vernacular AI",
    ],
  },
  {
    id: 3,
    title: "Build & Fly Your Own Drones Workshop - Certificate",
    subtitle: "2-Day NIAT Innovators Workshop | 07 Jan 2025",
    badge: "Certified Participant",
    image: "/Build and Fly your Own Drone Workshop.png",
    imageAlt:
      "Build and Fly Your Own Drone Workshop certificate awarded to Katkuri Maniruthvik",
    event: "NIAT Drone Workshop",
    points: [
      "Completed the 2-day Build & Fly Your Own Drones workshop hosted by NxtWave Institute of Advanced Technologies (NIAT).",
      "Learned drone foundations including D.R.O.N.E. concepts, drone types (aerial, underwater, land), and practical use cases like agriculture, firefighting, surveying, and disaster response.",
      "Built and flew a drone from scratch using the Pluto Controller app, followed by a flying challenge focused on precision and control.",
      "Programmed autonomous takeoff workflows on day 2, demonstrating controller-free flight automation and practical coding-based control.",
      "Received the participation certificate at the workshop led by Dhruvin Dodhiya (Co-Founder, Drone School India), dated 07 Jan 2025.",
    ],
    tags: [
      "NIAT",
      "Drone Workshop",
      "Aviation Tech",
      "Autonomous Flight",
      "Innovation",
    ],
  },
  {
    id: 4,
    title: "UI/UX Mega Workshop - Certificate of Accomplishment",
    subtitle: "NIAT Workshop | Figma Redesign | 23 Dec 2024",
    badge: "Certificate of Accomplishment",
    image: "/UIUX Accomplishment.png",
    imageAlt:
      "UI UX Mega Workshop certificate of accomplishment awarded to Katkuri Maniruthvik",
    event: "NxtWave UI/UX Mega Workshop",
    points: [
      "Completed the UI/UX Mega Workshop led by Aman Maheshwari at NxtWave, focused on solving real user problems through design.",
      "Learned the complete design workflow: Discover (user observation), Define (problem framing), and Design (interface creation).",
      "Observed a hands-on Figma demonstration of rebuilding key screens from the OLA app interface.",
      "Applied the learning independently by designing a full Music Player app interface in Figma.",
      "Received the Certificate of Accomplishment for attending the workshop and successfully redesigning an app with Figma (Issue Date: 23-Dec-2024).",
    ],
    tags: [
      "UI/UX",
      "Figma",
      "Design Thinking",
      "App Redesign",
      "NIAT",
    ],
  },
  // {
  //   id: 5,
  //   title: "Pixel to Product Hackathon - Built WanderWork",
  //   subtitle: "GEN AI NIAT Club | AI-first full-stack build sprint",
  //   badge: "Hackathon Build",
  //   image:
  //     "https://cdn.builder.io/api/v1/image/assets/d86bd70eee2b47018d624354bc885fb1/86aa1a630092de11b812b95e28be57df3adac2b4e954ab209748d3557d4ed993?placeholderIfAbsent=true&width=200",
  //   imageAlt:
  //     "WanderWork platform and hackathon showcase from Pixel to Product event",
  //   event: "Pixel to Product",
  //   points: [
  //     "Built WanderWork with Venkatesh Bijigiri and Nithwesh Akinapally during the Pixel to Product Hackathon by the GEN AI NIAT Club.",
  //     "Created an AI-driven platform for digital nomads to plan travel, discover remote jobs, and connect with communities.",
  //     "Implemented features like flight and hotel price prediction, city insights (WiFi, safety, living cost), remote job listings, and coliving/coworking discovery.",
  //     "Shipped a full-stack prototype in a rapid 8-12 hour sprint using AI-assisted and no-code workflows.",
  //     "Used Relume, Builder.io, Lovable AI, Figma, Supabase, ChatGPT, and Claude AI, while learning resilience under tool limits and tight deadlines.",
  //   ],
  //   tags: [
  //     "Hackathon",
  //     "WanderWork",
  //     "Digital Nomads",
  //     "No-Code AI",
  //     "Supabase",
  //   ],
  // },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-semibold mb-4 tracking-wider uppercase">
            Honors & Hackathons
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
            Achievements & Hackathon Builds
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Recognition, certifications, and hackathon builds focused on
            healthcare, civic systems, and emerging technologies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
            >
              <div className="grid gap-0 lg:grid-cols-5">
                {achievement.image && (
                  <div className="relative aspect-4/3 bg-neutral-900 lg:aspect-auto lg:col-span-2 border-b border-zinc-800 lg:border-b-0 lg:border-r">
                    <Image
                      src={achievement.image}
                      alt={achievement.imageAlt}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                )}

                <div
                  className={`p-6 sm:p-8 ${
                    achievement.image ? "lg:col-span-3" : "lg:col-span-5"
                  }`}
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-teal-400/40 bg-teal-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-teal-300">
                      <TrophyIcon className="h-4 w-4" />
                      {achievement.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300">
                      <SparklesIcon className="h-4 w-4 text-rose-300" />
                      {achievement.event}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-50 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-teal-300 font-medium mb-5">
                    {achievement.subtitle}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {achievement.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-zinc-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-rose-300"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}