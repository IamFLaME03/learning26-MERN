import React from 'react'

export const MapDemo8 = () => {

   var cities = [
      {id:1, name:"ahmedabad", pop: 8000000, AQI: 302, state:"Gujarat"},
      {id:2, name:"mumbai", pop: 12000000, AQI: 422, state:"Maharastra"},
      {id:3, name:"surat", pop: 9000000, AQI: 152, state:"Gujarat"},
      {id:4, name:"patna", pop: 5000000, AQI: 355, state:"Bihar"},
      {id:5, name:"banglore", pop: 14000000, AQI: 252, state:"Karnatak"},
   ]

  return (
    <div>
      <h1>MapDemo8</h1>
      <table className='table'>
         <thead>
            <tr>
               <th>ID</th>
               <th>NAME</th>
               <th>POPULATION</th>
               <th>AQI</th>
               <th>STATE</th>
            </tr>
         </thead>
         <tbody>
            {
               cities.map((c) => {
                  return <tr>
                     <td>{c.id}</td>
                     <td>{c.name}</td>
                     <td style={{fontSize: c.pop>10000000 && "20px"}}>{c.pop}</td>
                     <td style={{color: c.AQI>350 && "red"}}>{c.AQI}</td>
                     <td style={{backgroundColor: c.state=="Gujarat" && "orange"}}>{c.state}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}
