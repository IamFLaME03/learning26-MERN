import React from 'react'

export const MapDemo4 = () => {
   var cities = [
      {id:1, name:"ahemdabad", pop: 8000000, AQI: 302},
      {id:2, name:"delhi", pop: 10000000, AQI: 422},
      {id:3, name:"dehradun", pop: 3000000, AQI: 152}
   ]

  return (
    <div style={{textAlign: 'center'}}>
      <h1>MapDemo4</h1>
      <table className='table table-dark'>
         <thead>
            <tr>
               <th>ID</th>
               <th>NAME</th>
               <th>POPULATION</th>
               <th>AQI</th>
            </tr>
         </thead>
         <tbody>
            {
               cities.map((c) => {
                  return <tr>
                     <td>{c.id}</td>
                     <td>{c.name}</td>
                     <td>{c.pop}</td>
                     <td>{c.AQI}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}
