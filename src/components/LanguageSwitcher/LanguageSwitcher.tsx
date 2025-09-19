import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { DropdownMenu } from 'radix-ui';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'cz', label: 'CZ' },
  { code: 'ua', label: 'UA' },
];

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="btn btn-outline outline-none">
        {currentLang.label}
        <ChevronDownIcon className="h-4 w-1" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 rounded-md shadow-lg focus:outline-none z-60">
          {languages
            .filter((lang) => lang.code !== currentLang.code)
            .map((lang) => (
              <DropdownMenu.Item
                key={lang.code}
                onSelect={() => setCurrentLang(lang)}
                className="cursor-pointer w-full px-4 py-2 text-sm bg-primary-soft outline-primary text-primary-dark"
              >
                {lang.label}
              </DropdownMenu.Item>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
