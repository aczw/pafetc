import './LandingPage.css';

function TimeBox({ unit }) {
    return (
        <div className='TimeBox'>
            <text className='TimeNumber'>69</text>
            <text className='TimeUnit'>{unit}</text>
        </div>
    );
}

export default function LandingPage() {
    return (
        <section className='LandingPage'>
            <div>
                <h1>PennApps XXIII logo</h1>
                <p className='Date'>September 8-10, 2023</p>
            </div>
            <div className='Countdown'>
                <TimeBox unit={'DAYS'}/>
                <TimeBox unit={'HOURS'}/>
                <TimeBox unit={'MINUTES'}/>
                <TimeBox unit={'SECONDS'}/>
            </div>
        </section>
    );
  }