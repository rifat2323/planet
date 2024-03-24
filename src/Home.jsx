import React from 'react'
import { Link } from 'react-router-dom'
import Back from './assets/back.webP'
import planets from './assets/planet-card.png'
import stars from './assets/star-card.webP'
import Me from './assets/me.webP'
import "./index.css"
import { useEffect } from 'react'


const Home = ({setStar,star,planet,setPlanet}) => {
    useEffect(()=>{
        setStar(false)
        setPlanet(false)
    },[])
    const handelStarClick =()=>{
        setStar(true)
        setPlanet(false)
    }
    const handelPlanetClick =()=>{
        setStar(false)
        setPlanet(true)
    }
  return (
    <>
  
    <div style={{background:`linear-gradient(rgba(0, 0, 0, 0.5), #000000),url(${Back})` ,backgroundPosition:"Center", backgroundSize:"cover", height:"100vh", width:"100%",}}
    >
          <div >
      <p style={{display:"flex", justifyContent:"Center", alignItems:"center"}}>this website is created by this 👉 <img src={Me} alt="" style={{width:"50px", aspectRatio:"1", objectFit:"cover", borderRadius:"50%"}} />  guy. <a href="mailto:munnarifat20@gmail.com">Email that👈 guy </a></p>
    </div>
     <div className="two" style={{display:"flex", width:"90%", margin:"0 auto", justifyContent:"center", alignItems:"center", height:"100vh",gap:"8px",flexWrap:"wrap"}}>
        <Link to={'/1'}>
         <div className="star-entry" style={{maxWidth:"400px", height:"250px", overflow:"hidden", border:"1px solid rgba(0,0,0,.1)",position:"relative",cursor:"pointer",userSelect:"none"}}
          onClick={handelStarClick }
         >
            
            <img src={stars} alt="" style={{width:"100%", height:"100%", objectFit:"cover",position:"relative",transition:"all 1250ms"}} />
            <h3 style={{position:"absolute", zIndex:"3",top:"30%",left:"10%",fontSize:"1.8em",color:"#F9E0DF"}}>Take me to the Stars </h3>
           
         </div>
         </Link>
         <Link to={"/ear"}>
         <div className="planet-entry" style={{maxWidth:"400px", height:"250px", overflow:"hidden",border:"1px solid rgba(0,0,0,.1)",position:"relative",cursor:"pointer",userSelect:"none"}}
           onClick={handelPlanetClick }
         >
         <img src={planets} alt="" style={{width:"100%", height:"100%", objectFit:"cover",position:"relative",transition:"all 1250ms"}} />
            <h3 style={{position:"absolute", zIndex:"3",top:"30%",left:"10%",fontSize:"1.8em",color:"#F5D7D8"}}>Take me to the planets </h3>
    
         </div>
         </Link>

     </div>

    </div>
    </>
  )
}

export default Home