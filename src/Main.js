import './Main.css';
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import ApplyPage from './ApplyPage';

export default function Main() {
  return (
    <div id='landing' className="Canvas">
        <LandingPage />  
        <NavBar />
        <ApplyPage />
    </div>
  );
}
