import './ApplyPage.css'

function ApplyButton() {
    return (
        <div className='ButtonLayout'>
            <a href="https://pennclubs.com/club/pennapps" className='ApplyButton'>APPLY</a>
        </div>
    );
}

export default function ApplyPage() {
    return (
        <div className='ApplyCanvas'>
            <div className='ApplyContent'>
                <h1 className='ApplyHeader'>Beleaf it or not, <br></br> applications are open!</h1>
                <p className='ApplyText'>Hosted at the nation’s first university, PennApps is the original <br></br> college hackathon. Come join us to learn something new, build an <br></br> app, or start a company. Let’s continue to make history together.</p>
                <ApplyButton />
            </div>
        </div>
    );
}