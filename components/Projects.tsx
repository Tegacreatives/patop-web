import React from "react";

interface ProjectsProps {
  title?: string;
}

const Projects: React.FC<ProjectsProps> = ({ title }) => {
  return (
    <section className="px-12 py-16">
      {title && <h1 className="text-2xl">{title}</h1>}
      <div>Hello</div>
    </section>
  );
};

export default Projects;
