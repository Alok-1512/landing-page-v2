import React from 'react';

import Footer from '../Components/Footer/Footer';
import ContactForm from '../Components/ContactForm/ContactForm';
import Navbar from '../Components/Navbar/Navbar';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className='page-banner'>
        <h3 className='text-white'>Contact Us</h3>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
