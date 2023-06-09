import { tele, whatsapp } from '../../assets';
import './faq.css';
import FAQs from './FAQs';

const FAQ = () => {
  return (
    <div className='FAQ-container mb-[10vh]'>
      <h2 className='faq-title text-center mt-[10vh] mb-[5vh] md:my-[10vh]'>
        FAQ&apos;s
      </h2>
      <div className='faq inner-container flex justify-evenly '>
        <div className='faq contact-container space-y-5'>
          <h5>Learn more about us:</h5>
          <a href=''>
            <button className='support-cta-btn mt-5'>
              Visit Support Center
            </button>
          </a>
          <div className='support-social-cta'>
            <p>Talk to our support team:</p>
            <div className='support-social-icons flex gap-[15px] my-3'>
              <a href='' className='h-[40px]'>
                <img src={tele} alt='' className='h-[100%]' />
              </a>
              <a href='' className='h-[40px]'>
                <img src={whatsapp} alt='' className='h-[100%]' />
              </a>
            </div>
          </div>

          <p>
            Send your query to <br /> contact@gethire.in
          </p>
        </div>
        <FAQs />
      </div>
    </div>
  );
};

export default FAQ;
