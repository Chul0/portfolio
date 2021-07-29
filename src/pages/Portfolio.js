import { useState } from 'react'
import netThumbnail from '../Thumbnails/netThumbnail.png'
import netThumbnail2 from '../Thumbnails/netThumbnail2.png'
import fashunThumbnail from '../Thumbnails/fashunThumbnail.png'
import fashunThumbnail2 from '../Thumbnails/fashunThumbnail2.png'
import covidThumbnail from '../Thumbnails/covidThumbnail.png'
import covidThumbnail2 from '../Thumbnails/covidThumbnail2.png'
import calorieThumbnail from '../Thumbnails/calorieThumbnail.png'
import calorieThumbnail2 from '../Thumbnails/calorieThumbnail2.png'
import netLogo from '../images/netflastinate.png'


const Portfolio = () => {
    const [netflastinate, setNetflastinate] = useState(false)
    // const [covid, setCovid] = useState(false)
    // const [fashun, setFashun] = useState(false)
    // const [calorie, setCalorie] = useState(false)
  
    const showNetflastinate = () => {
        setNetflastinate(!netflastinate)
    }



    return (
        <>
            <div className="netflastinate" >
                <div className="appContainer">
                    
                {/* <div className="wrapper"> */}
                    <div className="appDetail">
                        <p className="appName">IN BRIEF </p>
                        {/* <ul className="skillUsed">
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul> */}
                        <div className="description">Netflastinate is a movie trailer app where the user can watch movie trailers and save them in their watch-list.<br></br>
                        "Netflastinate" – (slang) using Netflix to procrastinate.
                         <ul className="skillUsed">
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                        </div>

                    </div>
                    {/* <div className="thumbnailContainer">
                        <img className="thumbnails1" src={netThumbnail} />
                        <img className="thumbnails2" src={netThumbnail2} />
                    </div> */}
                {/* </div> */}
                {netflastinate ?
                    <>
                        <iframe src="https://www.youtube.com/embed/il_xlQ79nyk?autoplay=1&playlist=il_xlQ79nyk&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showNetflastinate}>X</span>
                        
                    </>
                        :
                        <>
                            <div className="player" onClick={showNetflastinate}><button className="playBtn">►</button>

                            <span className="watchBanner" onClick={showNetflastinate}>WATCH DEMO</span>
                            </div> 
                        </>              
                    }
                    
                    <p className="links">LINKS</p>
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
                    

      
            <div className="covid">
                 <div className="youtubeContainer">
                 <div className="title">
                        <img src="https://i.ibb.co/vsk4hbr/covid.png" />
                        <div className="icon">
                            <a href="https://github.com/Chul0/beat-covid" target="_blank">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/beat-covid" target="_blank">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://chul0.github.io/beat-covid/" target="_blank">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe src="https://www.youtube.com/embed/7l0plZNASC4?playlist=7l0plZNASC4&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
                    
                    <div className="appDetail">
                        <p className="appName">Beat COVID!</p>
                        <p className="description">Beat COVID! The user kills the COVID-19 virus with a sanitizing click.</p>
                        <ul className="skillUsed">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
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
                <div className="thumbnailContainer">
                    <img className="thumbnails" src={covidThumbnail} />
                    <img className="thumbnails" src={covidThumbnail2} />
                </div>
            </div>
         

      
           <div
           className="fashun">
                <div className="youtubeContainer">
                <div className="title">
                        <img src="https://i.ibb.co/4WnNrFf/fashun.png" />
                        <div className="icon">
                            <a href="https://github.com/Chul0/fash-un-frontend" target="_blank">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/fash-un-backend" target="_blank">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://fash-un-frontend.herokuapp.com/" target="_blank">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <div className="appDetail">
                    <p className="appName">Fash-un </p>
                    <p className="description">Fashion show coverage with expandable runway shows with the ability for users to create mood boards, saving their most inspiring looks.</p>
                    <ul className="skillUsed">
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                    </ul>
                    <div className="sources">
                        <a href="https://github.com/Chul0/fash-un-frontend" target="_blank">Frontend Github
                        </a>
                        <a href="https://github.com/Chul0/fash-un-backend" target="_blank">Backend Github
                        </a>
                        <a href="https://fash-un-frontend.herokuapp.com/" target="_blank">Live Webpage
                        </a>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/aTrz__8UJ5I?playlist=aTrz__8UJ5I&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
                </div>
                <div className="thumbnailContainer">
                    <img className="thumbnails" src={fashunThumbnail} />
                    <img className="thumbnails" src={fashunThumbnail2} />
                </div>
            </div>
               

       
            <div className="calorie">
                 <div className="youtubeContainer">
                 <div className="title">
                        <img src="https://i.ibb.co/YtYQhc7/calorie.png" />
                        <div className="icon">
                            <a href="https://github.com/Chul0/Calorie-Tracker-FE" target="_blank">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/Calorie-Tracker-BE" target="_blank">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://chul-calorie-tracke-fe.herokuapp.com/" target="_blank">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe src="https://www.youtube.com/embed/QSRl5Km5r1o?playlist=QSRl5Km5r1o&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
                <div className="appDetail">
                    <p className="appName">Calorie tracker </p>
                    <p className="description">Calorie tracker is a nutrition app that helps users keep track of their daily caloric intake.</p>
                    <ul className="skillUsed">
                            <li>HTML5</li>
                            <li>css3</li>
                            <li>Node.js</li>
                            <li>RESTful API</li>
                        </ul>
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
                <div className="thumbnailContainer">
                    <img className="thumbnails" src={calorieThumbnail} />
                    <img className="thumbnails" src={calorieThumbnail2} />
                </div>
            </div>
  
        </>
    )
}


export default Portfolio