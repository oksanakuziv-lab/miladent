import { Headphones } from '../../ui/icons/Headphones';
import { StethoscopeIcon } from '../../ui/icons/StethoscopeIcon';
import { ChairIcon } from '../../ui/icons/ChairIcon';
import { StarIcon } from '../../ui/icons/StarIcon';

const features = [
  {
    icon: <Headphones />,
    title: 'Free Consultation',
    desc: 'We offer flexible appointment scheduling and free to accommodate your busy life',
  },
  {
    icon: <StethoscopeIcon />,
    title: 'Expert Dentist',
    desc: 'Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry',
  },
  {
    icon: <StarIcon />,
    title: 'High User Rating',
    desc: 'We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized',
  },
  {
    icon: <ChairIcon />,
    title: 'Best Equipment',
    desc: 'Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-8 px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-snug">
            Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
            Smile
          </h1>
          <a
            target="_blank"
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Booking Now →
          </a>
        </div>

        <div>
          <img
            src="./HeroPhoto.jpg"
            alt="Smiling patient"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
