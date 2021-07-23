import { Link } from 'react-scroll'
import Portfolio from '../pages/Portfolio'
import '../CSS/About.css';


const AppButtons = () => {
    return(
        <aside className="appButtons">
            <Link 
                activeClass="active"
                to="about"
                spy="true"
                smooth={true}
                duration={1000}>
                <span className="apps">1</span>
            </Link>
            <Link 
                activeClass="active"
                to="netflastinate"
                spy="true"
                smooth={true}
                duration={1000}>
                <span className="apps">2</span>
            </Link>
            <Link 
                activeClass="active"
                to="covid"
                spy="true"
                smooth={true}
                duration={1000}>
                <span className="apps">3</span>
            </Link>
            <Link 
                activeClass="active"
                to="fashun"
                spy="true"
                smooth={true}
                duration={1000}>
                <span className="apps">4</span>
            </Link>
            <Link 
                activeClass="active"
                to="calorie"
                spy="true"
                smooth={true}
                duration={1000}>
                <span className="apps">5</span>
            </Link>
                

            </aside>
    )
}

export default AppButtons