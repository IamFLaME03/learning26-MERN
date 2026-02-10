import React, { useState } from 'react'

export const InputComponent = (props) => {
   const [value, setValue] = useState("")

   var eventHandler = (e) => {
      setValue(e.target.value)
   }


  return (
    <div>
      <input type={props.type} onChange={(e) => {eventHandler(e)}}/>
      {value}
      <br></br>
    </div>
  )
}
