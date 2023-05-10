// import { useState } from 'react'

import Navbar from './Components/Navbar';
import College from './Components/College/College';
import LandingPage from './Pages/LandingPage';
import JobPostingPage from './Pages/JobPostingPage';
import FAQ from './Components/FAQ/FAQ';
import Expectation from './Components/Expectation/Expectation';
import Footer from './Components/Footer/Footer';
import About from './Components/About Us/About';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <JobPostingPage />
      <College />
      <FAQ />
      <Expectation />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
