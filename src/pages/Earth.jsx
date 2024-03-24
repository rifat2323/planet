import React from 'react'

 import first from "../assets/earth/1.png"
 import second from "../assets/earth/2.png"
 import third from "../assets/earth/3.png"
 import four from "../assets/earth/4.png"
import Card from '../planetCard/Card'

import { earth } from '../api/planetInfo'
import { useEffect } from 'react'

const Earth = ({setPlanet}) => {
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
    <div>
      <Card item={earth} picture={picture}/>
    </div>
  )
}

export default Earth