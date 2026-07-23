"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className="py-20 px-8 bg-bg-primary relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="font-h2 text-h2 text-text-primary">
              Have a project? <br />
              <span className="text-accent">Let&apos;s talk!</span>
            </h2>

            <p className="text-body-lg text-text-secondary max-w-md">
              I&apos;m currently taking on new projects and would love to hear
              about yours. Drop me a message and let&apos;s build something
              amazing together.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:simantop13@gmail.com"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </div>

              <div>
                <p className="text-label-sm text-text-muted">Email</p>
                <p className="text-text-primary font-medium">
                  simantop13@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+8801782930690"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">call</span>
              </div>

              <div>
                <p className="text-label-sm text-text-muted">Phone</p>
                <p className="text-text-primary font-medium">
                  +880 1782930690
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          action="https://formsubmit.co/simantop13@gmail.com"
          method="POST"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-bg-card border border-border glass-card space-y-6"
        >
          {/* FormSubmit Settings */}
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://simanto-paul-portfolio.vercel.app/#contact"
          />

          <div className="grid grid-cols-2 gap-6">
            <InputField
              label="First Name"
              placeholder="John"
              name="firstName"
            />

            <InputField
              label="Last Name"
              placeholder="Doe"
              name="lastName"
            />
          </div>

          <InputField
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            name="email"
          />

          <div className="space-y-2">
            <label className="text-label-sm text-text-muted px-1">
              Your Message
            </label>

            <textarea
              name="message"
              required
              className="w-full bg-bg-primary/50 border border-border rounded-2xl p-4 text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all h-32 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-accent text-white font-bold rounded-2xl shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all flex items-center justify-center gap-2"
          >
            Send Message
            <span className="material-symbols-outlined">send</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-label-sm text-text-muted px-1">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required
        className="w-full bg-bg-primary/50 border border-border rounded-2xl p-4 text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}