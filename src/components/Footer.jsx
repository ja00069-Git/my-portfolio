import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p>© {new Date().getFullYear()} Jabesi. All rights reserved.</p>
      <div className="footer-links">
        <motion.button type="button" onClick={scrollToTop} whileHover={{ color: "var(--accent-2)" }}>Top</motion.button>
        <motion.button type="button" onClick={() => navigateTo("/projects")} whileHover={{ color: "var(--accent-2)" }}>Projects</motion.button>
        <motion.button type="button" onClick={() => navigateTo("/contact")} whileHover={{ color: "var(--accent-2)" }}>Contact</motion.button>
      </div>
    </motion.footer>
  );
}

export default Footer;