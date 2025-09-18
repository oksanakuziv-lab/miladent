const features = [
  {
    title: 'Free Consultation',
    desc: 'We offer flexible appointment scheduling and free to accommodate your busy life',
  },
  {
    title: 'Expert Dentist',
    desc: 'Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry',
  },
  {
    title: 'High User Rating',
    desc: 'We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized',
  },
  {
    title: 'Best Equipment',
    desc: 'Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-8 px-6 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-snug cursor-default">
            Welcome to Miladent:
            <br />
            Healthy teeth, peace of mind for you.
          </h1>
          <h4 className="text-2xl cursor-default">
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
        <img
          src="/HeroPhoto.jpg"
          alt="Dentist consulting a patient"
          className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12 relative z-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="mt-4 font-semibold cursor-default">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2 cursor-default">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
