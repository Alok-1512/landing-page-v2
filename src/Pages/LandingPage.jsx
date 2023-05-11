import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import JobPostingPage from './JobPostingPage';
import College from '../Components/College/College';
import FAQ from '../Components/FAQ/FAQ';
import Expectation from '../Components/Expectation/Expectation';
import Footer from '../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobPostingPage />
      <College />
      <FAQ />
      <Expectation />
      <Footer />
    </>
  );
};

export default LandingPage;
