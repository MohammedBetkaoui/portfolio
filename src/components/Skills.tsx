import React, { useEffect } from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["React js"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["Laravel 11", "PHP 8", "RESTful APIs","Express js"]
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["PHP", "JavaScript", "Dart"]
  }
];

const Skills = () => {
  const { t, i18n } = useTranslation();

  // Charger la langue préférée depuis localStorage au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Valeur par défaut : 'en'
    i18n.changeLanguage(savedLanguage);

    // Appliquer la direction RTL si la langue est arabe
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                  {t(`skills.category_${index + 1}_title`, { defaultValue: category.title })}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {t(`skills.skill_${index + 1}_${skillIndex + 1}`, { defaultValue: skill })}
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
