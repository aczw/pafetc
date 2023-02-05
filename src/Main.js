import './Main.css';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import ApplyPage from './ApplyPage';
import InfoPage from './InfoPage';
import FooterPage from './FooterPage';

export default function Main() {
  return (
    <div id='landing' className="Canvas">
        <LandingPage />  
        <NavBar />
        <ApplyPage />
        <InfoPage />
        <FooterPage />
    </div>
  );
}