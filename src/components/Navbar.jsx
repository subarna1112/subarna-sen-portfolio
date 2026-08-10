import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Barna home">
          <span className="navbar__logo-mark">S</span>
          <span>barna.</span>
        </a>

        <nav
          className={`navbar__nav ${
            menuOpen ? 'navbar__nav--open' : ''
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="navbar__link"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="navbar__contact"
          >
            Let's talk <span>↗</span>
          </a>
        </nav>

        <button
          type="button"
          className="navbar__menu"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;