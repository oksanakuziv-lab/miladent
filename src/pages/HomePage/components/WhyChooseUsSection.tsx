import { CheckIcon } from '../../../ui/icons/CheckIcon';
import { Pattern } from '../../../ui/icons/Pattern';

const features = [
  {
    title: 'Professional team with many years of experience',
    description: 'Skilled specialists dedicated to high-quality care.',
  },
  {
    title: 'Short appointment waiting times',
    description: 'Quick scheduling tailored to your needs.',
  },
  {
    title: 'Modern equipment',
    description: 'Advanced technology for precise and effective treatment.',
  },
  {
    title: 'A relaxed environment',
    description: 'where you won’t feel like you’re “at the dentist’s”',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-12 relative">
      <Pattern className="absolute inset-0 w-full h-full opacity-20 -z-1" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-primary-dark text-4xl font-bold mb-6">
            Why Choose Us
          </h2>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <CheckIcon className="flex-shrink-0 h-6 w-6" />
                <p className="text-gray-700">
                  <strong>{item.title}</strong>: {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="./WhyChooseUsPhoto.jpg"
              alt="Dental clinic team smiling at camera"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
