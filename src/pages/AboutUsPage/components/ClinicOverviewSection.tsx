export const ClinicOverviewSection: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <img
          src="./WhyChooseUsPhoto.jpg"
          alt="Mila Denta Clinic"
          className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
        />

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to Mila Denta Clinic
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Mila Denta, we combine modern technology with a warm and
            welcoming environment. Our clinic is designed to provide
            comprehensive dental care while ensuring your comfort at every
            visit.
          </p>
        </div>
      </div>
    </section>
  );
};
