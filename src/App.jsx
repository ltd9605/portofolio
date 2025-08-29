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

function App() {
  useAnimation();

  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>

              <WelcomePage />
              <HomePage />
              <AboutPage />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
