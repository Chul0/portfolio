import { Link } from 'react-scroll'
import homeLogo from '../images/homelogo.jpg'
import Home from '../pages/Home'



const NavBar = () => {

    return (
        <nav className="navBar">
            <div className="homeName">
                <Link id="sp"
                      to="topPage"
                      activeClass="active"
                      spy="true"
                      smooth={true}
                      duration={1000}  
                ><img src={homeLogo} style={{width:"30px"}} /></Link>
            </div>

        </nav>
    )
}

export default NavBar