import { WhatsAppIcon } from '../../ui/icons/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/420777412097"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed w-14 h-14 rounded-full bottom-6 right-6 z-1000 hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      <WhatsAppIcon />
    </a>
  );
};
