import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export const ContactModal = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Dialog.Trigger asChild>
        <button className="px-8 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition">
          Contact Us
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#f8f6f2] p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-serif mb-4">
            Contact Us
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-gray-600">
            Book an appointment now
          </Dialog.Description>

          <a
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            target="_blanc"
            rel="noopener noreferrer"
            className="w-full mb-6 rounded-full border bg-primary border-secondary text-white py-2 hover:bg-secondary transition text-center block"
          >
            Book Appointment
          </a>

          <Dialog.Description className="mb-6 text-gray-600">
            Or fill out the form and we’ll get back to you shortly.
          </Dialog.Description>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              placeholder="Full Name"
              className="border-b border-black bg-transparent p-2 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-b border-black bg-transparent p-2 outline-none"
            />
            <textarea
              placeholder="Message"
              className="border-b border-black bg-transparent p-2 outline-none resize-none"
              rows={3}
            />

            <button
              type="submit"
              className="w-full rounded-full border py-2 text-black hover:bg-black hover:text-white transition"
            >
              Send Message
            </button>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
