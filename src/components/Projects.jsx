import React from "react";
import "../components_css/Projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const featuredProject = {
    title: "JobHuntHQ",
    subtitle: "Full-Stack Job Application Tracker",

    description:
      "A modern platform for managing job applications, interview pipelines, and job search analytics with a scalable backend architecture.",

    highlights: [
      "Track applications, interviews, and job search analytics",
      "REST API designed for scalability",
      "Clean developer-focused UI"
    ],

    metrics: [
      "REST API architecture",
      "Containerized services",
      "Modular backend design"
    ],

    architecture: [
      "REST API",
      "Service Layer",
      "Containerized Deployment"
    ],

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",

    tech: ["React", "Node.js", "PostgreSQL", "Docker"],

    status: "In Progress",

    github: "https://github.com/your-profile/jobhunthq",

    demo: "https://example.com/jobhunthq"
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
    },

    {
      title: "AI Document Intelligence",
      subtitle: "AI Document Processing Platform",

      description:
        "A system designed to extract structured information from documents and generate summaries using AI pipelines.",

      highlights: [
        "Document parsing pipeline",
        "AI generated summaries",
        "Batch document processing"
      ],

      metrics: [
        "Automated document extraction",
        "AI inference pipeline",
        "Scalable backend processing"
      ],

      architecture: [
        "AI Pipeline",
        "Batch Processing",
        "Service API"
      ],

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",

      tech: ["Python", "FastAPI", "Docker", "AI"],

      status: "Planned",

      github: "https://github.com/your-profile/ai-document-intelligence",

      demo: "https://example.com/ai-document-intelligence"
    }
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
          Systems and platforms I've engineered while building expertise in
          backend architecture, distributed systems, and scalable applications.
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

      </div>

    </section>
  );
}