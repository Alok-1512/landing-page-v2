import { BrandPageData } from '../Constants/BrandPageData';
import ReusableHero from '../Components/ResusableHero/ReusableHero';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ReusableCTA from '../Components/ResuableCTA/ReusableCTA';
import ReusableInterest from '../Components/ReusableInterest/ReusableInterest';
import ReusableService from '../Components/ReusableServices/ReusableService';

const BrandPage = () => {
  return (
    <>
      <Navbar />
      <ReusableHero heroData={BrandPageData.heroSection} />
      <ReusableCTA ctaData={BrandPageData.ctaSection} />
      <ReusableInterest intData={BrandPageData.interestSection} />
      <ReusableService serviceData={BrandPageData.redirectSection} />

      <Footer />
    </>
  );
};

export default BrandPage;
