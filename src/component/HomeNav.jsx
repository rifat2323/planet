import React from 'react'
import { RiHome3Fill } from "react-icons/ri";
import { Link,useNavigate } from 'react-router-dom';

 const HomeNav = ({setIsHomeClick}) => {
  
  return (
    <div style={{position:"fixed",zIndex:"10", right:"5%", top:"2%"}}>
        <Link to='/' onClick={()=>setIsHomeClick(true)}>
        <RiHome3Fill color='#57B76D' fontSize="1.8em" />
        </Link>
     
    
    </div>
  )
}
export default HomeNav
