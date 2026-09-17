import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education', target: 'education' },
  { label: 'Work', target: 'creative-work' },
  { label: 'GitHub', target: 'github' },
  { label: 'Contact', target: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );

    localStorage.setItem(
      'portfolio-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* Logo */}
        <button
          type="button"
          className="navbar__logo"
          onClick={() => scrollToSection('home')}
          aria-label="Go to homepage"
        >
          <span>SS</span>
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`navbar__links ${
            menuOpen ? 'navbar__links--open' : ''
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              type="button"
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="navbar__link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">

          {/* Theme Toggle */}
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            aria-pressed={darkMode}
          >
            <span className="navbar__theme-icon">
              {darkMode ? '☀' : '☾'}
            </span>

            <span className="navbar__theme-text">
              {darkMode ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className={`navbar__menu ${
              menuOpen ? 'navbar__menu--open' : ''
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;