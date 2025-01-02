import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NavLinks from './navigation/NavLinks';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">MB.</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          {/* Social Links, Theme Toggle & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {/* Sélecteur de langue */}
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
            >
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
             
            </select>
            <a href="https://github.com/MohammedBetkaoui" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-betkaoui-b005342a5/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mohammed.betkaoui@univ-bba.dz" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none"
            >
              <option value="en">🇬🇧 EN</option>
              <option value="fr">🇫🇷 FR</option>
              
            </select>
            <button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
