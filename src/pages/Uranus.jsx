import React from 'react'
import { uranus } from '../api/planetInfo'
import Card from '../planetCard/Card'
import first from "../assets/ure/1.png"
 import second from "../assets/ure/2.png"
 import third from "../assets/ure/3.png"
 import { useEffect } from 'react'
const Uranus = ({setPlanet}) => {
  useEffect(()=>{
    setPlanet(true)
  },[])
  const picture ={
    first:first,
    second:second,
    third:third,
    fourth:first
  }
  return (
    <Card item={uranus} picture={picture}/>
  )
}

export default Uranus