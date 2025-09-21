import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

// Tạo một component wrapper để dùng useLocation
function Layout({ children }) {
  const location = useLocation();

  // Nếu URL bắt đầu bằng /portfolio/ thì không hiển thị Navbar
  const showNavbar = !location.pathname.startsWith("/portfolio/");

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}

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

      {/* Overlay WelcomePage */}
      {showWelcome && (
        <div className={`welcome-container ${zoomOut ? "zoom-out" : ""}`}>
          <WelcomePage />
        </div>
      )}

      <Layout>
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
      </Layout>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
