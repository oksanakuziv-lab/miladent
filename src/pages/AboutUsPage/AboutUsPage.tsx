import { ClinicOverviewSection } from './components/ClinicOverviewSection';
import { CustomerFeedback } from './components/CustomerFeedback';
import { EquipmentSection } from './components/EquipmentSection';
import { LearnMoreSection } from './components/LearnMoreSection';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <LearnMoreSection />
      <CustomerFeedback />
      <ClinicOverviewSection />
      <EquipmentSection />
    </>
  );
};
