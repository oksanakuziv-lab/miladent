import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact"
      />
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder={t('contactForm.name')}
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        required
      />
      <input
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder={t('contactForm.phone')}
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        required
      />
      <textarea
        name="message"
        placeholder={t('contactForm.message')}
        value={formData.message}
        onChange={handleChange}
        className="border rounded-sm border-primary bg-transparent p-2 outline-none"
        rows={3}
      />

      <button
        type="submit"
        className="w-full btn btn-outline"
      >
        {t('contactForm.submit')}
      </button>

      {submitted && <p className="text-grey-900">{t('contactForm.success')}</p>}
    </form>
  );
};
