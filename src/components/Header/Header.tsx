import { useEffect, useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ContactModal } from '../ContactModal';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'About us', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Prices', url: '/prices' },
  { label: 'Gallery', url: '/gallery' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-primary-soft to-primary-lighter shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex ">
          <NavLink
            to="/"
            className="-m-1.5 p-1.5"
          >
            <img
              alt="Miladent logo"
              src="logo.png"
              className="h-16 w-auto lg:mr-16"
            />
          </NavLink>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon
              aria-hidden="true"
              className="size-6"
            />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `text-md font-medium relative px-3 py-2 
       ${
         isActive ?
           'text-gray-900 font-semibold after:w-full after:h-1 after:bg-primary after:absolute after:bottom-0 after:left-0 after:rounded'
         : 'text-gray-600 hover:text-gray-900 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:rounded'
       }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-2">
          <LanguageSwitcher />
          <ContactModal />
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed" />
        <DialogPanel className="fixed inset-0 z-40 overflow-y-auto bg-white p-6">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="-m-1.5 p-1.5"
            >
              <img
                alt="Mila denta logo"
                src="logo.png"
                className="h-16 w-auto"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon
                aria-hidden="true"
                className="size-6"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.url}
                    to={item.url}
                    className={({ isActive }) =>
                      `mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 ${
                        isActive ? 'text-gray-900' : 'text-gray-600'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-4 px-3">
                <ContactModal />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
