import React, { useState, useRef, useEffect } from 'react';
import { LazyImage } from '../../../components/LazyImage';
import { MotionTitle } from '../../../components/MotionTitle';
import { useTranslation } from 'react-i18next';

interface ServiceDescription {
  subtitle: string;
  text?: string;
  list?: string[];
}

interface Service {
  id: number;
  name: string;
  title: string;
  description: ServiceDescription[];
  images: string[];
}

export const ClinicServices: React.FC = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true }) as Service[];

  const [active, setActive] = useState<number | null>(
    services && services.length > 0 ? services[0].id : null,
  );
  const sectionsRef = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      let closestId = services[0].id;
      let closestDistance = Infinity;

      services.forEach((service) => {
        const el = sectionsRef.current[service.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = service.id;
          }
        }
      });

      setActive(closestId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  const scrollToSection = (id: number) => {
    const el = sectionsRef.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-10 max-w-7xl mx-auto px-6 lg:px-10">
      <MotionTitle className="text-3xl lg:text-4xl font-medium text-primary-dark mb-10">
        {t('services.title')}
      </MotionTitle>
      <div className=" flex flex-col md:flex-row gap-18">
        <div className="w-full md:w-1/4 flex flex-col justify-between md:sticky md:top-30 md:h-fit">
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`block text-left text-xl transition ${
                  active === service.id ?
                    'text-textBlack font-medium'
                  : 'text-textGray hover:text-textBlack'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4 space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              data-id={service.id}
              ref={(el) => {
                sectionsRef.current[service.id] = el;
              }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary-dark ">
                {service.title}
              </h2>

              <div
                className={`grid gap-4 mb-8 ${
                  service.images.length === 1 ?
                    'grid-cols-1 sm:grid-cols-1'
                  : 'grid-cols-1 sm:grid-cols-2'
                }`}
              >
                {service.images.map((src, i) => (
                  <LazyImage
                    key={i}
                    src={src}
                    alt={service.name}
                    className={`rounded-lg w-full object-cover object-top ${
                      service.images.length === 1 ?
                        'h-72 sm:h-64 col-span-2'
                      : 'h-64 sm:h-64'
                    }`}
                  />
                ))}
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                {service.description.map((block, i) => (
                  <div key={i}>
                    {block.subtitle && (
                      <h3 className="text-xl font-medium mb-2">
                        {block.subtitle}
                      </h3>
                    )}

                    {block.list && (
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {block.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {block.text && <p className="mb-3">{block.text}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
