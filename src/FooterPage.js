import './FooterPage.css';
import footer from './assets/footer-background.png';
import penn from './assets/penn-logo.png';

export default function FooterPage() {
    return (
        <div className='FooterCanvas'>
            <img src={footer} alt='footer background' className='FooterBg'/>
            <span className='FooterContent'>
                <div className='LeftFooter'>
                    <div className='WordmarkCopyright'>
                        <div className='Wordmark'>PENN <br></br> APPS</div>
                        <div className='Copyright'>© 2022 PennApps <br></br> contact@pennapps.com</div>
                    </div>
                    <div className='CodeOfConduct'>Code of Conduct</div>
                    <div>Facebook <br></br> Twitter <br></br> Instagram</div>
                </div>
                <div className='RightFooter'>
                    <div className='SupportText'>Organized with support from:</div>
                    <a href='https://www.seas.upenn.edu/' rel="noreferrer" target='_blank'><img src={penn} alt='Penn Engineering logo'/></a>
                </div>
            </span>
        </div>
    );
}