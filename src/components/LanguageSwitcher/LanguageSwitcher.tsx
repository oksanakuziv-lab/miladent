import { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Language } from '../../types/types';
import { changeLanguage } from '../../locales/i18n';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'cz', label: 'CZ' },
  { code: 'ua', label: 'UA' },
];

const LANG_KEY = 'appLanguage';

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(
    () =>
      languages.find(
        (l) => l.code === (localStorage.getItem(LANG_KEY) || 'cz'),
      )!,
  );
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    changeLanguage(currentLang.code as Language);
    localStorage.setItem(LANG_KEY, currentLang.code);
  }, [currentLang]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <>
      <div className="relative hidden md:inline-block">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="btn btn-outline flex items-center gap-1"
        >
          {currentLang.label}
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        {open && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white z-50"
          >
            {languages
              .filter((lang) => lang.code !== currentLang.code)
              .map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang);
                    setOpen(false);
                  }}
                  className="cursor-pointer text-primary-dark px-4 py-2 text-sm hover:bg-primary-soft-light rounded-md border border-transparent hover:border-primary"
                >
                  {lang.label}
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="flex gap-4 md:hidden">
        {languages.map((lang) => (
          <>
            <button
              key={lang.code}
              onClick={() => setCurrentLang(lang)}
              className={`text-md ${
                currentLang.code === lang.code ?
                  'underline font-semibold text-primary-dark'
                : 'text-gray-600'
              }`}
            >
              {lang.label}
            </button>
            <span>|</span>
          </>
        ))}
      </div>
    </>
  );
};
