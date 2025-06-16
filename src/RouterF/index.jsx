import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Aboutus, Contactus, Home, PrivacyPolicy, Services, TermConditions } from '../pages';
import { Footer, Navbar, SingleViewService } from '../components';
import ScrollTop from '../components/ScrollTop';

const RouterF = () => {
  return (
    <BrowserRouter>
      <ScrollTop/>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/aboutus"
          element={<Aboutus />}
        />
        <Route path="/services"
          element={<Services />}
        />
        <Route path="/services/:service_id"
          element={<SingleViewService />}
        />
        <Route path="/contactus"
          element={<Contactus />}
        />
        <Route path="/privacypolicy"
          element={<PrivacyPolicy />}
        />
        <Route path="/termsconditions"
          element={<TermConditions />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export { RouterF }