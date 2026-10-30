"use client";
import { motion } from "motion/react";
import { useState } from "react";
const info = {
  clientEmail: "",
};
const access_key = "e6db3fbf-9dd3-4ac2-a120-b005cc7309b7";
const emptyMsg = {
  access_key: access_key,
  name: "",
  email: "",
  projectType: "",
  message: "",
};
const clientContact = {
  instagram: {
    username: "@mirjanicstudio",
    url: "https://www.instagram.com/mirjanicstudio/",
  },
  phone: {
    number: "+381 62 8111 772",
    url: "tel:+381 62 8111 772",
  },
  discord: {
    username: "mirjanicstudio",
    url: "https://discord.com/users/mirjanicstudio",
  },
};
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState(emptyMsg);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(msg);
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...msg,
          access_key: access_key,
          subject: `${msg.name} — ${msg.projectType}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setMsg(emptyMsg);
        console.log("Successed");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <main id="Contact" className="min-h-screen bg-bg px-6 py-24 text-fg">
      <div className="mx-auto max-w-7xl">
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
          >
            Get in touch
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-5 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Let&apos;s work <span className="text-accent">together.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl leading-7 text-muted">
            Have a project in mind? Tell me what you&apos;re working on, and
            let&apos;s create something great together.
          </motion.p>
        </motion.header>

        <div className="flex flex-col justify-around gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <motion.aside
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative order-2 flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-10 lg:order-1"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent-strong/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-accent/[0.06] blur-3xl" />

            <div className="relative">
              <motion.div variants={fadeUp} className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Contact details
                </p>

                <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Let&apos;s connect
                  <span className="text-accent">.</span>
                </h2>

                <p className="max-w-sm text-sm leading-7 text-muted">
                  Have a quick question or prefer talking directly? Reach out
                  through any of the channels below.
                </p>
              </motion.div>

              <div className="space-y-4">
                {/* Instagram */}
                <motion.a
                  variants={fadeUp}
                  href={clientContact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/70 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-400/[0.08] text-pink-300 transition-colors duration-300 group-hover:bg-pink-400/[0.14]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      className="size-6"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium text-muted">
                      Instagram
                    </p>
                    <p className="truncate text-sm font-semibold transition-colors group-hover:text-accent">
                      {clientContact.instagram.username}
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    className="size-5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </motion.a>

                {/* Phone */}
                <motion.a
                  variants={fadeUp}
                  href={clientContact.phone.url}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/70 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-400/[0.14]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.6}
                      className="size-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 4h4l2 5-2.5 1.5a14 14 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium text-muted">
                      Phone number
                    </p>
                    <p className="truncate text-sm font-semibold transition-colors group-hover:text-accent">
                      {clientContact.phone.number}
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    className="size-5 shrink-0 text-muted transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.35 1.9.7 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.35 1.84.58 2.8.7a2 2 0 011.73 2.03z"
                    />
                  </svg>
                </motion.a>

                {/* Discord */}
                <motion.a
                  variants={fadeUp}
                  href={clientContact.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface-2/70 p-4 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/[0.08] text-indigo-300 transition-colors duration-300 group-hover:bg-indigo-400/[0.14]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                      aria-hidden="true"
                    >
                      <path d="M19.27 5.33a18.2 18.2 0 00-4.52-1.4.07.07 0 00-.07.03c-.2.36-.43.83-.59 1.2a16.9 16.9 0 00-5.08 0c-.16-.38-.4-.84-.6-1.2a.07.07 0 00-.07-.03 18.15 18.15 0 00-4.52 1.4.06.06 0 00-.03.03C.92 9.57.13 13.68.52 17.74c0 .02.02.04.04.05a18.3 18.3 0 005.54 2.8.07.07 0 00.08-.03c.43-.59.81-1.22 1.14-1.88a.07.07 0 00-.04-.1 12.1 12.1 0 01-1.73-.82.07.07 0 01-.01-.11c.12-.09.23-.18.35-.28a.07.07 0 01.07-.01c3.64 1.66 7.58 1.66 11.17 0a.07.07 0 01.07.01c.12.1.23.19.35.28a.07.07 0 01-.01.11c-.55.32-1.13.6-1.73.82a.07.07 0 00-.04.1c.33.66.71 1.29 1.14 1.88a.07.07 0 00.08.03 18.25 18.25 0 005.55-2.8.07.07 0 00.03-.05c.47-4.69-.79-8.77-3.34-12.38a.06.06 0 00-.03-.03zM8.02 15.16c-1.09 0-1.99-1-1.99-2.22s.88-2.22 1.99-2.22c1.12 0 2.01 1.01 1.99 2.22 0 1.22-.88 2.22-1.99 2.22zm7.96 0c-1.09 0-1.99-1-1.99-2.22s.88-2.22 1.99-2.22c1.12 0 2.01 1.01 1.99 2.22 0 1.22-.88 2.22-1.99 2.22z" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium text-muted">
                      Discord
                    </p>
                    <p className="truncate text-sm font-semibold transition-colors group-hover:text-accent">
                      {clientContact.discord.username}
                    </p>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    className="size-5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </motion.a>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-10 border-t border-border pt-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                  </span>

                  <p className="text-xs font-medium text-muted">
                    Open to new projects and collaborations
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Contact form — first on mobile */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="order-1 flex min-w-0 flex-1 flex-col space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-10 lg:order-2"
          >
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Start a project
              </p>

              <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Tell me about it
                <span className="text-accent">.</span>
              </h2>

              <p className="text-sm leading-7 text-muted">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  value={msg.name}
                  onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  value={msg.email}
                  onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium"
              >
                What do you need?
              </label>

              <select
                id="projectType"
                name="projectType"
                value={msg.projectType}
                required
                onChange={(e) =>
                  setMsg({ ...msg, projectType: e.target.value })
                }
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/10"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="Short-form editing">Short-form editing</option>
                <option value="Long-form editing">Long-form editing</option>
                <option value="Ads and commercials">
                  Ads &amp; commercials
                </option>
                <option value="Motion graphics">Motion graphics</option>
                <option value="Other">Something else</option>
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Tell me about your project
              </label>

              <textarea
                id="message"
                name="message"
                value={msg.message}
                onChange={(e) => setMsg({ ...msg, message: e.target.value })}
                placeholder="Describe your project, goals, timeline, or anything else I should know..."
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                className="w-full resize-y rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-auto pt-2">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : undefined}
                whileTap={!loading ? { scale: 0.97 } : undefined}
                transition={{ duration: 0.2 }}
                className="w-full rounded-lg bg-accent-strong px-6 py-4 font-semibold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send inquiry"}
              </motion.button>
            </motion.div>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                role="status"
                aria-live="polite"
                className="text-sm text-muted"
              >
                {status}
              </motion.p>
            )}

            <motion.p
              variants={fadeUp}
              className="border-t border-border pt-5 text-sm text-muted"
            >
              Prefer email?{" "}
              <a
                href={`mailto:${info.clientEmail}`}
                className="font-medium text-accent-soft transition-colors hover:text-accent"
              >
                Get in touch directly.
              </a>
            </motion.p>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
