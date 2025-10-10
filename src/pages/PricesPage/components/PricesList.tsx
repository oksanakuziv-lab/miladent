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
    <section className="w-full max-w-3xl mx-auto p-4 px-6 lg:px-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="border-b border-b-primary w-full flex justify-between items-center py-4 text-left text-lg"
        >
          <span className="text-textBlack">{service.category}</span>
          <span className="text-textGray">{service.price}</span>
        </div>
      ))}
    </section>
  );
};
