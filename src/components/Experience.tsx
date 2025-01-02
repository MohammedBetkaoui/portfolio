import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: "experience.senior_full_stack_developer",
    company: "company.tech_solutions_inc",
    period: "2021 - Present",
    description: "experience.senior_full_stack_developer_description",
    achievements: [
      "experience.senior_full_stack_developer_achievement_1",
      "experience.senior_full_stack_developer_achievement_2",
      "experience.senior_full_stack_developer_achievement_3"
    ]
  },
  {
    title: "experience.full_stack_developer",
    company: "company.digital_innovations",
    period: "2019 - 2021",
    description: "experience.full_stack_developer_description",
    achievements: [
      "experience.full_stack_developer_achievement_1",
      "experience.full_stack_developer_achievement_2",
      "experience.full_stack_developer_achievement_3"
    ]
  },
  {
    title: "experience.web_developer",
    company: "company.startup_hub",
    period: "2018 - 2019",
    description: "experience.web_developer_description",
    achievements: [
      "experience.web_developer_achievement_1",
      "experience.web_developer_achievement_2",
      "experience.web_developer_achievement_3"
    ]
  }
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{t('experience.title')}</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(experience.title)}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{t(experience.company)}</p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar size={20} className="mr-2" />
                  {experience.period}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t(experience.description)}</p>
              <div className="space-y-2">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    <p className="text-gray-700 dark:text-gray-300">{t(achievement)}</p>
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
