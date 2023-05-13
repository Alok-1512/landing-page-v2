import { tele } from '../../assets';
import { whatsapp } from '../../assets';
import { AppleStore, GetHire, PlayStore } from '../../assets';
import './Footer.css';
import FooterMobile from './FooterMobile';

const Footer = () => {
  return (
    <>
      <FooterMobile />
      <footer>
        <div className='footer-main flex justify-evenly py-12 px-6'>
          <div className='brand-cta space-y-5'>
            <img src={GetHire} alt='' className='w-[150px]' />
            <div className='download-cta flex'>
              <span className='border-r-4 w-[45%]'> Download The App </span>
              <div className='flex items-center justify-evenly w-[40%]'>
                <img src={AppleStore} alt='' className='h-8' />
                <img src={PlayStore} alt='' className='h-8' />
              </div>
            </div>
            <div className='download-cta flex'>
              <span className='border-r-4 w-[45%]'>
                {' '}
                Follow Us On Social Media
              </span>
              <div className='flex items-center justify-evenly w-[40%]'>
                <img src={whatsapp} alt='' className='h-8' />
                <img src={tele} alt='' className='h-8' />
              </div>
            </div>
          </div>
          <div className='footer-links'>
            <p>Company:</p>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>News</li>
              <li>Media Kit</li>
              <li>Contact</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Services:</p>
            <ul>
              <li>Recruiter</li>
              <li>Talent</li>
              <li>Colleges</li>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Solutions:</p>
            <ul>
              <li>Post Job</li>
              <li>Search Job</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Resources:</p>
            <ul>
              <li>Post Job</li>
              <li>Search Job</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Policies:</p>
            <ul>
              <li>T&C</li>
              <li>Privacy</li>
              <li>Users</li>
              <li>Greivances</li>
              <li>Cookies</li>
              <li>Data</li>
              <li>Refund</li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom px-6 py-2'>
          <p>Made with ❤️ in India </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
