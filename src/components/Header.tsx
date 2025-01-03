import React, { useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NavLinks from './navigation/NavLinks';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { i18n } = useTranslation();

  // Changer la langue et direction RTL si nécessaire
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('language', selectedLang);
    document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  // Gérer les événements clavier
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log('Touche Entrée pressée');
    }
    if (event.key === 'Escape') {
      console.log('Touche Échap pressée');
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm"
      onContextMenu={(e) => {
        e.preventDefault();
        console.log('Menu contextuel désactivé sur le header');
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Pour capturer les événements clavier
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
           
            onContextMenu={(e) => {
              e.preventDefault();
              console.log('Menu contextuel désactivé sur le logo');
            }}
            role="button"
            aria-label="Home"
            tabIndex={0}
          >
            BTK
          </div>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-8"
            
          >
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
              <option value="ar">🇩🇿 العربية</option>
            </select>

            {/* Icônes Sociales */}
            {[
              { href: 'https://github.com/MohammedBetkaoui', icon: <Github size={20} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/mohammed-betkaoui-b005342a5/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
              { href: 'mailto:mohammed.betkaoui@univ-bba.dz', icon: <Mail size={20} />, label: 'Email' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
               
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
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
              <option value="ar">🇩🇿 AR</option>
            </select>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
             
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-gray-900"
        
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
