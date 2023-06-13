import { StartupPageData } from '../Constants/StartupPageData';
import ReusableHero from '../Components/ResusableHero/ReusableHero';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ReusableCTA from '../Components/ResuableCTA/ReusableCTA';
import ReusableInterest from '../Components/ReusableInterest/ReusableInterest';
import ReusableService from '../Components/ReusableServices/ReusableService';
import StudentFounder from '../Components/Student Founder/StudentFounder';

const StartupPage = () => {
  return (
    <>
      <Navbar />
      <ReusableHero heroData={StartupPageData.heroSection} />
      <ReusableInterest intData={StartupPageData.interestSection} />
      <ReusableService serviceData={StartupPageData.redirectSection} />
      <StudentFounder />
      <Footer />
    </>
  );
};

export default StartupPage;
