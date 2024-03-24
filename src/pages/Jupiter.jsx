import React from 'react'
import first from "../assets/jup/1.png"
 import second from "../assets/jup/2.png"
 import third from "../assets/jup/3.png"
 import four from "../assets/jup/4.png"
import Card from '../planetCard/Card'
import { jupiter } from '../api/planetInfo'
import { useEffect } from 'react'

const Jupiter = ({setPlanet}) => {
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
   <Card item={jupiter} picture={picture}/>
  )
}

export default Jupiter