import { NavLink } from 'react-router-dom';
import { InstagramIcon } from '../../ui/icons/InstagramIcon';
import { PhoneIcon } from '../../ui/icons/PhoneIcon';
import { GmailIcon } from '../../ui/icons/GmailIcon';
import { LocationIcon } from '../../ui/icons/LocationIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-primary-soft to-primary-lighter text-primary-darker p-8 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col items-start gap-4 ">
          <NavLink to="/">
            <img
              src="logo.png"
              alt="Miladent logo"
              className="h-16 w-auto"
            />
          </NavLink>
          <p className="text-sm">Miladent Clinic</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-18 text-sm flex-wrap">
          <a
            href="https://maps.app.goo.gl/6tABt7DLCUpSHtYC7"
            className="flex items-center gap-2"
            target="blank"
          >
            <LocationIcon />
            Krškova 807/21, Prague, Czech Republic 15200
          </a>

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
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} Miladent. All rights reserved.
      </div>
    </footer>
  );
};
