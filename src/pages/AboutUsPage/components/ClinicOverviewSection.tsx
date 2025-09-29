const aboutDoctor = [
  'Dentist, specialist representative.',
  'Since 2011, she has been providing patients with comprehensive dental care.',
  'A member of the Czech Dental Chamber.',
  'She is committed to continuous education both in the Czech Republic and abroad.',
  'She delivers high-quality care with an emphasis on an individual approach.',
  'Specialization: conservative dentistry, endodontics, prosthetic and aesthetic dentistry.',
];

export const ClinicOverviewSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="h-full lg:col-span-2 bg-primary-soft-light1 p-8 rounded-lg">
            <h3 className="text-sm uppercase text-textGray mb-2">Specialist</h3>
            <h2 className="text-2xl lg:text-4xl text-textBlack mb-4">
              Dr. Liudmyla Ryboichuk
            </h2>
            <ul className="list-disc pl-5 text-textGray space-y-2">
              {aboutDoctor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <img
              src="/mila-photo.jpg"
              alt="Mila Photo"
              className="w-full h-full lg:h-[450px] object-cover object-center rounded-lg"
            />
          </div>

          <div className="lg:col-span-4 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-lg italic text-textGray mb-4">
                “I understand each of you — especially if you’ve had unpleasant
                experiences with dental treatment in the past or haven’t paid
                much attention to your oral health until now. We give every
                patient time, patience, and gentle, pain-free care, always
                focusing on your comfort. We are here so that you don’t have to
                be afraid to come back, but instead return with the confidence
                that you are taking the very best care of your smile.”
              </p>
              <div className="flex flex-col">
                <span className="font-semibold text-textBlack">
                  Dr. Liudmyla Ryboichuk
                </span>
                <span className="text-sm text-textGray">
                  Founder of Miladent Clinic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
