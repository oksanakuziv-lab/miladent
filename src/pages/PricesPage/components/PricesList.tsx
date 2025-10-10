import { useTranslation } from 'react-i18next';

type Service = {
  category: string;
  price?: string;
};

export const PricesList: React.FC = () => {
  const { t } = useTranslation();
  const services: Service[] = t('pricesList.list', {
    returnObjects: true,
  }) as Service[];

  return (
    <section className="bg-white py-10 max-w-7xl mx-auto px-6 lg:px-10">
      <h2
        data-aos="flip-up"
        data-aos-duration="1000"
        className="text-3xl lg:text-4xl font-medium text-primary-dark mb-10 flex items-center gap-4"
      >
        {t('pricesSection.title')}
        <span className="flex-1 h-[1px] bg-primary" />
      </h2>
      {services.map((service, index) => (
        <div
          key={index}
          className="max-w-3xl mx-auto border-b border-b-primary w-full flex justify-between items-center py-4 text-left text-lg"
        >
          <span className="text-textBlack">{service.category}</span>
          <span className="text-textGray">{service.price}</span>
        </div>
      ))}
    </section>
  );
};
