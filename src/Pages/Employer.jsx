import { EmployerPageData } from '../Constants/EmployerPagData';
import ReusableHero from '../Components/ResusableHero/ReusableHero';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ReusableCTA from '../Components/ResuableCTA/ReusableCTA';
import ReusableInterest from '../Components/ReusableInterest/ReusableInterest';
import ReusableService from '../Components/ReusableServices/ReusableService';
import ReusablePricing from '../Components/ReusablePricing/ReusablePricing';

const Employer = () => {
  return (
    <>
      <Navbar />
      <ReusableHero heroData={EmployerPageData.heroSection} />
      <ReusableCTA ctaData={EmployerPageData.ctaSection} />
      <ReusableInterest intData={EmployerPageData.interestSection} />
      <ReusableService serviceData={EmployerPageData.redirectSection} />
      <ReusablePricing pricingData={EmployerPageData.pricingSection} />
      <Footer />
    </>
  );
};

export default Employer;
