import { useTranslation } from 'react-i18next';
import { LazyImage } from '../../../components/LazyImage';
import { MotionTitle } from '../../../components/MotionTitle';

export const LearnMoreSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className="space-y-4">
            <LazyImage
              src="/LearnMore.jpg"
              alt="About us 1"
              className="w-full h-full object-cover rounded-lg mx-auto"
            />
          </div>

          <div className="flex flex-col justify-between space-y-4 bg-primary-soft-light1 h-full rounded-lg p-8">
            <MotionTitle className="text-3xl lg:text-4xl font-medium text-primary-dark">
              {t('learnMoreSection.title')}
            </MotionTitle>
            <h3 className="text-1xl uppercase text-textBlack">
              {t('learnMoreSection.subtitle')}
            </h3>
            <p className="text-textGray">
              {t('learnMoreSection.description1')}
            </p>
            <p className="text-textGray">
              {t('learnMoreSection.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
