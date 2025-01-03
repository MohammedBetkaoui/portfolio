import React, { useEffect } from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    skills: ["React js", "Tailwind CSS", "Next.js"]
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
    skills: ["PHP", "JavaScript", "Python", "Dart"]
  }
];

const Skills = () => {
  const { t, i18n } = useTranslation();

  // Charger la langue préférée depuis localStorage au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2, // Déclenche à 20% de visibilité
    triggerOnce: false, // Animation répétée à chaque fois
  });

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.8, ease: 'easeOut' }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
          ref={sectionRef}
        >
          {t('skills.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
              custom={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={categoryVariants}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
