import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJava,
  FaMicrochip,
  FaNetworkWired,
  FaGithub,
  FaExternalLinkAlt,
  FaKey,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiTypescript,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiVercel,
  SiGmail,
} from "react-icons/si";

import "../components_css/Projects.css";


const techIcons = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  PostgreSQL: <SiPostgresql />,
  Prisma: <SiPrisma />,
  NextAuth: <FaKey />,
  "Gmail API": <SiGmail />,
  Vercel: <SiVercel />,
  Docker: <FaDocker />,
  Java: <FaJava />,
  Multithreading: <FaMicrochip />,
  "Distributed Systems": <FaNetworkWired />,
  "ASP.NET": <SiDotnet />,
  "SQL Server": <SiMysql />,
  JavaScript: <SiJavascript />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  TypeScript: <SiTypescript />,
  MongoDB: <SiMongodb />,
};


export default function ProjectCard({ project, index, featured }) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 220, damping: 24 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const px = (e.clientX - left) / width - 0.5;
    const py = (e.clientY - top) / height - 0.5;
    rotateX.set(py * -10);
    rotateY.set(px * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    /* Scroll-reveal wrapper */
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
    {/* 3-D tilt wrapper */}
    <motion.div
      ref={cardRef}
      className={`project-card ${featured ? "featured" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        height: "100%",
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
    >

      <div className="project-card-image">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

      </div>



      <div className="project-card-body">

        <p className="project-number">
          {String(index).padStart(2, "0")}
        </p>

        <h3>{project.title}</h3>

        <h4>{project.subtitle}</h4>

        <p className="project-description">
          {project.description}
        </p>



        <ul className="project-highlights">

          {project.highlights?.slice(0,3).map((item, i) => (
            <li key={i}>{item}</li>
          ))}

        </ul>



        <div className="tech-stack">

          {project.tech.map((tech, i) => (

            <span key={i}>

              {techIcons[tech]}

              {tech}

            </span>

          ))}

        </div>



        <div className="project-links">

          {project.github && (

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

              GitHub

            </motion.a>

          )}

          {project.demo && (

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >

              <FaExternalLinkAlt />

              Live Demo

            </motion.a>

          )}

          {project.status && (

            <span className="status">

              {project.status}

            </span>

          )}

        </div>

      </div>

    </motion.div>
    </motion.div>
  );
}