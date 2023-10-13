import React, { useState } from 'react'


function VehicleView({vehicle}) {
    const [Show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!Show);
      };

  return (
    <div className='VehicleView'>
      <h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>
      <img src={vehicle.image} alt={vehicle.name + " imagen"}/>

      <a href='/' >Regresar</a>
    </div>
  )
}

export default VehicleView

