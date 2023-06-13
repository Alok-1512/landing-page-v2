import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';

import ContactPage from './Pages/ContactPage';
import BlogList from './Pages/BlogList';
import AboutUs from './Pages/AboutUs';
import Employer from './Pages/Employer';
import BlogPost from './Components/Blog/BlogPost';
import JobSeeker from './Pages/JobSeeker';
import CollegePage from './Pages/CollegePage';
import BrandPage from './Pages/BrandPage';
import StartupPage from './Pages/StartupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/employer' element={<Employer />} />
        <Route path='/jobseeker' element={<JobSeeker />} />
        <Route path='/college' element={<CollegePage />} />
        <Route path='/brands' element={<BrandPage />} />
        <Route path='/startup' element={<StartupPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog/:blogId' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
