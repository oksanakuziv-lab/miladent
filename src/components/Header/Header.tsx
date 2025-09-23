import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ContactModal } from '../ContactModal';
import { MenuIcon } from '../../ui/icons/MenuIcon';
import { CancelIcon } from '../../ui/icons/CancelIcon';

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
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative w-8 h-8 inline-flex items-center justify-center outline-none"
          >
            <MenuIcon
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                mobileMenuOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
              }`}
            />
            <CancelIcon
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-300 ease-in-out transform ${
                mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
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
        <Transition
          appear
          show={mobileMenuOpen}
          unmount={false}
        >
          <TransitionChild
            enter="transition ease-out duration-300"
            enterFrom="-translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-full opacity-0"
          >
            <DialogPanel className="fixed inset-0 z-40 overflow-y-auto bg-white p-6">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/"
                  className="-m-1.5 p-1.5"
                >
                  <img
                    alt="Miladent logo"
                    src="logo.png"
                    className="h-16 w-auto"
                  />
                </NavLink>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8"
                ></button>
              </div>
              <div className="space-y-2 pt-12">
                {navItems.map((item) => (
                  <NavLink
                    key={item.url}
                    to={item.url}
                    className={({ isActive }) =>
                      `mx-3 flex justify-between py-4 text-md font-medium hover:bg-gray-50 border-b border-primary-soft
                    active:bg-primary-soft transition-colors duration-200 ${
                      isActive ? 'text-gray-900' : 'text-gray-600'
                    }`
                    }
                  >
                    {item.label}
                    <span>
                      <ArrowLongRightIcon className="size-4 opacity-50" />
                    </span>
                  </NavLink>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-6 px-3">
                <ContactModal />
                <LanguageSwitcher />
              </div>
            </DialogPanel>
          </TransitionChild>
        </Transition>
      </Dialog>
    </header>
  );
};
