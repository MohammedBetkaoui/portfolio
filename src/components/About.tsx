import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); // Utilisation de useTranslation

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('about.title')} {/* Titre dynamique */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('about.intro')} {/* Texte d'introduction dynamique */}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('about.details')} {/* Détails dynamiques */}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.frontend')} {/* Frontend dynamique */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t('about.frontendSkills')}</p> {/* Compétences frontend */}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {t('about.backend')} {/* Backend dynamique */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{t('about.backendSkills')}</p> {/* Compétences backend */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
