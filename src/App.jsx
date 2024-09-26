import  { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./index.css";
import Navbar from './components/Navbar.jsx/Navbar';
import Footer from './components/Footer/Footer';
import { RingLoader } from 'react-spinners';
import Contact from "./pages/Contact"
// const Home = lazy(() => import('./pages/Home'));
import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
import ServicesSinglePage from "./pages/ServicesSinglePage"
// const ServicesSinglePage = lazy(() => import('./pages/ServicesSinglePage'));
// const Contact = lazy(() => import('./pages/Contact'));
const AboutUs=lazy(() => import('./pages/AboutUs'));
// import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="loader-container"><RingLoader color="#36D7B7" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServicesSinglePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
