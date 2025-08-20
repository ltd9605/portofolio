import './App.css'
import Background from './components/background';
import HomePage from './pages/home';
import WelcomePage from './pages/welcomePage';
import AboutPage from './pages/about';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import Contact from './pages/contact';
function App() {
  return (
    <>
      <WelcomePage />
      <HomePage />
      <AboutPage />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
