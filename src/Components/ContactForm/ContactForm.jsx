import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '39684029',
          formId: '6da33798-5890-4404-a77a-24df0b802352',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div className='form-container flex mx-5  flex-col md:flex-row md:h-[80vh] my-10'>
      <div className='contact-details flex flex-col items-center basis-2/5 px-[20px] py-[10px] dark '>
        <h2>
          Let&apos;s Solve Employment <br />
          As A Problem Together!
        </h2>
        <div className='contact-box'>
          <p>Contact Us:</p>
          <ul>
            <li>
              <strong>Sales and Business:</strong> sales@gethire.in
            </li>
            <li>
              <strong>Sales and Business:</strong> sales@gethire.in
            </li>
            <li>
              <strong>Sales and Business:</strong> sales@gethire.in
            </li>
            <li>
              <strong>Sales and Business:</strong> sales@gethire.in
            </li>
          </ul>
        </div>
      </div>

      <div
        className='contact-form basis-3/5 overflow-y-scroll p-[10px]'
        id='hubspotForm'
      ></div>
    </div>
  );
};

export default ContactForm;
