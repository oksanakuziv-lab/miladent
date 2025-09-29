import { CheckIcon } from '../../../ui/icons/CheckIcon';
import { Pattern } from '../../../ui/icons/Pattern';

const features = [
  {
    title: 'Excellent transport accessibility',
    description:
      'Public transport and PID connections, parking available in front of the health centre building, wheelchair access.',
  },
  {
    title: 'We cooperate with health insurance companies',
    description: 'VZP 111, OZP 207, ZPMV 211, VoZP 201, ZPŠ 209.',
  },
  {
    title: 'Detailed examination and maximum communication',
    description:
      'We provide a thorough check-up and explain every step clearly.',
  },
  {
    title: 'Possibility to book an appointment online',
    description:
      'Easy online booking lets you schedule your visit in just a few clicks.',
  },
  {
    title: 'We respect your individual needs',
    description:
      'Personalized approach with full attention to your unique requirements.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 relative">
      <Pattern className="absolute inset-0 w-full h-full opacity-20 -z-1" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-dark mb-6">
            Why Choose Us
          </h2>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <CheckIcon className="flex-shrink-0 h-6 w-6" />
                <p className="text-textBlack">
                  <strong>{item.title}</strong>: {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="./team-photo.jpg"
              alt="Dental clinic team smiling at camera"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
