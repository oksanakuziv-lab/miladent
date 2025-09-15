import { NavLink } from 'react-router-dom';
import { InstagramIcon } from '../../ui/icons/InstagramIcon';
import { PhoneIcon } from '../../ui/icons/PhoneIcon';
import { GmailIcon } from '../../ui/icons/GmailIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col items-start gap-4 ">
          <NavLink to="/">
            <img
              src="logo.png"
              alt="Mila denta logo"
              className="h-16 w-auto"
            />
          </NavLink>
          <p className="text-sm">Mila Denta Clinic</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-18 text-sm flex-wrap">
          <p className="font-semibold">
            Krškova 807/21, Prague, Czech Republic 15200
          </p>

          <a
            href="mailto:miladentpraha@gmail.com"
            className="flex items-center gap-2"
          >
            <GmailIcon />
            miladentpraha@gmail.com
          </a>

          <a
            href="tel:+420 777 412 097"
            className="flex items-center gap-2"
          >
            <PhoneIcon />
            +420 777 412 097
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/miladentpraha/"
            className="flex items-center gap-2"
            target="blank"
          >
            <InstagramIcon />
            miladentpraha
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mila Denta. All rights reserved.
      </div>
    </footer>
  );
};
