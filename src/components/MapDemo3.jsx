import React from 'react'

export const MapDemo3 = () => {

   var students = [
      {id:1, name:"kirtan", age:21, marks:63, city:"bharuch", gender:"male"},
      {id:2, name:"ruhi", age:19, marks:45, city:"navsari", gender:"female"},
      {id:3, name:"rajan", age:24, marks:82, city:"ahemdabad", gender:"male"},
      {id:4, name:"suraj", age:20, marks:69, city:"anand", gender:"male"}
   ]

  return (
    <div style={{textAlign:'center'}}>
      <h1>MapDemo3</h1>
      <table border={2} align='center'>
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
               students.map((st) => {
                  return <tr>
                     <td>{st.id}</td>
                     <td>{st.name}</td>
                     <td>{st.age}</td>
                     <td>{st.city}</td>
                     <td>{st.gender}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>


  )
}
