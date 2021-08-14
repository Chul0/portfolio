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
import brandPoster from '../images/sunnei.png'
import gameMachine from '../images/Game-machine.png'
import greenNotebook from '../images/greenNote.png'
import rippedNote from '../images/rippedNote.png'


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
    const [greyoutFashun, setGreyoutFashun] = useState(false)
    const [greyoutCovid, setGreyoutCovid] = useState(false)
    const [greyoutCalorie, setGreyoutCalorie] = useState(false)

    // Netflastinate page grey out 
    const scrollEvent = () =>{
        if(window.scrollY <= 900) {
            setGrey(true);
        }else{
            setGrey(false);
        }
    }
    window.addEventListener("scroll", scrollEvent)
    // Fashun page grey out
    const scrollEvent2 = () =>{
        if(window.scrollY <= 2100) {
            setGreyoutFashun(true);
        }else{
            setGreyoutFashun(false);
        }
    }
    window.addEventListener("scroll", scrollEvent2)

    // Covid page grey out
    const scrollEvent3 = () =>{
        if(window.scrollY <= 3000) {
            setGreyoutCovid(true)
        }else{
            setGreyoutCovid(false)
        }
    }
    window.addEventListener("scroll", scrollEvent3)

    // Calorie page grey out
    const scrollEvent4 = () =>{
        if(window.scrollY <= 3700) {
            setGreyoutCalorie(true)
        }else{
            setGreyoutCalorie(false)
        }
    }
    window.addEventListener("scroll", scrollEvent4)


    return (
        <>
            <div className="netflastinate" style={{opacity: grey && 0.1 }}>
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
                        </a> save them in a watch-list. Netflastinate is a movie trailer application whe</span>
                        
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
                    
            <div className="fashun" style={{opacity: greyoutFashun && 0.1 }}>
                <div className="fashunContainer">
                <div className="fashunAppDetail">
                <img id="brandPoster" src={brandPoster}></img>
                <button className="playBtn" onClick={showFashun}>►</button>
                    <div id="fashunAppDescription">Fashion show coverage with expandable runway shows with the ability for users to create mood boards, saving their most inspiring looks.</div>   
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

                {fashun &&
                    <div className="iframeContainer">
                        <iframe src="https://www.youtube.com/embed/aTrz__8UJ5I?autoplay=1&playlist=aTrz__8UJ5I&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showFashun}>X</span>
                    </div>
                    }
                </div>  
            </div>
      
            <div className="covid" style={{opacity:greyoutCovid && 0.1}}>
                 <div className="appContainer">
                    <div className="appDetail">
                        <p className="appName" style={{"color":"#1F6FEB", "marginLeft":"2%"}}>b</p>
                        <p className="appName" style={{"color":"#1F6FEB", "fontSize":"4vw", "paddingTop":"1.5%"}}>eat covid</p>
                    </div>
                    <div className="appNameDetail">
                        <span> The user kills the COVID-19
                                virus with a sanitizing click.</span>
                    </div>

                    <div className="parentContainer">
                        <div className="gameContainer">
                            <img id="giphy" src="https://media.giphy.com/media/Wy4p6wQSn89BxMknwn/giphy.gif"></img>
                            <img id="gameMachine" src={gameMachine}></img>
                        </div>

                        <div className="appDetailWrap">
                            
                            
                            <div className="covidLinkContainer">
                                <a href="https://chul0.github.io/beat-covid/" target="_blank">Play Game
                                </a>
                                <a href="https://github.com/Chul0/beat-covid" target="_blank">Github
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         

        
            
            <div className="calorie" style={{opacity: greyoutCalorie && 0.1 }}>
                 <div className="calorieAppContainer">
                 <div className="appDetail">
                        <p className="appName" style={{"color":"green", "marginLeft":"2%"}}>C</p>
                        <p className="appName" style={{"color":"green", "fontSize":"3.8vw", "paddingTop":"1.5%"}}>alorie tracker</p>
                    </div>
                        {/* <img id="greenNotebookCover" src={greenNotebook}></img> */}

                    <div className="calorieAppDetail">
                        <div className="calroiePlayer">
                            <img id="notebook" src={rippedNote}></img>
                            <button className="caloriePlayBtn" onClick={showCalorie}>►</button>
                        </div>
                        <div className="calorieDescription">
                            <p>
                            Calorie tracker is a nutrition app <br></br>that helps users keep track of <br></br>their daily caloric intake.
                            </p>
                            <div className="calorieLinks">
                                <a href="https://github.com/Chul0/Calorie-Tracker-FE" target="_blank">Frontend Github
                                </a>
                                <a href="https://github.com/Chul0/Calorie-Tracker-BE" target="_blank">Backend Github
                                </a>
                                <a href="https://chul-calorie-tracke-fe.herokuapp.com/" target="_blank">Live Webpage
                                </a> 
                            </div>
                        </div>
                    </div>
                        
                {calorie &&
                <div className="calorieiframeContainer">
                        <iframe src="https://www.youtube.com/embed/QSRl5Km5r1o?autoplay=1&playlist=QSRl5Km5r1o&loop=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" ></iframe>
                        <span className="Xbtn" onClick={showCalorie}>X</span>
                   </div>          
                }  
                </div>
            </div>
  
        </>
    )
}


export default Portfolio