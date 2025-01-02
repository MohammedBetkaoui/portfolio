import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // Fonction pour changer la langue selon la sélection
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={20} />
      {/* Sélecteur de langue */}
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇩🇿 العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
