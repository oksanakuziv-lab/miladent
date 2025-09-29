import { GmailIcon } from '../../../ui/icons/GmailIcon';
import { InstagramIcon } from '../../../ui/icons/InstagramIcon';
import { LocationIcon } from '../../../ui/icons/LocationIcon';
import { PhoneIcon } from '../../../ui/icons/PhoneIcon';

const contacts = [
  {
    type: 'Phone',
    value: '+420 777 412 097',
    href: 'tel:+420777412097',
    Icon: PhoneIcon,
  },
  {
    type: 'Email',
    value: 'miladentpraha@gmail.com',
    href: 'mailto:miladentpraha@gmail.com',
    Icon: GmailIcon,
  },
  {
    type: 'Instagram',
    value: 'miladentpraha',
    href: 'https://www.instagram.com/miladentpraha/',
    Icon: InstagramIcon,
    external: true,
  },
  {
    type: 'Address',
    value: 'Krškova 807/21, Praha',
    href: 'https://maps.app.goo.gl/6tABt7DLCUpSHtYC7',
    Icon: LocationIcon,
  },
];

export const ContactsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-dark">
            Get In Touch
          </h2>
          {contacts.map(({ type, value, href, Icon, external }) => (
            <a
              key={type}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2">
                <Icon />
                <span className="text-primary-dark font-medium">{type}</span>
              </div>
              <span className="text-textBlack font-sm ml-[26px]">{value}</span>
            </a>
          ))}
        </div>

        <div className="w-full md:w-2/3 relative">
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.834509746849!2d14.37236947515308!3d50.03319671732102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b97da8555109f%3A0x529fcccf2f840599!2sMilaDent%20s.r.o.!5e0!3m2!1suk!2spl!4v1757938819697!5m2!1suk!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
