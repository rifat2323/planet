import React from 'react'
import { mercury } from '../api/planetInfo'
import Card from '../planetCard/Card'
import first from '../assets/mer/1.png'
import secound from '../assets/mer/2.png'
import { useEffect } from 'react'

const Mercury = ({setPlanet}) => {
  useEffect(()=>{
    setPlanet(true)
  },[])
  const picture ={
    first:first,
    second:secound,
    third:first,
    fourth:secound
  }
  return (
    <Card item={mercury} picture={picture}/>
  )
}

export default Mercury