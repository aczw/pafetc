import './NavBar.css'

export default function NavBar() {
    return (
        <ul className="NavBar">
            <li><a href='#landing' className='Home'>PENNAPPS</a></li>
            <div>
                <li><a href='#about' className='Link'>ABOUT</a></li>
                <li><a href='#apply' className='Link'>APPLY</a></li>
            </div>
        </ul>
    );
}