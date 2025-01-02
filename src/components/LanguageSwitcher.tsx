import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Fonction pour changer la langue
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false); // Ferme le menu après la sélection
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)} // Ouvre/ferme le menu
      >
        <Globe size={20} />
        <span>{selectedLanguage === 'en' ? '🇬🇧 English' : selectedLanguage === 'fr' ? '🇫🇷 Français' : '🇩🇿 العربية'}</span>
        <ChevronDown size={16} />
      </div>

      {/* Menu déroulant personnalisé */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
          <ul>
            <li
              onClick={() => handleLanguageChange('en')}
              className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            >
              <span className="mr-2">🇬🇧</span> English
            </li>
            <li
              onClick={() => handleLanguageChange('fr')}
              className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
            >
              <span className="mr-2">🇫🇷</span> Français
            </li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
