import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next'; 
import i18n from './i18n'; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Services from './components/Services';
import ServiceDetails from './pages/ServiceDetails';
import Contact from './components/Contact';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import MediaGallery from './components/MediaGallery';
import About from './components/About';
import WhyMe from './components/WhyMe';
import Testimonials from './components/Testimonials';

import CreateService from './Admin/service/create';
import Trash from './Admin/service/trash';
import Service from './Admin/service/service';
import AdminHomePage from './Admin/AdminHomePage';

function App() {
  const [admin,setAdmin] = useState(false)
  useEffect(()=>{
const token = localStorage.getItem("admin")
if(token){
  setAdmin(token)
}
  },[])
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<MediaGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/whyme" element={<WhyMe />} />

            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminHomePage />} />  
            <Route path="services" element={<Service />} />
            <Route path="services/create" element={<CreateService />} /> 
            <Route path="services/trash" element={<Trash />} />
            </Route>
          </Routes>
        </main>

        {!admin && <Footer />}
        <WhatsAppButton phoneNumber="919876543210" />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;