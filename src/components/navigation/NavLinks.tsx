import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '#home', label: 'home' },
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const { t } = useTranslation(); // Hook pour obtenir les traductions

  const baseStyles = mobile
    ? "block px-3 py-2"
    : "";
  
  const linkStyles = `${baseStyles} text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`;

  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={linkStyles}>
          {t(`nav.${link.label}`, { defaultValue: link.label })} {/* Traduction dynamique */}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
