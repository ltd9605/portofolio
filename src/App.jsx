import './App.css'
import HomePage from './pages/home';
import WelcomePage from './pages/welcomePage';
import AboutPage from './pages/about';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import Contact from './pages/contact';
import Background from './components/background';
import Navbar from './components/navbar';
import useAnimation from './components/Animation';
function App() {
  useAnimation();
  return (
    <>
      <Background />
      <Navbar />
      <WelcomePage />
      <HomePage />
      <AboutPage />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
