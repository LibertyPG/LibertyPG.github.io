import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import EnquiryForm from './components/EnquiryForm';
import { Toaster } from './components/ui/toaster';

function App() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onEnquireClick={() => setShowEnquiry(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;