import React from 'react'
import { vega } from '../api/starInfo'
import StarCard from '../StarCard/StarCard'
import { useEffect } from 'react'
const Vega = ({setStar}) => {
  useEffect(()=>{
    setStar(true)
  },[])
  return (
    <StarCard item={vega}/>
  )
}

export default Vega