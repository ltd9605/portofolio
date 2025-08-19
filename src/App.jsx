import './App.css'
import Background from './components/background';
import HomePage from './pages/home';
import WelcomePage from './pages/welcomePage';
import AboutPage from './pages/about';
function App() {
  return (
    <>
      <WelcomePage />
      <HomePage />
      <AboutPage />
    </>
  );
}

export default App;
