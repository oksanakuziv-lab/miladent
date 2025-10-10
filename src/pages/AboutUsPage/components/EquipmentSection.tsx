import React from 'react';
import { useTranslation } from 'react-i18next';
import { MotionTitle } from '../../../components/MotionTitle';
import { LazyImage } from '../../../components/LazyImage';

const images = ['/clinic-1.jpg', '/clinic-2.jpg', '/clinic-3.jpg'];

export const EquipmentSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <MotionTitle className="text-3xl lg:text-4xl font-medium text-primary-dark mb-4">
        {t('equipment.title')}
      </MotionTitle>
      <p className="text-gray-600 mb-8">{t('equipment.description')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt="Modern dentist equipment in clinic"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
};
