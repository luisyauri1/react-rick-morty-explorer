import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark-theme');
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
    >
      <span className="theme-toggle__icon">
        {isDark ? <MdLightMode aria-hidden="true" /> : <MdDarkMode aria-hidden="true" />}
      </span>
    </button>
  );
}
