import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {

   const test = () => {
      alert("test function called...")
   }
   const test2 = (x) => {
      alert("value of x "+x)
   }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>FunctionDemo1</h1>
      <button onClick={test}>CLICK 1</button>
      {/* <button onClick={test2(100)}>CLICK 2</button> */}
      <button onClick={() => {test2(100)}}>CLICK 2</button>

      <CardComponent title="Fundemo1" description="This is description"></CardComponent>
    </div>
  )
}
