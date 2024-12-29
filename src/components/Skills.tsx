import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    skills: ["React"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-blue-600" />,
    skills: ["Laravel 11", "PHP 8", "RESTful APIs"]
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    skills: ["flutter"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
    skills: ["PHP", "JavaScript", "Python","dart"]
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    skills: ["Git", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
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