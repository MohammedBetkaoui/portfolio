import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["React", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["Laravel 11", "PHP 8", "RESTful APIs"]
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["MySQL"]
  },
 
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["PHP", "JavaScript", "Python","dart"]
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;