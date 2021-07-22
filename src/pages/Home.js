// import resume from '../images/Sungchul_Park_Resume.pdf'b
import '../CSS/TopPage.css';
import '../CSS/About.css';
import { Link } from 'react-scroll'


const Home = () => {
    return(
        <>
            <div className="topPage">
                <div className="nameContatiner">
                    <Link 
                        activeClass="active"
                        to="about"
                        spy="true"
                        smooth={true}
                        duration={1000}>
                        <span id="firstName">SUNGCHUL</span>
                        <span id="lastName">  PARK</span>
                    </Link>
                </div>
            </div>

        <div className="about">
            <div className="myName">
                <p className="jobTitle"> Software Engineer / Frontend Developer </p>
                <p className="intro">Hi I am Chul(Sungchul), a Creative Developer, with a fashion design background.</p>
                <p className="language">Tools & Technologies</p>
                <div className="techStack">
                    <i class="devicon-html5-plain-wordmark colored"></i>  
                    <i class="devicon-css3-plain-wordmark colored"></i>  
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original-wordmark colored"></i>
                    <i class="devicon-python-plain-wordmark colored"></i>
                    <i class="devicon-express-original"></i>
                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                    <i class="devicon-sequelize-plain-wordmark"></i>
                    <i class="devicon-postgresql-plain-wordmark colored"></i>
                    {/* <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>REACT</li>
                    <li>PYTHON3</li><br></br>
                    <li>EXPRESS.js</li>
                    <li>NODE.js</li>
                    <li>SEQUELIZE</li>
                    <li>POSTGRESQL</li> */}
                </div>
                {/* <p className="language">Contacts</p> */}
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/sungchul--park/" target="_blank">Linkedin</a>
                    <a href="https://github.com/Chul0" target="_blank">Github</a>
                    <a href="mailto:sungchulpark0@gmail.com" target="_blank">Email</a>
                </div>
            </div>
        </div>
        {/* <div className="portfolioPage">
                <Portfolio />
        </div> */}
        </>
    )
}


export default Home