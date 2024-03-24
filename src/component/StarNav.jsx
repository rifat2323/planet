import React from 'react'
import "./starnav.css"
import { Link,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import Sun from "../assets/str/1.png"
import sirius from "../assets/str/2.png"
import alphaCentauri from "../assets/str/3.png"
import betelgeuse from "../assets/str/4.png"
import vega from "../assets/str/5.png"

 const StarNav = ({isHomeClik,setIsHomeClick}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Navigate = useNavigate()
    const items = [Sun, sirius, alphaCentauri, betelgeuse, vega];
    const handleWheel = (e) => {
        if (e.deltaY > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
      };
     
    
     /*  useEffect(() => {
        // Add an event listener for the wheel event
        window.addEventListener('wheel', handleWheel);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('wheel', handleWheel);
        };
      }, [currentIndex, Navigate]); */
    
      useEffect(() => {
        if(!isHomeClik){
          Navigate(`/${currentIndex + 1}`);
        }
        // Trigger navigation when currentIndex changes
        return ()=>{
          setIsHomeClick(false)
        }
      }, [currentIndex, Navigate]);
     
     
  return (
    <div className='star-nav' onWheel={handleWheel}>
        <ul style={{transform:`translateY(${- currentIndex*100}px)`}}>
    {
      items.map((item,index)=>(
         <li key={index} className={index === currentIndex ? 'active-star' : ''}>
            <Link onClick={()=>setCurrentIndex(index) } to={`/${index+1}`}>
                <img src={item} alt="" className='star-img' />
         
            
            
            </Link>
         </li>


      ))
  }
  </ul>
        
        </div>
  )
}
export default StarNav