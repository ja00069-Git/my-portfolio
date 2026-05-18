import { motion } from "framer-motion";
import "../components_css/About.css";
import {
  FaServer,
  FaCodeBranch,
  FaNetworkWired,
  FaCloud
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

function About() {

  const cards = [
    {
      icon: <FaServer />,
      title: "Backend Systems",
      text: "Designing the core systems that power applications, including server logic, data flow, and application architecture. I focus on building reliable services that handle real workloads and remain maintainable as systems grow."
    },
    {
      icon: <FaCodeBranch />,
      title: "API Architecture",
      text: "Building clean and scalable APIs that connect applications, services, and databases. My focus is designing clear interfaces and efficient data communication that make systems easy to extend and integrate."
    },
    {
      icon: <FaNetworkWired />,
      title: "Distributed Systems",
      text: "Exploring distributed event systems and concurrent processing to understand how modern platforms handle scale. I enjoy experimenting with performance, multithreading, and system design patterns."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      text: "Developing applications with cloud-ready architecture using containerization and modern deployment practices. My goal is to build systems that can scale reliably in cloud environments."
    }
  ];

  return (
    <section className="about">

      <div className="about-grid">

        <motion.div
          className="about-intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="about-eyebrow">About</span>

          <h2>
            Designing the systems
            <br />
            behind modern software
          </h2>

          <p>
            I'm a full-stack developer with a strong focus on backend
            architecture and scalable systems. I enjoy building the
            infrastructure behind modern applications — designing APIs,
            structuring databases, and developing distributed systems
            that can handle real workloads.
          </p>

          <p>
            My work focuses on reliability, performance, and clean
            architecture. I spend much of my time experimenting with
            system design, cloud-ready applications, and tools that make
            software easier to scale and maintain.
          </p>
        </motion.div>

        <div className="about-cards">

          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="about-icon"
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.icon}
              </motion.div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;
