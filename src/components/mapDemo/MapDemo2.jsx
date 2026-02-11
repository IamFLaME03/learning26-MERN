import React from 'react'

export const MapDemo2 = () => {

   var users = [
      {id:1, name:"amit", age:21, gender:"male"},
      {id:2, name:"smiti", age:20, gender:"female"},
      {id:3, name:"raju", age:23, gender:"male"}
   ]

  return (
    <div>
      <h1>MapDemo2</h1>
      {
         users.map((user) => {
            return <li>{user.id} -- {user.name} -- {user.age} -- {user.gender}</li>
         })
      }
    </div>
  )
}
