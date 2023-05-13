import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Expertise from '../Components/Expertise/Expertise';

const OurExpertise = () => {
  return (
    <>
      <Navbar />
      <div className='page-banner'>
        <h3 className='text-white'>Our Expertise</h3>
      </div>
      <Expertise />
      <Footer />
    </>
  );
};

export default OurExpertise;
