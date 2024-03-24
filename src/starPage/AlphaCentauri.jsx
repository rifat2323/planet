import React from 'react'
import { alphaCentauri } from '../api/starInfo'
import StarCard from '../StarCard/StarCard'
import { useEffect } from 'react'
const AlphaCentauri = ({setStar}) => {
  useEffect(()=>{
    setStar(true)
  },[])
  return (
   <StarCard item={alphaCentauri}/>
  )
}

export default AlphaCentauri