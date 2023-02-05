import './Main.css';
import LandingPage from './LandingPage';
import NavBar from './NavBar';

export default function Main() {
  return (
    <div id='landing' className="Canvas">
        <LandingPage />  
        <NavBar />
    </div>
  );
}
