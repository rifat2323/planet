import React from 'react'
import first from "../assets/nep/1.png"
import second from "../assets/nep/2.png"
import third from "../assets/nep/3.png"
import four from "../assets/nep/4.png"
import Card from '../planetCard/Card'
import { neptune } from '../api/planetInfo'
import { useEffect } from 'react'

const Neptune = ({setPlanet}) => {
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
    <Card item={neptune} picture={picture}/>
  )
}

export default Neptune