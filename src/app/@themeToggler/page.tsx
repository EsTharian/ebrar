'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    setIsDarkMode(
      theme === 'dark' ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches &&
          !window.localStorage.getItem('theme')),
    );
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    setIsDarkMode((prev) => !prev);
  };

  const icon = isDarkMode ? (
    <span className="icon-[mdi--light-flood-up]" />
  ) : (
    <span className="icon-[mdi--moon-waning-crescent]" />
  );

  return (
    <button onClick={toggleDarkMode} type="button">
      <span className="sr-only">{isDarkMode ? 'Açık mod' : 'Koyu mod'}</span>
      {icon}
    </button>
  );
}
