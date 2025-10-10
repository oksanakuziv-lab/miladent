import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Services {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const ServicesSection: React.FC = () => {
  const [swiperReady, setSwiperReady] = useState(false);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const { t } = useTranslation();
  const services = t('servicesSection.services', {
    returnObjects: true,
  }) as Services[];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex justify-between items-center mb-6">
        <Link
          to={'/services'}
          className="text-3xl lg:text-4xl font-medium text-primary-dark"
        >
          <h2
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            {t('servicesSection.title')}
          </h2>
        </Link>
        <div className="flex gap-4 items-center">
          <button
            ref={prevRef}
            className="review-prev w-10 h-10 flex items-center justify-center rounded-full bg-primary-dark text-white hover:bg-primary transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="review-next w-10 h-10 flex items-center justify-center rounded-full bg-primary-dark text-white hover:bg-primary transition"
          >
            <ArrowRight size={20} />
          </button>
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
                <Link
                  to="/services"
                  className="block relative rounded-2xl overflow-hidden shadow-lg min-h-[220px] group"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-top z-0"
                  />
                  <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/30" />

                  <div className="relative z-20 p-6 flex flex-col justify-between h-full text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm">{service.description}</p>
                    <span className="mt-4 underline font-medium">
                      {t('servicesSection.detail')}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
