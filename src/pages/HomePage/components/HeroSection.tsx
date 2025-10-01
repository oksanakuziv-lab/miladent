import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const features = t('hero.features', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  return (
    <section className="relative bg-white pb-6">
      <div className="lg:hidden px-6 relative h-[630px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-banner.jpg"
            alt="Dentist consulting a patient"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-white space-y-6">
          <h1 className="text-4xl font-bold leading-snug">{t('hero.title')}</h1>
          <h4 className="text-md">{t('hero.subtitle')}</h4>
          <a
            target="_blank"
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            className="btn btn-secondary"
          >
            {t('hero.bookingButton')}→
          </a>
        </div>
      </div>

      <div className="hidden max-w-7xl mx-auto lg:px-10 lg:grid lg:grid-cols-2 gap-12 items-center relative z-10 py-6">
        <div className="space-y-8">
          <h1 className="text-5xl uppercase leading-snug cursor-default text-primary-dark">
            {t('hero.title')}
          </h1>
          <h4 className="text-2xl text-textBlack cursor-default">
            {t('hero.subtitle')}
          </h4>
          <a
            target="_blank"
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            className="btn btn-secondary"
          >
            {t('hero.bookingButton')}
          </a>
        </div>
        <img
          src="/hero-banner.jpg"
          alt="Dentist consulting a patient"
          className="w-full h-[500px] object-cover object-center rounded-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-4 relative z-20 px-6 lg:px-10">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-primary-soft-light3 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-textBlack cursor-default">
              {item.title}
            </h3>
            <p className="text-sm text-textGray mt-2 cursor-default">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
