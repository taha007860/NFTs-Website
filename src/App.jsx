import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Hero';
import NFTDetailPage from './components/NFTDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/nft/:title/:imageSrc/:videoSrc/:contentType/:category/:ownerName/:creator/:artist/:likes/:profile/:price/:bid" element={<NFTDetailPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

