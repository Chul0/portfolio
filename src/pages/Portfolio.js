import { useState } from 'react'


const Portfolio = () => {
    const [netflastinate, setNetflastinate] = useState(false)
    const [covid, setCovid] = useState(false)
    const [fashun, setFashun] = useState(false)
    const [calorie, setCalorie] = useState(false)

    const netflModal =() => {
        setNetflastinate(!netflastinate)
        setCovid(false)
        setFashun(false)
        setCalorie(false)
    }

    const covidModal = () => {
        setCovid(!covid)
        setNetflastinate(false)
        setFashun(false)
        setCalorie(false)
    }

    const fashunModal = () => {
        setFashun(!fashun)
        setCovid(false)
        setNetflastinate(false)
        setCalorie(false)
    }

    const caloriModal = () => {
        setCalorie(!calorie)
        setCovid(false)
        setNetflastinate(false)
        setFashun(false)
    }

    return (
        <>
        <div className="portfolio-container">

        <div className="left">
                <img src="https://i.ibb.co/pWs82w7/netflastinat.png" 
                    style={{width:"400px", height:"250px"}}
                    onClick={netflModal} 
                />
                <img src="https://i.ibb.co/vsk4hbr/covid.png"
                     style={{width:"400px", height:"250px"}} 
                     onClick={covidModal}/>
            </div>

            <div className="center">
                <img src="https://i.ibb.co/61mSyWk/fashun.png"
                     style={{height:"520px"}} 
                     onClick={fashunModal}/>
            </div>

            <div className="right">
                <img src="https://i.ibb.co/8gKq5P9/calorie.png"
                     style={{width:"400px", height:"520px"}} 
                     onClick={caloriModal}/>
            </div>
        </div>
       
        {netflastinate && (
            <div className="netflastinate" >
                    <img src="https://i.ibb.co/yWHYVVs/youtube.png" style={{width:"600px"}} />
                    <p>Netflastinate is a movie trailer app where user can watch movie trailers, and save them to watch list.
                    "Netflastinate" is a slang term used when you use Netflix to procrastinate.</p>
                    <a href="https://github.com/Chul0/Netflastinate-frontend">
                        <i class="devicon-github-original" style={{color:"grey", fontSize:"50px"}} ></i>
                        <p style={{color:"black"}}>FrontEnd</p>
                    </a>
                    <a href="https://github.com/Chul0/Netflastinate-backend">
                        <i class="devicon-github-original colored" style={{fontSize:"50px"}} ></i>
                        <p style={{color:"black"}}>BackEnd</p>
                    </a>
                    <a href="https://netflastinate.herokuapp.com/">
                        <p style={{color:"black"}}>Website</p>
                    </a>
            </div>
            )}          

        {covid && (
            <div className="covid">
                    <img src="https://i.ibb.co/yWHYVVs/youtube.png" style={{width:"600px"}}/>
                    <p>Beat COVID: user kills coronavirus by clicking viruses.</p>
                    <a href="https://github.com/Chul0/beat-covid">
                        <i class="devicon-github-original colored" style={{fontSize:"50px"}} ></i>
                        <p style={{color:"black"}}>GitHub</p>
                    </a>
                    <a href="https://chul0.github.io/beat-covid/">
                        <p style={{color:"black"}}>Website</p>
                    </a>
            </div>
        )}    

       {fashun && (
           <div
           className="fashun">
                    <img src="https://i.ibb.co/yWHYVVs/youtube.png" style={{width:"600px"}}/>
                    <p>Fash-un app is a fashion show coverage where you can explore runway shows, and create mood boards to save inspiring looks.</p>
                    <a href="https://github.com/Chul0/fash-un-frontend">
                        <i class="devicon-github-original" style={{color:"grey", fontSize:"50px"}} ></i>
                        <p style={{color:"black"}}>FrontEnd</p>
                    </a>
                    <a href="https://github.com/Chul0/fash-un-backend">
                        <i class="devicon-github-original colored" style={{fontSize:"50px"}} ></i>
                        <p style={{color:"black"}}>BackEnd</p>
                    </a>
                    <a href="https://netflastinate.herokuapp.com/">
                        <p style={{color:"black"}}>Website</p>
                    </a>
            </div>
                )}

        {calorie && (
            <div
             className="calorie">
             <img src="https://i.ibb.co/yWHYVVs/youtube.png" style={{width:"600px"}}/>
            </div>
        )}
        </>
    )
}


export default Portfolio