import { useTranslation } from 'react-i18next';
import { CheckIcon } from '../../../ui/icons/CheckIcon';
import { Pattern } from '../../../ui/icons/Pattern';

export const WhyChooseUsSection = () => {
  const { t } = useTranslation();
  const features = t('whyChooseUs.features', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-16 relative">
      <Pattern className="absolute inset-0 w-full h-full opacity-20 -z-1" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2
            data-aos="flip-up"
            data-aos-duration="1000"
            className="text-3xl lg:text-4xl font-medium text-primary-dark mb-6"
          >
            {t('whyChooseUs.title')}
          </h2>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <CheckIcon className="flex-shrink-0 h-6 w-6" />
                <p className="text-textBlack">
                  <strong>{item.title}</strong> {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 relative">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src="./team-photo.jpg"
            alt="Dental clinic team smiling at camera"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};
