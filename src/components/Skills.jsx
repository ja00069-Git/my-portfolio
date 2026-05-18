import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../components_css/Skills.css";

import {
  FaNodeJs,
  FaReact,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDotnet,
  SiMysql,
} from "react-icons/si";

function TechStack() {
  const [activeFilter, setActiveFilter] = useState("All");

  const stack = [
    { icon: <FaReact />, name: "React", category: "Frontend" },
    { icon: <SiJavascript />, name: "JavaScript", category: "Frontend" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Frontend" },
    { icon: <FaHtml5 />, name: "HTML", category: "Frontend" },
    { icon: <FaCss3Alt />, name: "CSS", category: "Frontend" },
    { icon: <FaNodeJs />, name: "Node.js", category: "Backend" },
    { icon: <SiExpress />, name: "Express", category: "Backend" },
    { icon: <FaJava />, name: "Java", category: "Backend" },
    { icon: <SiDotnet />, name: "ASP.NET", category: "Backend" },
    { icon: <FaDatabase />, name: "REST APIs", category: "Backend" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Databases" },
    { icon: <SiMongodb />, name: "MongoDB", category: "Databases" },
    { icon: <SiMysql />, name: "SQL Server", category: "Databases" },
    { icon: <FaDatabase />, name: "Redis", category: "Databases" },
    { icon: <FaDocker />, name: "Docker", category: "DevOps" },
    { icon: <FaAws />, name: "AWS", category: "DevOps" },
    { icon: <FaGitAlt />, name: "Git", category: "DevOps" },
    { icon: <FaLinux />, name: "Linux", category: "DevOps" },
    { icon: <FaGitAlt />, name: "CI/CD", category: "DevOps" },
  ];

  const filters = useMemo(
    () => ["All", ...new Set(stack.map((item) => item.category))],
    [stack],
  );

  const filteredStack =
    activeFilter === "All"
      ? stack
      : stack.filter((item) => item.category === activeFilter);

  return (
    <section className="tech">

      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="tech-eyebrow">Stack</span>

        <h2>
          Technologies I use
          <br />
          to build scalable systems
        </h2>

        <p>
          My focus is backend architecture and scalable APIs, supported by modern
          frontend frameworks and cloud infrastructure.
        </p>
      </motion.div>

      <motion.div
        className="tech-filters"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            className={`tech-filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.04 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="tech-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredStack.map((tech, index) => (
            <motion.div
              className="tech-card"
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.78, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.78, y: 10 }}
              transition={{ duration: 0.28, delay: index * 0.03 }}
              whileHover={{ y: -7, scale: 1.07 }}
            >
              <motion.div
                className="tech-icon"
                whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                {tech.icon}
              </motion.div>

              <span>{tech.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}

export default TechStack;