// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application to manage tasks efficiently.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A portfolio website with responsive design.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 mt-2 inline-block hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
