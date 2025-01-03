import React, { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Laravel , featuring real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel 11", "MySQL"],
   
    githubLink: "https://github.com/MohammedBetkaoui/store_laravel_11.git"
  },
  {
    title: "La plateforme d'enchères pour le matériel agricole",
    description: "AgriBid is the auction platform for agricultural equipment, allowing professionals in the farming industry to buy and sell quality machinery at competitive prices. With our simple and secure interface, participate in auctions with confidence and find the tools you need to boost your production.",
    image: "/pexels-pixabay-163752.jpg",
    technologies: ["Laravel", "MySQL", "WebSockets"],
   
    githubLink: "https://github.com/MohammedBetkaoui/agriculture.git"
  },
];

const Projects = () => {
  const { t, i18n } = useTranslation();

  // Charger la langue préférée au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Valeur par défaut : 'en'
    i18n.changeLanguage(savedLanguage);

    // Appliquer la direction RTL si la langue est arabe
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t(`projects.project_${index + 1}_title`, { defaultValue: project.title })}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`projects.project_${index + 1}_description`, { defaultValue: project.description })}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                 
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} className="mr-1" />
                    {t('projects.code')}
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
