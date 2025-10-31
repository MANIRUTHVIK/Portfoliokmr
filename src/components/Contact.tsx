"use client";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = JSON.stringify({ name, email, subject, message });
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    console.log(response);
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out to
            me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">
                    Location
                  </h4>
                  <p className="text-slate-600">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Email</h4>
                  <a
                    href="mailto:katkurimaniruthvik@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    katkurimaniruthvik@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <PhoneIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                  <p className="text-slate-600">+91 9704592587</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", url: "https://github.com/MANIRUTHVIK/" },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/katkuri-mani-ruthvik-245834319",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all">
                      <span className="text-sm font-medium">
                        {social.name[0]}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 p-8 rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
