import React from 'react'
import StarCard from '../StarCard/StarCard'
import { sun } from '../api/starInfo'
import { useEffect } from 'react'

const Sun = ({setStar}) => {
  useEffect(()=>{
    setStar(true)
  },[])
  return (
    <StarCard item={sun}/>
  )
}

export default Sun
