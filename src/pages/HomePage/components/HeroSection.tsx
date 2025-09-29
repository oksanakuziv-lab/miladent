const features = [
  {
    title: 'We are accepting new patients',
    desc: 'Initial examination free of charge for insured patients',
  },
  {
    title: 'Short waiting times',
    desc: 'You will get appointment within 1 week',
  },
  {
    title: 'Over 10 years of experience',
    desc: '1,000+ satisfied patients',
  },
  {
    title: 'Modern equipment',
    desc: 'Thanks to advanced technology, procedures take less time and are more comfortable',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pb-6">
      <div className="lg:hidden px-6 relative h-[630px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-banner.jpg"
            alt="Dentist consulting a patient"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-white space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Healthy teeth, peace of mind for you.
          </h1>
          <h4 className="text-md">
            Comprehensive dental care – from preventive check-ups to complex
            procedures
          </h4>
          <a
            target="_blank"
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            className="btn btn-secondary"
          >
            Booking Now →
          </a>
        </div>
      </div>

      <div className="hidden max-w-7xl mx-auto lg:px-10 lg:grid lg:grid-cols-2 gap-12 items-center relative z-10 py-6">
        <div className="space-y-8">
          <h1 className="text-5xl uppercase leading-snug cursor-default text-primary-dark">
            Healthy teeth, peace of mind for you.
          </h1>
          <h4 className="text-2xl text-textBlack cursor-default">
            Comprehensive dental care – from preventive check-ups to complex
            procedures
          </h4>
          <a
            target="_blank"
            href="https://miladentpraha.xdent.cz/wizard/clinic-selection?fbclid=PAZXh0bgNhZW0CMTEAAaccyLdfWS7vFzHzHLQhxAIDuxk2TWFe-iTOJvzIPy25x-AmHvlE0npvc-l7rg_aem_vT4YxIzcxir27yfpdxUNkg"
            className="btn btn-secondary"
          >
            Book Appointment
          </a>
        </div>
        <img
          src="/hero-banner.jpg"
          alt="Dentist consulting a patient"
          className="w-full h-[500px] object-cover object-center rounded-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-4 relative z-20 px-6 lg:px-10">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-primary-soft-light3 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-textBlack cursor-default">
              {item.title}
            </h3>
            <p className="text-sm text-textGray mt-2 cursor-default">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
