import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise-level web applications using Laravel and React. Implemented CI/CD pipelines and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40%",
      "Implemented microservices architecture",
      "Led team of 5 developers"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using Laravel and React. Focused on creating scalable and maintainable code.",
    achievements: [
      "Delivered 15+ successful projects",
      "Implemented automated testing",
      "Improved code coverage by 80%"
    ]
  },
  {
    title: "Web Developer",
    company: "StartUp Hub",
    period: "2018 - 2019",
    description: "Worked on various startup projects, focusing on rapid prototyping and MVP development.",
    achievements: [
      "Built 5 MVPs for different startups",
      "Reduced development time by 30%",
      "Implemented agile methodologies"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="text-lg text-gray-600">{experience.company}</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar size={20} className="mr-2" />
                  {experience.period}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="space-y-2">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;