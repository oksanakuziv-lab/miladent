import { AboutSection } from '../../components/Sections/AboutSection';
import { ContactsSection } from '../../components/Sections/ContactsSection';
import { HeroSection } from '../../components/Sections/HeroSection/HeroSection';
import { ServicesSection } from '../../components/Sections/ServicesSection';
import { WhyChooseUsSection } from '../../components/Sections/WhyChooseUsSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactsSection />
    </>
  );
};
