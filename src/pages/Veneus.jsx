import React from 'react'
import { venus } from '../api/planetInfo'
import first from "../assets/ven/1.png"
 import second from "../assets/ven/2.png"
 import third from "../assets/ven/1.png"
 import four from "../assets/ven/2.png"
import Card from '../planetCard/Card'
import { useEffect } from 'react'



const Veneus = ({setPlanet}) => {
  useEffect(()=>{
    setPlanet(true)
  },[])
  const picture ={
    first:first,
    second:second,
    third:third,
    fourth:four
  }
 
  return (
   <Card item={venus} picture={picture}/>
  )
}

export default Veneus