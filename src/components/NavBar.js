import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="homeName">
                <Link to="/">Sungchul Park</Link>
            </div>
            <div className="navLink">
                <Link to="/">About</Link>
                <Link to="portfolio">Portfolio</Link>
                {/* <Link to="contact">CONTACT</Link>
                <Link to="/language">LANGUAGE</Link> */}
            </div>
        </nav>
    )
}

export default NavBar