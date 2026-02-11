import React from 'react'

export const MapDemo10 = () => {

   var users = [
      {id:1, name:"amit", age:21, gender:"male", status:"active"},
      {id:2, name:"smiti", age:20, gender:"female", status:"inactive"},
      {id:3, name:"raju", age:23, gender:"male", status:"inactive"},
      {id:4, name:"jay", age:17, gender:"male", status:"active"},
      {id:5, name:"bhavya", age:15, gender:"female", status:"active"},
   ]
  return (
    <div>
      <h1>MapDemo7</h1>
      <table className='table'>
         <thead>
            <tr>
               <th>ID</th>
               <th>NAME</th>
               <th>AGE</th>
               <th>CITY</th>
               <th>GENDER</th>
            </tr>
         </thead>
         <tbody>
            {
               users.map((user) => {
                  return <tr style={{backgroundColor: user.status=="inactive" && "lightgray"}}>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td style={{fontSize: user.age>20 ? "20px":"16px"}}>{user.age}</td>
                     <td style={{backgroundColor: user.gender=="male" ? "lightblue" : "lightpink"}}>{user.gender}</td>
                     <td style={{backgroundColor: user.status=="active" && "green"}}>{user.status}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}
