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
    const [covid, setCovid] = useState(false)
    const [fashun, setFashun] = useState(false)
    const [calorie, setCalorie] = useState(false)
  
    const showNetflastinate = () => {
        setNetflastinate(!netflastinate)
    }
    const showCovid = () => {
        setCovid(!covid)
    }
    const showFashun = () => {
        setFashun(!fashun)
    }
    const showCalorie = () => {
        setCalorie(!calorie)
    }

    const [grey, setGrey] = useState(false)

    const scrollEvent = () =>{
        if(window.scrollY >= 1500) {
            setGrey(true);
        }else{
            setGrey(false);
        }
    }

    window.addEventListener("scroll", scrollEvent)


    return (
        <>
            <div className="netflastinate" style={{opacity: grey ? 0.1 : 1}}>
                <div className="appContainer">
                    <div className="appDetail">
                        <p className="appName" style={{"color":"red", "marginLeft":"2%"}}>N</p>
                        <p className="appName" style={{"color":"red", "fontSize":"4vw", "paddingTop":"1.5%"}}>etflastinate</p>
                    </div>
                    <div className="appNameDetail">
                        <span> (n.) to procrastinate with Netflix</span>
                    </div>
                   
                    <div className="backgroundContainer">
                        <span className="backgroundCaptions">Netflastinate is a movie trailer  application <a href="https://netflastinate.herokuapp.com/" target="_blank">LiveWebpage
                        </a> where the user is able to browse movie trailers and save them in a watch-list.  Netflastinate is a movie trailer application where the user is able to browse movie  <a href="https://github.com/Chul0/Netflastinate-frontend" target="_blank">GitHub
                        </a> save them in a watch-list. Netflastinate is a movie trailer application where the user is able to save th</span>
                        
                {netflastinate ?
                    <div className="iframeContainer">
                        <iframe src="https://www.youtube.com/embed/il_xlQ79nyk?autoplay=1&playlist=il_xlQ79nyk&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showNetflastinate}>X</span>
                    </div>
                        :
                        <div className="player" onClick={showNetflastinate}><button className="playBtn">►</button>
                        </div> 
                    }
                    </div>              
                </div>
            </div>
                    
            <div className="fashun">
                <div className="appContainer">
                    <div className="appDetail">
                        <p className="appName">Fashun</p>
                        <div className="description">Fashion show coverage with expandable runway shows with the ability for users to create mood boards, saving their most inspiring looks.
                         <ul className="skillUsed">
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                        </div>
                    </div>
                   
                {fashun ?
                    <>
                        <iframe src="https://www.youtube.com/embed/aTrz__8UJ5I?autoplay=1&playlist=aTrz__8UJ5I&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showFashun}>X</span>
                    </>
                        :
                    <>
                        <div className="player3" onClick={showFashun}><button className="playBtn">►</button>
                        <span className="watchBanner" onClick={showFashun}>WATCH DEMO</span>
                        </div> 
                    </>              
                    }
                    
                    <p className="links">LINKS</p>
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
      
            <div className="covid">
                 <div className="appContainer">
                    <div className="appDetail">
                        <p className="appName" style={{"color":"#1F6FEB"}}>Beat covid </p>
                        <div className="description">Beat COVID! The user kills the COVID-19 virus with a sanitizing click.
                         <ul className="skillUsed">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                        </div>
                    </div>
                   
                {covid ?
                    <>
                        <iframe src="https://www.youtube.com/embed/7l0plZNASC4?autoplay=1&playlist=7l0plZNASC4&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showCovid}>X</span>
                        
                    </>
                        :
                        <>
                            <div className="player2" onClick={showCovid}><button className="playBtn">►</button>
                            <span className="watchBanner" onClick={showCovid}>WATCH DEMO</span>
                            </div> 
                        </>              
                    }
                    
                    <p className="links">LINKS</p>
                    <div className="sources">
                        <a href="https://github.com/Chul0/beat-covid" target="_blank">Github
                        </a>
                        <a href="https://chul0.github.io/beat-covid/" target="_blank">Live Webpage
                        </a>
                    </div>
                </div>
            </div>
         

        
               

       
            <div className="calorie">
                 <div className="appContainer">
                 <div className="appDetail">
                        <p className="appName" style={{"color":"green"}}>Calorie Tracker</p>
                        <div className="description">Calorie tracker is a nutrition app that helps users keep track of their daily caloric intake.
                         <ul className="skillUsed">
                         <li>HTML5</li>
                            <li>css3</li>
                            <li>Node.js</li>
                            <li>RESTful API</li>
                        </ul>
                        </div>
                    </div>
                   
                {calorie ?
                    <>
                        <iframe src="https://www.youtube.com/embed/QSRl5Km5r1o?autoplay=1&playlist=QSRl5Km5r1o&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showCalorie}>X</span>
                        
                    </>
                        :
                    <>
                        <div className="player4" onClick={showCalorie}><button className="playBtn">►</button>

                        <span className="watchBanner" onClick={showCalorie}>WATCH DEMO</span>
                        </div> 
                    </>              
                    }
                    
                    <p className="links">LINKS</p>
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
  
        </>
    )
}


export default Portfolio