import { useTranslation } from 'react-i18next';
import { MotionTitle } from '../../../components/MotionTitle';
import { LazyImage } from '../../../components/LazyImage';

export const PricesSection: React.FC = () => {
  const { t } = useTranslation();
  const descriptionList: string[] = t('pricesSection.description', {
    returnObjects: true,
  }) as string[];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-4 items-stretch">
          <div className="h-full">
            <LazyImage
              src="/teeth.jpg"
              alt="About us 1"
              className="w-full h-full object-cover rounded-lg mx-auto"
            />
          </div>

          <div className="flex flex-col space-y-4 bg-primary-soft-light1 rounded-lg p-8 h-full">
            <MotionTitle className="text-3xl lg:text-4xl font-medium text-primary-dark mb-6">
              {t('pricesSection.title')}
            </MotionTitle>
            <ul className="list-disc pl-5 text-textGray space-y-2">
              {descriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
