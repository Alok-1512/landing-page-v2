import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import JobPostingPage from './JobPostingPage';
import College from '../Components/College/College';

import Expectation from '../Components/Expectation/Expectation';
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobPostingPage />
      <College />
      <Expectation />
      <Footer />
    </>
  );
};

export default LandingPage;
