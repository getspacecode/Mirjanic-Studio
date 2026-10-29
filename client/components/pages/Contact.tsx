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
      <div className="mx-auto max-w-3xl">
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
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

        <motion.form
          onSubmit={handleSubmit}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-10"
        >
          <motion.div variants={fadeUp} className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your name
              </label>

              <input
                id="name"
                name="name"
                onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                type="text"
                placeholder="John Doe"
                required
                maxLength={100}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                placeholder="john@example.com"
                required
                maxLength={254}
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
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
              required
              defaultValue=""
              onChange={(e) => setMsg({ ...msg, projectType: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors focus:border-accent"
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option value="Short-form editing">Short-form editing</option>
              <option value="Long-form editing">Long-form editing</option>
              <option value="Ads and commercials">Ads & commercials</option>
              <option value="Motion graphics">Motion graphics</option>
              <option value="Other">Something else</option>
            </select>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Tell me about your project
            </label>

            <textarea
              id="message"
              name="message"
              onChange={(e) => setMsg({ ...msg, message: e.target.value })}
              placeholder="Describe your project, goals, timeline, or anything else I should know..."
              required
              minLength={10}
              maxLength={5000}
              rows={6}
              className="w-full resize-y rounded-lg border border-border bg-surface-2 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
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
        </motion.form>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted"
        >
          Prefer email?{" "}
          <a
            href={`mailto:${info.clientEmail}`}
            className="text-accent-soft transition-colors hover:text-accent"
          >
            Get in touch directly.
          </a>
        </motion.p>
      </div>
    </main>
  );
}
