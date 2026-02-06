import React, { useState } from 'react'

export const UseStateDemo3 = () => {

   const [users, setUsers] = useState(["ronak", "harsh"]) 
   const addUser = () => {
      setUsers([...users, 'Yash'])
   }


  return (
    <div style={{textAlign: 'center'}}>

      <h1>UseStateDemo3</h1>
      <button onClick={addUser}>Add</button>
      {
         users.map((u) => {
            return <li>{u}</li>
         })
      }
    </div>
  )
}
