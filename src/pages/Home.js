// import resume from '../images/Sungchul_Park_Resume.pdf'

const Home = () => {
    return(
        <div className="home">
            <div className="myName">
                <p className="name">Sungchul Park</p>
                <p className="whoAmI">Software Engineer</p>
                <p className="whoAmI">Fullstack Developer</p>
                <p className="intro">I am a creative software engineer, coming from over 4 years of professional experience in fashion</p>
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
    )
}


export default Home