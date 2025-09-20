import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/home';
import WelcomePage from './pages/welcomePage';
import AboutPage from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './components/footer';
import Background from './components/background';
import Navbar from './components/navbar';
import ProjectDetail from './components/projectDetail';
import useAnimation from './components/Animation';
import { useState, useEffect } from "react";

function App() {
  useAnimation();

  const [showWelcome, setShowWelcome] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setZoomOut(true), 2500);
    const timer2 = setTimeout(() => setShowWelcome(false), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <BrowserRouter>
      <Background />
      <Navbar />

      {/* Overlay WelcomePage */}
      {showWelcome && (
        <div className={`welcome-container ${zoomOut ? "zoom-out" : ""}`}>
          <WelcomePage />
        </div>
      )}

      {/* Routes chính */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <AboutPage />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
