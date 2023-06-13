import { JobSeekerPageData } from '../Constants/JobSeekerPageData';
import ReusableHero from '../Components/ResusableHero/ReusableHero';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ReusableCTA from '../Components/ResuableCTA/ReusableCTA';
import ReusableInterest from '../Components/ReusableInterest/ReusableInterest';
import ReusableService from '../Components/ReusableServices/ReusableService';
import ReusablePricing from '../Components/ReusablePricing/ReusablePricing';

const JobSeeker = () => {
  return (
    <>
      <Navbar />
      <ReusableHero heroData={JobSeekerPageData.heroSection} />
      <ReusableCTA ctaData={JobSeekerPageData.ctaSection} />
      <ReusableInterest intData={JobSeekerPageData.interestSection} />
      <ReusableService serviceData={JobSeekerPageData.redirectSection} />
      <ReusablePricing pricingData={JobSeekerPageData.pricingSection} />
      <Footer />
    </>
  );
};

export default JobSeeker;
