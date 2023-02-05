import './Main.css';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import ApplyPage from './ApplyPage';
import InfoPage from './InfoPage';
import footer from './assets/footer-background.png';

export default function Main() {
  return (
    <div id='landing' className="Canvas">
        <LandingPage />  
        <NavBar />
        <ApplyPage />
        <InfoPage />
        <img src={footer} alt='footer background' className='FooterBg'/>
    </div>
  );
}