import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "IT Support Technician",
      role: "AnyMind Group",
      duration: "October 2024 - Now",
      description:
        "Ensured smooth live streaming operations by managing technical infrastructure, troubleshooting hardware, and maintaining network stability for optimal broadcast quality.",
    },
    {
      title: "Informatics Program Introduction",
      role: "Documentation Coordinator",
      duration: "June 2024 - December 2024 (7 months)",
      description:
        "Led a team to document events, manage archives, and prepare promotional materials for campus media.",
    },
    {
      title: "UMN Documentation",
      role: "Verified Team",
      duration: "September 2022 - Present (2 years)",
      description:
        "Managed photo, video, website, and broadcasting to document and share campus events effectively.",
    },
    {
      title: "UMN Documentation",
      role: "Web Dev",
      duration: "January 2023 - February 2024 (1 year)",
      description:
        "Managed campus content dynamically using React. Focused on building and maintaining features for articles, photos, and videos while ensuring real-time updates with React and backend APIs.",
    },
    {
      title: "St. Barnabas Church Website",
      role: "Web Developer",
      duration: "June 2023 - December 2023 (7 months)",
      description:
        "Developed a user-friendly Laravel-based website, enabling seamless content management for church admins and providing a secure and efficient experience.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        Organizational & Professional Experience
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3 className="timeline-title">{exp.title}</h3>
            <p className="timeline-role">{exp.role}</p>
            <p className="timeline-duration">{exp.duration}</p>
            <p className="timeline-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
