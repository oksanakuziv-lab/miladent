import { ImplantIcon } from '../../ui/icons/ImplantIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { CrownIcon } from '../../ui/icons/CrownIcon';
import { CavityIcon } from '../../ui/icons/CavityIcon';
import { ToothShineIcon } from '../../ui/icons/ToothShineIcon';
import { ToothGumIcon } from '../../ui/icons/ToothGumIcon';
import { SmileIcon } from '../../ui/icons/SmileIcon';
import { BracesIcon } from '../../ui/icons/BracesIcon';
import { VeneerIcon } from '../../ui/icons/VeneerIcon';
import { ForcepsIcon } from '../../ui/icons/ForcepsIcon';
import { ToothScanIcon } from '../../ui/icons/ToothScanIcon';
import { ToolsIcon } from '../../ui/icons/ToolsIcon';
import { SliderButton } from '../../ui/Components/SliderButton';
import { ArrowLeftIcon } from '../../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../ui/icons/ArrowRightIcon';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Therapeutic Dentistry',
    description:
      'Treatment of cavities, pulpitis, and other dental diseases using modern methods and materials.',
    icon: <CavityIcon />,
  },
  {
    id: 2,
    title: 'Professional Hygiene',
    description:
      'Removal of plaque and tartar, polishing, and fluoridation to maintain healthy teeth and gums.',
    icon: <SmileIcon />,
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    description:
      'Safe enamel whitening methods for a natural and radiant smile.',
    icon: <ToothShineIcon />,
  },
  {
    id: 4,
    title: 'Orthodontics',
    description: 'Teeth alignment and bite correction with braces or aligners.',
    icon: <BracesIcon />,
  },
  {
    id: 5,
    title: 'Aesthetic Dentistry',
    description: 'Veneers and tooth restoration to create a perfect smile.',
    icon: <VeneerIcon />,
  },
  {
    id: 6,
    title: 'Dental Prosthetics',
    description:
      'Restoration of missing teeth with crowns, bridges, or removable dentures.',
    icon: <CrownIcon />,
  },
  {
    id: 7,
    title: 'Dental Implants',
    description:
      'A modern solution for replacing missing teeth with titanium implants.',
    icon: <ImplantIcon />,
  },
  {
    id: 8,
    title: 'Oral Surgery',
    description:
      'Tooth extractions, including complex cases, and other surgical procedures.',
    icon: <ForcepsIcon />,
  },
  {
    id: 9,
    title: 'Periodontology',
    description:
      'Treatment of gum and bone tissue diseases to preserve smile health.',
    icon: <ToothGumIcon />,
  },
  {
    id: 10,
    title: 'X-ray Diagnostics',
    description:
      'Accurate and safe examination of teeth and jaws for effective treatment planning.',
    icon: <ToothScanIcon />,
  },
  {
    id: 11,
    title: 'Emergency Dentistry',
    description:
      'Urgent care for acute pain, injuries, or other emergency conditions.',
    icon: <ToolsIcon />,
  },
];

export const ServicesSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="pt-6 md:pt-10 lg:pt-14 pb-14 lg:pb-20 max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
        <div className="flex gap-6">
          <SliderButton
            icon={<ArrowLeftIcon />}
            ref={prevRef}
          />
          <SliderButton
            icon={<ArrowRightIcon />}
            ref={nextRef}
          />
        </div>
      </div>

      <div className="relative">
        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {services.map((service) => (
              <SwiperSlide
                key={service.id}
                className="pt-10 pb-10"
              >
                <div className="hover:shadow-lg transition bg-white rounded-2xl shadow p-6 min-h-[280px]">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    to="/services"
                    className="block mt-6 text-primary hover:underline font-medium"
                  >
                    Detail →
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
