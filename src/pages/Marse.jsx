import React from 'react'
import { mars } from '../api/planetInfo'
import first from "../assets/mar/1.png"
import second from "../assets/mar/2.png"
import third from "../assets/mar/1.png"
import four from "../assets/mar/2.png"
import Card from '../planetCard/Card'
import { useEffect } from 'react'

const Marse = ({setPlanet}) => {
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
    <Card item={mars} picture={picture}/>
  )
}

export default Marse