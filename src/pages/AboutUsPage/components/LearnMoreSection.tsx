export const LearnMoreSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-5xl text-primary-dark text-center mb-10 uppercase">
          Learn more about us
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className="space-y-4">
            <img
              src="/LearnMore.jpg"
              alt="About us 1"
              className="w-full object-contain rounded-lg mx-auto"
            />
          </div>

          <div className="flex flex-col justify-between space-y-4 bg-primary-soft-light1 h-full rounded-lg p-8">
            <h3 className="text-4xl uppercase text-textBlack">
              Your smile matters to us
            </h3>
            <p className="text-textGray">
              We are a dedicated team committed to providing top-quality
              services. Our approach combines expertise, innovation, and care to
              ensure the best results for our clients.
            </p>
            <p className="text-textGray">
              Our mission is to create an experience that is both engaging and
              effective, making sure every interaction brings value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
