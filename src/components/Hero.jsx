import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";

import { FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";

import { SiPostgresql, SiTypescript } from "react-icons/si";

import defaultProfile from "../assets/image.png";
import "../components_css/Hero.css";

function Hero() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 40, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const x = (clientX / window.innerWidth - 0.5) * 10;
    const y = (clientY / window.innerHeight - 0.5) * 10;

    rotateX.set(y * -0.15);
    rotateY.set(x * 0.15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const orbitConfigs = {
    inner: {
      radiusVar: "--orbitInner",
      spinDuration: 24,
      floatDuration: 3.6,
      direction: 1,
      itemClass: "orbit-item-inner",
      badgeClass: "badge-inner",
    },
    outer: {
      radiusVar: "--orbitOuter",
      spinDuration: 40,
      floatDuration: 4.4,
      direction: -1,
      itemClass: "orbit-item-outer",
      badgeClass: "badge-inner badge-inner-outer",
    },
  };

  const iconRenderers = {
    node: <FaNodeJs />,
    postgres: <SiPostgresql />,
    typescript: <SiTypescript />,
    docker: <FaDocker />,
    aws: <FaAws />,
    git: <FaGitAlt />,
  };

  const innerOrbit = [
    { icon: "node", angle: 0 },
    { icon: "postgres", angle: 90 },
    { icon: "typescript", angle: 180 },
    { icon: "docker", angle: 270 },
  ];

  const outerOrbit = [
    { icon: "aws", angle: 0 },
    { icon: "git", angle: 120 },
    { icon: "node", angle: 240 },
  ];

  const renderOrbit = (items, orbitKey) => {
    const orbit = orbitConfigs[orbitKey];

    return (
      <motion.div
        className={`orbit-spin orbit-spin-${orbitKey}`}
        animate={{ rotate: orbit.direction === 1 ? 360 : -360 }}
        transition={{
          duration: orbit.spinDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map(({ icon, angle }, i) => (
          <div
            key={`${orbitKey}-${icon}-${angle}`}
            className={`orbit-item ${orbit.itemClass}`}
            style={{
              transform: `rotate(${angle}deg) translateX(var(${orbit.radiusVar}))`,
            }}
          >
            <div className="orbit-anchor">
              <motion.div
                className="orbit-counter"
                initial={{ rotate: -angle }}
                animate={{ rotate: (orbit.direction === 1 ? -360 : 360) - angle }}
                transition={{
                  duration: orbit.spinDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className={orbit.badgeClass}
                  animate={{ y: [0, -8, 0], scale: [1, 1.06, 1] }}
                  transition={{
                    duration: orbit.floatDuration + i * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.18,
                  }}
                >
                  {iconRenderers[icon]}
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT */}

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-hello-pill">
          <span className="hello-dot" />
          Hello World
        </span>

        <h1>
          I'm <span className="hero-accent">Jabesi</span>
        </h1>

        <h2 className="hero-role">Full-Stack Developer • Backend Focus</h2>

        <p className="hero-description">
          I design scalable backend systems, APIs and cloud-ready applications.
          My focus is building reliable architecture that powers modern
          software.
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="button-primary"
            onClick={() => navigateTo("/projects")}
          >
            View Projects
          </button>

          <button
            type="button"
            className="button-secondary"
            onClick={() => navigateTo("/contact")}
          >
            Work With Me
          </button>
        </div>
      </motion.div>

      {/* RIGHT */}

      <div className="hero-visual">
        {/* TILTED ORBITS & RINGS */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "flat",
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
          }}
        >
          <div className="hero-glow" />

          <motion.div
            className="orbit-ring ring-1"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />

          <motion.div
            className="orbit-ring ring-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {renderOrbit(innerOrbit, "inner")}
          {renderOrbit(outerOrbit, "outer")}
        </motion.div>

        {/* PROFILE IMAGE - OUTSIDE GRID */}
        <div className="profile-photo-wrap">
          <motion.img
            src={defaultProfile}
            className="profile-photo"
            alt="Jabesi – Full Stack Developer"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
