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
      <DropdownMenu.Trigger className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        {currentLang.label}
        <ChevronDownIcon className="h-4 w-4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 w-24 rounded-md border border-gray-200 bg-white shadow-lg focus:outline-none">
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onSelect={() => setCurrentLang(lang)}
              className="cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {lang.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
