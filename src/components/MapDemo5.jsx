import React from 'react'

export const MapDemo5 = () => {

   var students = [
      {id:1, name:"kirtan", age:21, marks:63, city:"bharuch", gender:"male"},
      {id:2, name:"ruhi", age:19, marks:45, city:"navsari", gender:"female"},
      {id:3, name:"rajan", age:24, marks:82, city:"ahemdabad", gender:"male"},
      {id:4, name:"suraj", age:20, marks:69, city:"anand", gender:"male"}
   ]

  return (
    <div>
      <h1 className='center'>MapDemo5</h1>
      <table className='table'>
         <thead>
            <tr>
               <th>ID</th>
               <th>NAME</th>
               <th>AGE</th>
               <th>MARKS</th>
               <th>CITY</th>
               <th>GENDER</th>
            </tr>
         </thead>
         <tbody>
            {
               students.map((st) => {
                  return <tr style={{backgroundColor: st.gender=="female" && "pink"}}>
                     <td>{st.id}</td>
                     <td>{st.name}</td>
                     <td style={{color: st.age>20 ? "red" : "black"}}>{st.age}</td>
                     <td>{st.marks}</td>
                     <td style={{backgroundColor: st.city=="ahemdabad" && "lightblue" }}>{st.city}</td>
                     <td >{st.gender}</td>
                  </tr>
               })
            }
         </tbody>
      </table>
    </div>
  )
}
