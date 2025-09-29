import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../ui/icons/ArrowIcon';

export const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/4]">
            <img
              src="./mila-photo.jpg"
              alt="Miladent clinic founder in dental office"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-12 grid grid-cols-8 gap-2 opacity-70">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-black"
              ></span>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <p className="text-primary-dark mb-4 cursor-default">About Us</p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-primary-dark leading-tight cursor-default">
            Patient-Centered Care
          </h2>

          <p className="text-textGray leading-relaxed cursor-default">
            Dr. Liudmyla Ryboichuk, dentist, specialist representative. Since
            2011, she has been providing patients with comprehensive dental
            care. A member of the Czech Dental Chamber. She is committed to
            continuous education both in the Czech Republic and abroad. She
            delivers high-quality care with an emphasis on an individual
            approach. Specialization: conservative dentistry, endodontics,
            prosthetic and aesthetic dentistry.
          </p>

          <div>
            <h3 className="text-lg sm:text-xl font-medium text-primary-dark mb-6 cursor-default">
              Our Mission
            </h3>
            <p className="text-textGray leading-relaxed cursor-default">
              At Miladent, our mission is to promote optimal oral health and
              create lasting, confident smiles.
            </p>
          </div>

          <div>
            <Link
              to="/about"
              className="btn btn-secondary"
            >
              Learn More
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
