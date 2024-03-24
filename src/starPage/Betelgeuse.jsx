import React from 'react'
import StarCard from '../StarCard/StarCard'
import { betelgeuse } from '../api/starInfo'
import { useEffect } from 'react'

const Betelgeuse = ({setStar}) => {
  useEffect(()=>{
    setStar(true)
  },[])
  return (
    <StarCard item={betelgeuse}/>
  )
}

export default Betelgeuse