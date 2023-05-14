import {
  tele,
  whatsapp,
  linkedin,
  GetHire,
  facebook,
  twitter,
  insta,
  yt,
} from '../../assets';
import './Footer.css';
import { Link } from 'react-router-dom';

const FooterMobile = () => {
  return (
    <div className='mob_footer'>
      <div className='img-logo'>
        <img src={GetHire} alt='' className='h-[50px]' />
      </div>
      <div className='ham-menu-items'>
        <ul>
          <Link to='/contact'>
            <li>Contact Us</li>
          </Link>
          <Link to='/about-us'>
            <li>About Us</li>
          </Link>
          <Link to='/blog'>
            <li>Blogs</li>
          </Link>
          <Link to='/teams'>
            <li>Our Team</li>
          </Link>
        </ul>
      </div>
      <div>
        <p className='text-center my-2 items-center'>Follows Us:</p>
        <div className='icon-name flex justify-center gap-[10px]'>
          <img src={facebook} alt='' className='h-[35px]' />
          <img src={twitter} alt='' className='h-[35px]' />
          <img src={linkedin} alt='' className='h-[35px]' />
          <img src={insta} alt='' className='h-[35px]' />
          <img src={yt} alt='' className='h-[35px]' />
        </div>
        <div className='flex justify-center'>
          <a href='' className='mx-auto'>
            <button className='download_button  text-white my-5 mx-auto'>
              Download App
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
