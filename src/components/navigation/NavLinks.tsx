import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const baseStyles = mobile
    ? "block px-3 py-2"
    : "";
  
  const linkStyles = `${baseStyles} text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`;

  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={linkStyles}>
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;