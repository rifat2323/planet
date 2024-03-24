import React from 'react'
import { sirius } from '../api/starInfo'
import StarCard from '../StarCard/StarCard'
import { useEffect } from 'react'

const Sirius = ({setStar}) => {
  useEffect(()=>{
    setStar(true)
  },[])
  return (
   <StarCard item={sirius}/>
  )
}

export default Sirius
