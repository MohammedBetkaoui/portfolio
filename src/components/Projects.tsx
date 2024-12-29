import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Laravel and React, featuring real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel 11", "React", "MySQL", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel", "React", "WebSockets", "Redis"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking application with personalized workout plans and progress tracking.",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Laravel API", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;