import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import OurExpertise from './Pages/OurExpertise';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/expertise' element={<OurExpertise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
