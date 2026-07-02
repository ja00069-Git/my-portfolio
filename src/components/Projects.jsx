import React from "react";
import "../components_css/Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const featuredProject = {
    title: "Job Seekers Hub",
    subtitle: "Job Search Management Platform",

    description:
      "Built and shipped a full-stack job search platform that tracks applications, imports hiring emails, and keeps resumes and companies organized.",

    highlights: [
      "Implemented Gmail import flow for hiring emails",
      "Built drag-and-drop application stage tracking",
      "Shipped dashboard metrics for pipeline visibility"
    ],

    metrics: [
      "Pipeline visibility",
      "Stage tracking",
      "User-scoped data"
    ],

    architecture: [
      "Full-Stack Build",
      "Auth + Email Import",
      "Relational Data Model"
    ],

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Gmail API",
      "Vercel",
    ],

    status: "Shipped",

    github: "https://github.com/ja00069-Git/jobseekershub",

    demo: "https://jobseekershub.vercel.app/"
  };


  const projects = [
    {
      title: "Distributed Event System",
      subtitle: "High-Performance Event Processing",

      description:
        "A system designed to simulate high-volume event streams and explore concurrency patterns and performance engineering.",

      highlights: [
        "Multithreaded event processing engine",
        "Concurrent logging system",
        "Performance-focused architecture"
      ],

      metrics: [
        "Simulated large event workloads",
        "Concurrent thread execution",
        "Optimized logging pipeline"
      ],

      architecture: [
        "Concurrent Processing",
        "Thread Coordination",
        "Event Simulation"
      ],

      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",

      tech: ["Java", "Multithreading", "Distributed Systems"],

      status: "In Progress",

      github: "https://github.com/your-profile/distributed-event-system",

      demo: "https://example.com/distributed-event-system"
    },

    {
      title: "Project Management System",
      subtitle: "Enterprise Project & Group Management",

      description:
        "An enterprise-style application for managing projects, teams, and approval workflows with role-based permissions.",

      highlights: [
        "Role-based access system",
        "Project approval workflow",
        "Dynamic leadership assignment"
      ],

      metrics: [
        "Relational SQL architecture",
        "Multi-user role system",
        "Enterprise workflow logic"
      ],

      architecture: [
        "RBAC",
        "Workflow Engine",
        "Relational Schema"
      ],

      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",

      tech: ["ASP.NET", "SQL Server", "JavaScript"],

      status: "Completed",

      github: "https://github.com/your-profile/project-management-system",

      demo: "https://example.com/project-management-system"
    }
  ];

  const upcomingProjects = [
    {
      title: "Stealth Build Alpha",
      subtitle: "Upcoming Project",
      description:
        "A new product concept is currently in design and architecture discovery.",
      tech: [],
      status: "Coming Soon",
      upcoming: true,
    },
    {
      title: "Stealth Build Beta",
      subtitle: "Upcoming Project",
      description:
        "Another portfolio slot reserved for an in-progress system planned for release.",
      tech: [],
      status: "Coming Soon",
      upcoming: true,
    },
  ];


  return (
    <section id="projects" className="projects">

      <div className="projects-header section-heading">

        <span className="projects-eyebrow eyebrow">
          Featured Work
        </span>

        <h2 className="projects-title">
          Selected Projects
        </h2>

        <p className="projects-intro">
          Shipped projects that show product thinking, full-stack ownership, and
          the ability to build polished, production-ready applications.
        </p>

      </div>


      <div className="featured-project">

        <ProjectCard
          project={featuredProject}
          index={1}
          featured={true}
        />

      </div>


      <div className="projects-list">

        {projects.map((project, index) => (

          <ProjectCard
            key={index}
            project={project}
            index={index + 2}
          />

        ))}

        {upcomingProjects.map((project, index) => (

          <ProjectCard
            key={`upcoming-${index}`}
            project={project}
            index={projects.length + index + 2}
          />

        ))}

      </div>

    </section>
  );
}