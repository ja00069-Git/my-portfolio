import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home",     path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills",   path: "/skills" },
  { label: "About",    path: "/about" },
  { label: "Contact",  path: "/contact" },
];

function Navbar({ currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <button
        type="button"
        className="navbar-brand"
        onClick={() => onNavigate("/")}
      >
        Jabesi<span>.</span>
      </button>

      {/* Navigation */}
      <ul className="navbar-links">
        {links.map(({ label, path }) => {
          const active = currentPath === path;
          return (
            <li key={path} className="navbar-link-item">
              <button
                type="button"
                className={`navbar-link${active ? " active" : ""}`}
                onClick={() => onNavigate(path)}
              >
                {label}
                {active && (
                  <motion.span
                    className="navbar-active-bar"
                    layoutId="navbar-active-bar"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Actions */}
      <div className="navbar-actions">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="navbar-btn-ghost"
        >
          GitHub
        </a>
        <button
          type="button"
          className="navbar-btn-primary"
          onClick={() => onNavigate("/contact")}
        >
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;