import { CollegePageData } from '../Constants/CollegePageData';
import ReusableHero from '../Components/ResusableHero/ReusableHero';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ReusableCTA from '../Components/ResuableCTA/ReusableCTA';
import ReusableInterest from '../Components/ReusableInterest/ReusableInterest';
import ReusableService from '../Components/ReusableServices/ReusableService';

const CollegePage = () => {
  return (
    <>
      <Navbar />
      <ReusableHero heroData={CollegePageData.heroSection} />
      <ReusableCTA ctaData={CollegePageData.ctaSection} />
      <ReusableInterest intData={CollegePageData.interestSection} />
      <ReusableService serviceData={CollegePageData.redirectSection} />

      <Footer />
    </>
  );
};

export default CollegePage;
