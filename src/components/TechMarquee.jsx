import {
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt
} from "react-icons/fa";

import {
  SiPostgresql,
  SiTypescript,
  SiReact
} from "react-icons/si";

import "../components_css/TechMarquee.css";

function TechMarquee() {

  const icons = [
    <FaNodeJs />,
    <SiPostgresql />,
    <SiTypescript />,
    <FaDocker />,
    <FaAws />,
    <FaGitAlt />,
    <SiReact />,
  ];

  return (
    <section className="tech-marquee">

      <div className="marquee">

        <div className="marquee-track">

          <div className="marquee-group">
            {icons.map((Icon, i) => (
              <div key={i} className="marquee-item">
                {Icon}
              </div>
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {icons.map((Icon, i) => (
              <div key={i + "dup"} className="marquee-item">
                {Icon}
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default TechMarquee;