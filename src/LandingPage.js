import './LandingPage.css';
import banner from './assets/banner.png';
import landing from './assets/landing-background.png';

function TimeBox({ unit }) {
    return (
        <div className='TimeBox'>
            <div className='TimeNumber'>13</div>
            <div className='TimeUnit'>{unit}</div>
        </div>
    );
}

export default function LandingPage() {
    return (
        <section className='LandingPage'>
            <div className='BannerDate'>
                <img id='landing' src={banner} alt='banner'/>
                <div className='Date'>September 8-10, 2023</div>
            </div>
            <div className='Countdown'>
                <TimeBox unit={'DAYS'}/>
                <TimeBox unit={'HOURS'}/>
                <TimeBox unit={'MINUTES'}/>
                <TimeBox unit={'SECONDS'}/>
            </div>
            <img src={landing} alt='landing background' className='LandingBg'/>
        </section>
    );
  }