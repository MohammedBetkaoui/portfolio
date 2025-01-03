import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  // Intersection Observer avec ajustement pour visibilité
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1, // Déclenche avec une petite partie visible
    triggerOnce: false, // Répète l'animation à chaque visibilité
    rootMargin: '0px 0px 100px 0px', // Ajoute un décalage en bas pour meilleure détection
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.3 } },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre Animé */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {t('about.title')}
        </motion.h2>

        {/* Contenu de la Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('about.intro')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('about.details')}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.frontend')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.frontendSkills')}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.backend')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.backendSkills')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
