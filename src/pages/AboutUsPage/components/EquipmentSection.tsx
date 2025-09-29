import React from 'react';

const images = ['/clinic-1.jpg', '/clinic-2.jpg', '/clinic-3.jpg'];

export const EquipmentSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase text-textBlack mb-4">
        Modern equipment for your comfort
      </h2>
      <p className="text-gray-600 mb-8">
        Cutting-edge technology meets patient comfort. Modern equipment ensures
        the highest standard of care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
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
