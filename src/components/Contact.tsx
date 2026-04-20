"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const bookingUrl = "https://cal.com/maniruthvik/15min";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const body = JSON.stringify({ name, email, message });

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
            Start a Conversation
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Send a message for project ideas, collaboration, or feedback. Book a
            focused 15-minute call when a live conversation is better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-zinc-50 mb-6">
              Contact Details
            </h3>
            <p className="text-zinc-400 mb-8">
              I am open to internships, web development work, technical
              discussions, and projects that need a builder who can learn fast.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <MapPinIcon className="h-5 w-5 text-teal-300" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-100">
                    Location
                  </h4>
                  <p className="text-zinc-400">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <EnvelopeIcon className="h-5 w-5 text-teal-300" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-100">Email</h4>
                  <a
                    href="mailto:katkurimaniruthvik@gmail.com"
                    className="text-teal-300 hover:text-rose-300 transition-colors"
                  >
                    katkurimaniruthvik@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <PhoneIcon className="h-5 w-5 text-teal-300" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-100">Phone</h4>
                  <p className="text-zinc-400">+91 9704592587</p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <CalendarDaysIcon className="h-5 w-5 text-teal-300" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-zinc-100">
                    Quick Call
                  </h4>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-rose-300 transition-colors"
                  >
                    Book a 15-minute meeting
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-zinc-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MANIRUTHVIK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 hover:bg-teal-400 hover:text-neutral-950 border border-zinc-800 hover:border-teal-400 transition-all"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  className="h-11 w-11 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-300 hover:bg-teal-400 hover:text-neutral-950 border border-zinc-800 hover:border-teal-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/80 p-8 rounded-lg border border-zinc-800"
          >
            <h3 className="text-2xl font-bold text-zinc-50 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-zinc-700 rounded-lg text-zinc-100 placeholder:text-zinc-600 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
                  placeholder="Tell me what you want to build or discuss."
                ></textarea>
              </div>

              {status === "sent" && (
                <p className="text-sm font-medium text-teal-300">
                  Message sent. I will get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-rose-300">
                  Message could not be sent. Please try again or book a call.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-teal-400 text-neutral-950 font-semibold py-3 px-6 rounded-lg hover:bg-rose-300 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border border-zinc-700 text-zinc-100 font-semibold py-3 px-6 rounded-lg hover:border-teal-400 hover:text-teal-300 transition-all duration-300 whitespace-nowrap"
              >
                <CalendarDaysIcon className="h-5 w-5" />
                Book a 15-minute Call
              </a>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-zinc-50 mb-2">
              Book a Meeting
            </h3>
            <p className="text-zinc-400">
              Pick a time that works for you. The call will be scheduled
              directly through Cal.com.
            </p>
          </div>
          <div className="h-[720px] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
            <iframe
              src={`${bookingUrl}?embed=true&theme=dark`}
              title="Book a 15-minute meeting with Katkuri Maniruthvik"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
