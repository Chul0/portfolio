import { Link } from 'react-scroll'
import homeLogo from '../images/homelogo.jpg'
import Home from '../pages/Home'



const NavBar = (props) => {

    return (
        <nav className="navBar">
            <div className="homeName">
                <Link id="sp"
                      to="topPage"
                      activeClass="active"
                      spy="true"
                      smooth={true}
                      duration={1000}  
                ></Link>
            </div>

        </nav>
    )
}

export default NavBar