import { motion } from "framer-motion";
import "../components_css/Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const METHODS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/your-profile",
    href: "https://github.com/",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Based remotely • Available worldwide",
    href: null,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-layout">

        {/* LEFT COLUMN */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="contact-eyebrow">Contact</span>

          <h2 className="contact-title">
            Let's build something useful
          </h2>

          <p className="contact-intro">
            I'm open to backend, full-stack, and systems-focused opportunities.
            If you're building reliable software and need someone who enjoys
            clean architecture, APIs, and scalable systems, let's talk.
          </p>

          <ul className="contact-points">
            {[
              "Backend architecture and API development",
              "Full-stack applications with modern UI systems",
              "Remote-friendly collaboration and global teams",
            ].map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="https://example.com/resume.pdf"
            className="contact-cta"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="contact-links-card">
          <motion.h3
            className="contact-reachout-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reach out
          </motion.h3>

          {METHODS.map((m, i) => {
            const Tag = m.href ? motion.a : motion.div;
            const linkProps = m.href ? { href: m.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag
                key={m.label}
                className="contact-method"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                {...linkProps}
              >
                <span className="contact-method-icon">{m.icon}</span>
                <span className="contact-method-text">
                  <span className="contact-method-label">{m.label}</span>
                  <span className="contact-method-value">{m.value}</span>
                </span>
              </Tag>
            );
          })}

          <motion.p
            className="contact-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Replace these placeholders with your real contact details
            when you're ready to publish.
          </motion.p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
