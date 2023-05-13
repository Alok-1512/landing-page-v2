import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Team from '../Components/Team/Team';

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <div className='page-banner'>
        <h3 className='text-white'>Our Team</h3>
      </div>
      <Team />
      <Footer />
    </>
  );
};

export default TeamPage;
