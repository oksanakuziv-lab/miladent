import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GoogleIcon } from '../../../ui/icons/GoogleIcon';
import { useState } from 'react';
import { Pattern } from '../../../ui/icons/Pattern';
import { useTranslation } from 'react-i18next';

export const CustomerFeedback: React.FC = () => {
  const { t } = useTranslation();
  const reviews = t('customerFeedback.reviews', {
    returnObjects: true,
  }) as Array<{
    id: number;
    source: string;
    text: string;
    name: string;
    date: number;
    rating: number;
    link: string;
  }>;

  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  const sourceMap: Record<string, { label: string; logo: React.ReactNode }> = {
    google: {
      label: t('customerFeedback.viewOnGoogle'),
      logo: <GoogleIcon />,
    },
    znamylekar: {
      label: t('customerFeedback.seeOnZnamyLekar'),
      logo: (
        <img
          src="/znamylekar.png"
          alt="ZnamyLekar"
          className="w-5 h-5"
        />
      ),
    },
  };

  return (
    <section className=" py-16 relative">
      <Pattern className="absolute inset-0 w-full h-full opacity-20 -z-1" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col justify-between h-full ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase text-textBlack">
            {t('customerFeedback.title')}
          </h2>

          <div className="flex gap-4 mt-8 lg:mt-0 lg:mb-10 self-end lg:self-start">
            <button className="review-prev w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-white hover:bg-primary transition">
              <ArrowLeft size={20} />
            </button>
            <button className="review-next w-12 h-12 flex items-center justify-center rounded-full bg-primary-dark text-white hover:bg-primary transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.review-prev',
              nextEl: '.review-next',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review) => {
              const source = sourceMap[review.source];
              const isLong = review.text.length > maxLength;
              const displayText =
                expanded ?
                  review.text
                : review.text.slice(0, maxLength) + (isLong ? '...' : '');

              return (
                <SwiperSlide key={review.name}>
                  <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between m-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center font-medium">
                          {review.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-textDark">
                            {review.name}
                          </span>
                          {review.date && (
                            <span className="text-sm text-textGray">
                              {review.date}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {review.rating && (
                      <div className="flex gap-1 mt-2">
                        {Array(5)
                          .fill(0)
                          .map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              className={`w-4 h-4 ${
                                starIndex < review.rating ?
                                  'text-yellow-400'
                                : 'text-gray-300'
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 19.771 4.665 24 6 15.266 0 9.423l8.332-1.268z" />
                            </svg>
                          ))}
                      </div>
                    )}

                    <p className="text-textGray leading-relaxed mt-4">
                      “{displayText}”
                      {isLong && (
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className="text-secondary hover:underline text-sm pl-2"
                        >
                          {expanded ?
                            t('customerFeedback.showLess')
                          : t('customerFeedback.readMore')}
                        </button>
                      )}
                    </p>

                    {source && (
                      <div className="flex items-center gap-2 mt-4">
                        <a
                          href={review.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          {source.logo}
                          {source.label}
                        </a>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
