import { useTranslation } from 'react-i18next';

export const ClinicOverviewSection: React.FC = () => {
  const { t } = useTranslation();
  const aboutDoctor = t('doctor.about', { returnObjects: true }) as string[];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="h-full lg:col-span-2 bg-primary-soft-light1 p-8 rounded-lg">
            <h3 className="text-sm uppercase text-textGray mb-2">
              {t('doctor.title')}
            </h3>
            <h2
              data-aos="flip-up"
              data-aos-duration="1000"
              className="text-3xl lg:text-4xl text-textBlack mb-4"
            >
              {t('doctor.name')}
            </h2>
            <ul className="list-disc pl-5 text-textGray space-y-2">
              {aboutDoctor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src="/mila-photo.jpg"
              alt="Mila Photo"
              className="w-full h-full lg:h-[450px] object-cover object-center rounded-lg"
            />
          </div>

          <div className="lg:col-span-4 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-lg italic text-textGray mb-4">
                “{t('doctor.quote')}”
              </p>
              <div className="flex flex-col">
                <span className="font-semibold text-textBlack">
                  {t('doctor.name')}
                </span>
                <span className="text-sm text-textGray">
                  {t('doctor.position')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
