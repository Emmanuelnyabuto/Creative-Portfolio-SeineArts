import React from 'react';

const ProjectDetail = ({ project }) => {
  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <h4>Budget: {project.budget}</h4>
    </div>
  );
};

export default ProjectDetail;
