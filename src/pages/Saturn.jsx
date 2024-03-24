import React from 'react'
import { saturn } from '../api/planetInfo'
import first from "../assets/sat/1.png"
import second from "../assets/sat/2.png"
import third from "../assets/sat/1.png"
import four from "../assets/sat/2.png"
import Card from '../planetCard/Card'
import { useEffect } from 'react'

const Saturn = ({setPlanet}) => {
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
   <Card item={saturn} picture={picture}/>
  )
}

export default Saturn