import React from 'react'
import './starStyle.css'

const StarCard = ({item}) => {
  return (
    <div className='star-wrapper'>
       <div className="star-card1">
        <p className='star-first'><span>Name:</span>{item.name}</p>
        <p><span>Type:</span>{item.type}</p>
        <p><span>Mass:</span>{item.mass}</p>
        <p><span>radius:</span>{item.radius}</p>
       </div>
       <div className="star-card2">
       <p><span>temperature:</span>{item.temperature}</p>
        <p><span>luminosity:</span>{item.luminosity}</p>
        <p><span>age:</span>{item.age}</p>
        <p><span>composition:</span>{item.composition}</p>
       </div>
       <div className="star-card3">
       <p><span>distanceFromEarth:</span>{item.distanceFromEarth}</p>
        <p><span>constellation:</span>{item.constellation}</p>
        <p><span>discovered:</span>{item.discovered}</p>
        <p><span>galaxies:</span>{item.galaxies}</p>
       </div>
       <div className="star-card4">
       <p><span>solarSystem:</span>{item.solarSystem}</p>
        <p><span>planets:</span>{item.planets}</p>
        <p><span>moons:</span>{item.moons}</p>
        <p><span>spectralClass:</span>{item.spectralClass}</p>
       </div>
       <div className="star-card5">
       <p><span>rotationPeriod:</span>{item.rotationPeriod}</p>
        <p><span>magneticField:</span>{item.magneticField}</p>
        <p><span>solarWind:</span>{item.solarWind}</p>
        <p><span>prominences:</span>{item.prominences}</p>
       </div>


    </div>
  )
}

export default StarCard