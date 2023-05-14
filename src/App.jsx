import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';

import ContactPage from './Pages/ContactPage';
import BlogList from './Pages/BlogList';
import AboutUs from './Pages/AboutUs';
import BlogPost from './Components/Blog/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog/:blogId' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
