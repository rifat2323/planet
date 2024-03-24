import { useState } from 'react'
 import { useRef } from 'react'
import {TiArrowDownOutline} from 'react-icons/ti'
import "../style/card.css"
import {Fade} from "react-awesome-reveal"


const Card = ({item,picture}) => {
    const [track,setTrack] = useState(0)
    const scrollLeft = useRef(null)
  const handelClick =()=>{
     track < 3 ? setTrack(track+1): setTrack(3)
     scrollLeft.current.scrollIntoView({behavior: 'smooth'})
     
  }
  
  return (
    <div className='wrap'>
          <div className="flex-display">
            <div className="img-wrapper">
              <Fade>
            <img src={track==3?picture.fourth : track===1?picture.second:track===2?picture.third:picture.first } alt="" />
            </Fade>
            </div>

              <div className="grid-column">

              
               
                  
                  
                  <div className="card1">
                    <Fade duration={2100}>
                   <div className="inside-col1">
                    <p id='big'> <span> name</span> :{item.name}</p>
                   
                   <p> <span> distanceToSun</span> :{item.distanceToSun}</p>
                   </div>
                   <div className="inside-col2">
                    <p> <span> rotationSpeed</span> :{item.rotationSpeed}</p>
                    <p> <span>volume </span> :{item.volume}</p>
                   </div>
                   </Fade>
                  
                  </div>
                  <div className="card2">
                    <Fade duration={2500}>
                   <div className="inside-col1">
                    <p> <span> temperature</span> :{item.temperature}</p>
                   
                   <p> <span> diameter</span> :{item.diameter}</p>
                   </div>
                   <div className="inside-col2">
                    <p> <span>gravity </span> :{item.gravity}</p>
                    <p> <span>atmosphere </span> :{item.atmosphere}</p>
                   </div>
                   </Fade>
                  </div>
                
               
                
                 <div className="card3" style={track > 0 ? {display:"flex"}:{scale:"0"}} ref={scrollLeft}>
                   <div className="inside-col1">
                    <p> <span>moons </span> :{item.moons}</p>
                   
                   <p> <span>rings </span> :{item.rings}</p>
                   </div>
                   <div className="inside-col2">
                    <p> <span> magneticField</span> :{item.magneticField}</p>
                    <p> <span> dayLength</span> :{item.dayLength}</p>
                   </div>
                  </div>
                

                 
               
                  <div className="card4" style={track > 1 ? {display:"flex"}:{transform:"scaleY(0)"}} ref={scrollLeft}>
                  <div className="inside-col1">
                   <p> <span>yearLength</span> :{item.yearLength}</p>
                  
                  <p> <span>discovery </span>:{item.discovery}</p>
                  </div>
                  <div className="inside-col2">
                   <p> <span>composition </span>:{item.composition}</p>
                   <p> <span>surfaceFeatures </span>:{item.surfaceFeatures}</p>
                  </div>
                 </div>
               
                 
                  <div className="card5" style={track > 2 ? {display:"flex"}:{transform:"scaleY(0)"}} ref={scrollLeft}>
                  <div className="inside-col1">
                   <p> <span>axialTilt </span>:{item.axialTilt}</p>
                  
                  <p> <span>escapeVelocity </span>:{item.escapeVelocity}</p>
                  </div>
                  <div className="inside-col2">
                   <p> <span>meanDensity </span>:{item.meanDensity}</p>
                   <p> <span>orbitalSpeed</span>:{item.orbitalSpeed}</p>
                  </div>
                 </div>
                 
               
              


              </div>
        


          </div>








     <button onClick={()=>handelClick()} className={track <=0? "notActive":"activeBut"} 
     style={track === 3? {display:"none"}:{display:"block"}}>
        {track <= 0 ?(<p>Know More </p>):null }<TiArrowDownOutline fontSize='2.3em' color='#65B741'/>
        </button>


    </div>
  )
}

export default Card