import './NavBar.css'

export default function NavBar() {
    return (
        <div id='navBar' className="NavBar">
            <a href='#landing' className='Home'>PENNAPPS</a>
            <div>
                <a href='#about' className='Link'>ABOUT</a>
                <a href='#apply' className='Link'>APPLY</a>
            </div>
        </div>
    );
}