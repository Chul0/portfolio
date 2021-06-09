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
                <img src="https://i.ibb.co/pWs82w7/netflastinat.png" 
                    style={{width:"385px", height:"100px"}}
                    onClick={netflModal} 
                />
                <img src="https://i.ibb.co/vsk4hbr/covid.png"
                     style={{width:"385px", height:"100px"}} 
                     onClick={covidModal}/>
            </div>

            <div className="center">
                <img src="https://i.ibb.co/61mSyWk/fashun.png"
                     style={{width:"385px" ,height:"220px"}} 
                     onClick={fashunModal}/>
            </div>

            <div className="right">
                <img src="https://i.ibb.co/8gKq5P9/calorie.png"
                     style={{width:"385px", height:"220px"}} 
                     onClick={caloriModal}/>
            </div>
        </div>
       
        {netflastinate && (
            <div className="netflastinate" >
                <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/pWs82w7/netflastinat.png" 
                            style={{width:"385px", height:"220px"}} />
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
                    <iframe src="https://www.youtube.com/embed/il_xlQ79nyk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description">
                    <p>Netflastinate is a movie trailer app where the user can watch movie trailers and save them in their watch-list.
                    "Netflastinate" – (slang) using Netflix to procrastinate</p>
                </div>
            </div>
            )}          

        {covid && (
            <div className="covid">
                 <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/vsk4hbr/covid.png" 
                            style={{width:"385px", height:"220px"}} />
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
                    <iframe src="https://www.youtube.com/embed/7l0plZNASC4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description">
                <p>Beat COVID! The user kills the COVID-19 virus with a sanitizing click.</p>
                </div>
            </div>
        )}    

       {fashun && (
           <div
           className="fashun">
                <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/MRNjds9/Screen-Shot-2021-06-08-at-9-30-02-PM.png" 
                            style={{width:"385px", height:"220px"}} />
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
                    <iframe src="https://www.youtube.com/embed/aTrz__8UJ5I" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description">
                <p>Fash-un – fashion show coverage with expandable runway shows with the ability for users to create mood boards, saving their most inspiring looks.</p>
                </div>
            </div>
                )}

        {calorie && (
            <div className="calorie">
                 <div className="youtubeContainer">
                    <div className="title">
                        <img src="https://i.ibb.co/brcBcWN/calorie-2.png" 
                            style={{width:"385px", height:"220px"}} />
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
                    <iframe src="https://www.youtube.com/embed/QSRl5Km5r1o" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="description">
                    <p>Calorie tracker is a nutrition app that helps users keep track of their daily caloric intake.</p>
                </div>
            </div>
        )}
        </>
    )
}


export default Portfolio