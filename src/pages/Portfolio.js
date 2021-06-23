import { useState } from 'react'
import netflastinateLogo from '../images/netflastinate.png'
import covidLogo from '../images/covid.png'
import fashunLogo from '../images/fashun.png'
import calorieLogo from '../images/calorie.png'


const Portfolio = () => {
    const [netflastinate, setNetflastinate] = useState(false)
    const [covid, setCovid] = useState(false)
    const [fashun, setFashun] = useState(false)
    const [calorie, setCalorie] = useState(false)

    const netflModal = () => {
        setNetflastinate(true)
        setCovid(false)
        setFashun(false)
        setCalorie(false)
        window.scrollTo(0, 850)
    }

    const covidModal = () => {
        setCovid(true)
        setNetflastinate(false)
        setFashun(false)
        setCalorie(false)
        window.scrollTo(0, 850)
    }

    const fashunModal = () => {
        setFashun(true)
        setCovid(false)
        setNetflastinate(false)
        setCalorie(false)
        window.scrollTo(0, 850)
    }

    const caloriModal = () => {
        setCalorie(true)
        setCovid(false)
        setNetflastinate(false)
        setFashun(false)
        window.scrollTo(0, 850)
    }

    return (
        <>
        <div className="portfolio-container">

        <div className="left">
                <img src={netflastinateLogo} 
                     onClick={netflModal} 
                />
                <img src={covidLogo}
                     onClick={covidModal}/>
            </div>

            <div className="right">
                <img src={fashunLogo} 
                     onClick={fashunModal}/>
                <img src={calorieLogo}
                     onClick={caloriModal}/>
            </div>
        </div>
       
        {netflastinate && (
            <div className="netflastinate" >
                <div className="youtubeContainer">
                    <iframe src="https://www.youtube.com/embed/il_xlQ79nyk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="appDetail">
                    <p className="appName">Netflastinate </p>
                    <p className="description">Netflastinate is a movie trailer app where the user can watch movie trailers and save them in their watch-list.
                    "Netflastinate" – (slang) using Netflix to procrastinate</p>
                    <p className="skillUsed">React.js, Express, Node.js, Sequelize, PostgreSQL, CSS, HTML </p>
                    <div className="sources">
                        <a href="https://github.com/Chul0/Netflastinate-frontend" target="_blank">Frontend Github
                        </a>
                        <a href="https://github.com/Chul0/Netflastinate-backend" target="_blank">Backend Github
                        </a>
                        <a href="https://netflastinate.herokuapp.com/" target="_blank">Live Webpage
                        </a>
                    </div>
                </div>
                </div>
            </div>
            )}          

        {covid && (
            <div className="covid">
                 <div className="youtubeContainer">
                    <iframe src="https://www.youtube.com/embed/7l0plZNASC4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="appDetail">
                        <p className="appName">Beat COVID!</p>
                        <p className="description">Beat COVID! The user kills the COVID-19 virus with a sanitizing click.</p>
                        <p className="skillUsed">Javascript, CSS, HTML </p>
                        <div className="sources">
                            <a href="https://github.com/Chul0/beat-covid" target="_blank">Frontend Github
                            </a>
                            <a href="https://github.com/Chul0/beat-covid" target="_blank">Backend Github
                            </a>
                            <a href="https://chul0.github.io/beat-covid/" target="_blank">Live Webpage
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}    

       {fashun && (
           <div
           className="fashun">
                <div className="youtubeContainer">
                    <iframe src="https://www.youtube.com/embed/aTrz__8UJ5I" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="appDetail">
                    <p className="appName">Fash-un </p>
                    <p className="description">Fashion show coverage with expandable runway shows with the ability for users to create mood boards, saving their most inspiring looks.</p>
                    <p className="skillUsed">React.js, Express, Node.js, Sequelize, PostgreSQL, CSS, HTML </p>
                    <div className="sources">
                        <a href="https://github.com/Chul0/fash-un-frontend" target="_blank">Frontend Github
                        </a>
                        <a href="https://github.com/Chul0/fash-un-backend" target="_blank">Backend Github
                        </a>
                        <a href="https://fash-un-frontend.herokuapp.com/" target="_blank">Live Webpage
                        </a>
                    </div>
                </div>
                </div>
            </div>
                )}

        {calorie && (
            <div className="calorie">
                 <div className="youtubeContainer">
                    <iframe src="https://www.youtube.com/embed/QSRl5Km5r1o" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="appDetail">
                    <p className="appName">Calorie tracker </p>
                    <p className="description">Calorie tracker is a nutrition app that helps users keep track of their daily caloric intake.</p>
                    <p className="skillUsed">Javascript, RESTful API, Express, Node.js, Sequelize, PostgreSQL, CSS3, HTML5 </p>
                    <div className="sources">
                        <a href="https://github.com/Chul0/Calorie-Tracker-FE" target="_blank">Frontend Github
                        </a>
                        <a href="https://github.com/Chul0/Calorie-Tracker-BE" target="_blank">Backend Github
                        </a>
                        <a href="https://chul-calorie-tracke-fe.herokuapp.com/" target="_blank">Live Webpage
                        </a>
                    </div>
                </div>
                </div>
            </div>
        )}
        </>
    )
}


export default Portfolio