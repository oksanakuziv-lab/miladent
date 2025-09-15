import { GmailIcon } from '../../../ui/icons/GmailIcon';
import { InstagramIcon } from '../../../ui/icons/InstagramIcon';
import { PhoneIcon } from '../../../ui/icons/PhoneIcon';
import { ContactFrom } from '../../ContactForm';

export const ContactsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="md:w-1/2 relative">
          <div className="w-full h-80 md:h-118">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.8346936487515!2d14.372369476532665!3d50.03319327151549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b96803f278601%3A0x5214dcf435b72b36!2zUG9saWtsaW5pa2EgQmFycmFuZG92LCBLcsWha292YSA4MDcvMjEsIDE1MiAwMCBQcmFoYSA1LUJhcnJhbmRvdiwg0KfQtdGF0ZbRjw!5e0!3m2!1suk!2spl!4v1757505460585!5m2!1suk!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
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
          <a
            href="https://www.instagram.com/miladentpraha/"
            className="flex items-center gap-2"
            target="blank"
          >
            <InstagramIcon />
            miladentpraha
          </a>
          <p>Fill out the form and we will get back as soon as possible</p>
          <ContactFrom />
        </div>
      </div>
    </section>
  );
};
