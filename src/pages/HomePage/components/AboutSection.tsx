import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../ui/icons/ArrowIcon';
import { useTranslation } from 'react-i18next';
import { LazyImage } from '../../../components/LazyImage';
import { MotionTitle } from '../../../components/MotionTitle';

export const AboutSection = () => {
  const { t } = useTranslation();
  const aboutDoctor = t('doctor.about', { returnObjects: true }) as string[];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <div className="overflow-hidden aspect-[4/4]">
            <LazyImage
              src="./mila-photo.jpg"
              alt="Miladent clinic founder in dental office"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="absolute -bottom-8 left-12 grid grid-cols-8 gap-2 opacity-70">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-black"
              ></span>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <p className="text-primary-dark mb-4 cursor-default">
            {t('aboutSection.title')}
          </p>

          <MotionTitle className="text-3xl lg:text-4xl font-medium text-primary-dark leading-tight cursor-default">
            {t('aboutSection.subtitle')}
          </MotionTitle>

          <p className="text-textBlack mb-4">{t('doctor.name')}</p>

          <ul className="list-disc pl-5 text-textGray space-y-2">
            {aboutDoctor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div>
            <h3 className="text-lg sm:text-xl font-medium text-primary-dark mb-6 cursor-default">
              {t('aboutSection.missionTitle')}
            </h3>
            <p className="text-textGray leading-relaxed cursor-default">
              {t('aboutSection.missionDescription')}
            </p>
          </div>

          <div>
            <Link
              to="/about"
              className="btn btn-secondary"
            >
              {t('aboutSection.button')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
