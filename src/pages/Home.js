// import resume from '../images/Sungchul_Park_Resume.pdf'b
import '../TopPage.css'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Home = () => {
    return(
        <>
            <div className="topPage">
                <div className="nameContatiner">
                    <Link 
                        activeClass="active"
                        to="home"
                        spy="true"
                        smooth={true}
                        duration={1000}
                        >
                        <span id="firstName">SUNGCHUL</span>
                        <span id="lastName">  PARK</span>
                    </Link>
                </div>
            </div>
        <div className="home">
            <div className="myName">
                <p className="whoAmI"> Software Engineer / Fullstack Developer </p>
                <p className="name">Sungchul Park</p>
                <p className="intro">I am a creative software engineer, transitioned from a fashion design background</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sungchul--park/" target="_blank"><img src="https://i.ibb.co/xYBwdDC/linkedin.jpg"></img></a>
                    <a href="https://github.com/Chul0" target="_blank"><img src="https://i.ibb.co/cJQfz6S/git.jpg"></img></a>
                    <a href="mailto:sungchulpark0@gmail.com" target="_blank"><img src="https://i.ibb.co/C12sxdX/email.jpg"></img></a>
                    {/* <a href={resume} target="_blank"><img src="https://i.ibb.co/XDWz82p/resume.jpg"></img></a> */}
                </div>
                <p className="language">Tech Stack</p>
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