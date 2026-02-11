import React from 'react'

export const MapDemo1 = () => {
   let cars = ["audi", "bmw", "alto", "lambo", "rr"]

  return (
   
    <div>
      <h1>MapDemo1</h1>
      {
         cars.map((car) => {
            return <h2>{car}</h2>
         })
      }
    </div>

  )
}
