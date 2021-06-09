import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="homeName">
                SUNGCHUL PARK
            </div>
            <div className="navLink">
                <Link to="about">ABOUT</Link>
                <Link to="portfolio">PORTFOLIO</Link>
                <Link to="contact">CONTACT</Link>
                <Link to="/language">LANGUAGE</Link>
            </div>
        </nav>
    )
}

export default NavBar