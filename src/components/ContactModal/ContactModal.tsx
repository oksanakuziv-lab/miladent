import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { ContactForm } from '../ContactForm';
import { CancelIcon } from '../../ui/icons/CancelIcon';
import { useTranslation } from 'react-i18next';

export const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Dialog.Trigger asChild>
        <button className="btn btn-primary">{t('contactModal.title')}</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f8f6f2] p-6 shadow-xl z-50">
          <Dialog.Title className="text-2xl font-serif mb-4 text-primary-dark">
            {t('contactModal.title')}
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-gray-600">
            {t('contactModal.description1')}
          </Dialog.Description>
          <a
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            target="_blanc"
            rel="noopener noreferrer"
            className="w-full btn btn-primary"
          >
            {t('contactModal.bookButton')}
          </a>

          <Dialog.Description className="mb-6 mt-6 text-gray-600">
            {t('contactModal.description2')}
          </Dialog.Description>

          <ContactForm />

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              <CancelIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
