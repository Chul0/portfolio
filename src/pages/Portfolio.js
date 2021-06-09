import { useState } from 'react'


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
        window.scrollTo(0, 500)
    }

    const covidModal = () => {
        setCovid(true)
        setNetflastinate(false)
        setFashun(false)
        setCalorie(false)
        window.scrollTo(0, 500)
    }

    const fashunModal = () => {
        setFashun(true)
        setCovid(false)
        setNetflastinate(false)
        setCalorie(false)
        window.scrollTo(0, 500)
    }

    const caloriModal = () => {
        setCalorie(true)
        setCovid(false)
        setNetflastinate(false)
        setFashun(false)
        window.scrollTo(0, 500)
    }

    return (
        <>
        <div className="portfolio-container">

        <div className="left">
                <img src="https://i.ibb.co/pWs82w7/netflastinat.png" 
                    style={{width:"400px", height:"100px"}}
                    onClick={netflModal} 
                />
                <img src="https://i.ibb.co/vsk4hbr/covid.png"
                     style={{width:"400px", height:"100px"}} 
                     onClick={covidModal}/>
            </div>

            <div className="center">
                <img src="https://i.ibb.co/61mSyWk/fashun.png"
                     style={{width:"355px" ,height:"220px"}} 
                     onClick={fashunModal}/>
            </div>

            <div className="right">
                <img src="https://i.ibb.co/8gKq5P9/calorie.png"
                     style={{width:"400px", height:"220px"}} 
                     onClick={caloriModal}/>
            </div>
        </div>
       
        {netflastinate && (
            <div className="netflastinate" >
                <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/pWs82w7/netflastinat.png" 
                            style={{width:"400px", height:"220px"}} />
                        <div className="icon">
                            <a href="https://github.com/Chul0/Netflastinate-frontend">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/Netflastinate-backend">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://netflastinate.herokuapp.com/">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe width="780" height="350" src="https://www.youtube.com/embed/il_xlQ79nyk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description">
                    <p>Netflastinate is a movie trailer app where user can watch movie trailers, and save them to watch list.
                    "Netflastinate" is a slang term used when you use Netflix to procrastinate.</p>
                </div>
            </div>
            )}          

        {covid && (
            <div className="covid">
                 <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/vsk4hbr/covid.png" 
                            style={{width:"400px", height:"220px"}} />
                        <div className="icon">
                            <a href="https://github.com/Chul0/beat-covid">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/beat-covid">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://chul0.github.io/beat-covid/">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe width="780" height="350" src="https://www.youtube.com/embed/7l0plZNASC4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p>Beat COVID: user kills coronavirus by clicking viruses.</p>
            </div>
        )}    

       {fashun && (
           <div
           className="fashun">
                <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/MRNjds9/Screen-Shot-2021-06-08-at-9-30-02-PM.png" 
                            style={{width:"400px", height:"220px"}} />
                        <div className="icon">
                            <a href="https://github.com/Chul0/fash-un-frontend">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/fash-un-backend">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://fash-un-frontend.herokuapp.com/">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe width="780" height="350" src="https://www.youtube.com/embed/aTrz__8UJ5I" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p>Fash-un app is a fashion show coverage where you can explore runway shows, and create mood boards to save inspiring looks.</p>
            </div>
                )}

        {calorie && (
            <div className="calorie">
                 <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/brcBcWN/calorie-2.png" 
                            style={{width:"400px", height:"220px"}} />
                        <div className="icon">
                            <a href="https://github.com/Chul0/Calorie-Tracker-FE">
                                <img src="https://i.ibb.co/0jrq4X8/fe.jpg"/>
                            </a>
                            <a href="https://github.com/Chul0/Calorie-Tracker-BE">
                                <img src="https://i.ibb.co/B6KDNWd/be.jpg"/>
                            </a>
                            <a href="https://chul-calorie-tracke-fe.herokuapp.com/">
                                <img src="https://i.ibb.co/N15ypqp/hp.jpg"/>
                            </a>
                        </div>
                    </div>
                    <iframe width="780" height="350" src="https://www.youtube.com/embed/QSRl5Km5r1o" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                    <p>Calorie tracker is a nutrition app that helps users to keep track of their daily calorie intake.</p>
            </div>
        )}
        </>
    )
}


export default Portfolio