import { ToothIcon } from '../../ui/icons/ToothIcons';

const features = [
  {
    title: 'Experienced Professionals',
    description:
      'Our team consists of highly skilled and knowledgeable dental experts.',
  },
  {
    title: 'State-of-the-Art Technology',
    description:
      'We invest in the latest dental technology to provide the best care.',
  },
  {
    title: 'Patient Education',
    description:
      'We believe in educating our patients about their oral health to make informed decisions.',
  },
  {
    title: 'Convenient Hours',
    description: 'We offer flexible scheduling to accommodate your busy life.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <p className="text-primary-dark font-medium mb-4">Why Choose Us</p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive Dental Services
          </h2>
          <ul className="space-y-6">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <ToothIcon />
                <p className="text-gray-700">
                  <strong>{item.title}</strong>: {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="bg-[#fce4db] rounded-3xl overflow-hidden">
            <img
              src="./WhyChooseUsImage.jpg"
              alt="Dentist with patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
