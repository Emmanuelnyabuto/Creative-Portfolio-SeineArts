import React from 'react';
import Navbar from '../components/shared/Navbar';
import ProjectCard from '../components/specific/ProjectCard';

const projectData = [
  { title: 'Graphic Design for a Startup', description: 'Logo and branding project.' },
  { title: 'Voiceover for Commercial', description: 'Professional voiceover for an ad.' },
  { title: 'Videography for Event', description: 'Capture and edit event videos.' },
  { title: 'Photography for Wedding', description: 'Professional wedding photography services.' },
  // Add more projects here
];

const ProjectManagementPage = () => {
  return (
    <>
      <Navbar />
      <div className="project-management-page">
        <h1>Manage Your Projects</h1>
        <div className="project-list">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectManagementPage;