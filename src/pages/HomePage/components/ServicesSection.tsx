import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SliderButton } from '../../../ui/Components/SliderButton';
import { ArrowLeftIcon } from '../../../ui/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../ui/icons/ArrowRightIcon';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Initial Examination and Consultation',
    description:
      'Professional cleaning to remove plaque, tartar, and prevent gum disease.',
  },
  {
    id: 2,
    title: 'Dental Hygiene',
    description:
      'Professional cleaning to remove plaque, tartar, and prevent gum disease.',
  },
  {
    id: 3,
    title: 'Cavity Treatment',
    description: 'Removal of tooth decay and filling to restore tooth health.',
  },
  {
    id: 4,
    title: 'Endodontics',
    description:
      'Treatment of infected tooth pulp to save and preserve the tooth.',
  },
  {
    id: 5,
    title: 'Prosthetic Dentistry',
    description:
      'Replacement of missing or damaged teeth with crowns, bridges, or dentures.',
  },
  {
    id: 6,
    title: 'Teeth Whitening',
    description: 'Safe and effective whitening to brighten your smile.',
  },
  {
    id: 7,
    title: 'Tooth Extraction',
    description: 'Gentle removal of damaged or problematic teeth.',
  },
  {
    id: 8,
    title: 'Implantology',
    description:
      'Surgical placement of dental implants for long-term tooth replacement.',
  },
  {
    id: 9,
    title: 'Botulinum Toxin Application',
    description: 'Treatment of Bruxism and “Gummy Smile”',
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
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex justify-between items-center mb-6">
        <Link
          to={'/services'}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-dark"
        >
          Services
        </Link>
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
                <div className="hover:shadow-lg transition bg-white rounded-2xl shadow p-6 min-h-[220px]">
                  <h3 className="text-xl text-textBlack font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-textGray">{service.description}</p>
                  <Link
                    to="/services"
                    className="block mt-6 text-primary-dark hover:underline font-medium"
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
