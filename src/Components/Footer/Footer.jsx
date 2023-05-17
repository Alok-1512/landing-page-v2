import { Link } from 'react-router-dom';
import { facebook, insta, linkedin, twitter, yt } from '../../assets';

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
            <Link to='/'>
              <img src={GetHire} alt='' className='w-[150px]' />
            </Link>
            <div className='download-cta flex'>
              <span className='border-r-4 w-[45%]'> Download The App </span>
              <div className='flex items-center justify-evenly w-[25%] gap-[5px]'>
                <img src={AppleStore} alt='' className='h-9' />
                <img src={PlayStore} alt='' className='h-9' />
              </div>
            </div>
            <div className='download-cta flex'>
              <span className='border-r-4 w-[45%]'>
                {' '}
                Follow Us On Social Media
              </span>
              <div className='flex items-center justify-evenly w-[55%]'>
                <a href='https://www.facebook.com/'>
                  {' '}
                  <img src={facebook} alt='' className='h-8' />{' '}
                </a>
                <a href='https://www.linkedin.com/company/teamgethire/'>
                  {' '}
                  <img src={linkedin} alt='' className='h-8' />{' '}
                </a>
                <a href='https://twitter.com/teamgethire'>
                  {' '}
                  <img src={twitter} alt='' className='h-8' />{' '}
                </a>
                <a href='https://www.instagram.com/teamgethire/'>
                  {' '}
                  <img src={insta} alt='' className='h-8' />{' '}
                </a>
                <a href='https://www.youtube.com/channel/UCO0LElUrglpL6rUlOBFNvkg'>
                  {' '}
                  <img src={yt} alt='' className='h-8' />{' '}
                </a>
              </div>
            </div>
          </div>
          <div className='footer-links'>
            <p>Company:</p>
            <ul>
              <Link to='/about-us'>
                <li>About Us</li>
              </Link>
              <Link to='/about-us'>
                <li>Our Team</li>
              </Link>
              <li>Career</li>
              <Link to='/contact'>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Services:</p>
            <ul>
              <li>Consulting</li>
              <li>Recruit</li>
              <li>Market</li>
              <li>Learn</li>
              <li>Community</li>
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
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='footer-links'>
            <p>Policies:</p>
            <ul>
              <li>T&C</li>
              <li>Privacy</li>
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
