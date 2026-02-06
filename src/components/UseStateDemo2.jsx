import React, { useState } from 'react'

export const UseStateDemo2 = () => {
   const [loading, setLoading] = useState(true)

   var toggleLoading = () => {
      setLoading(!loading)
   }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>UseStateDemo2</h1>
      <h2>{loading ? "Loading..." : "Loading Stopped..."}</h2>
      <button onClick={toggleLoading}> {loading ? "Stop" : "Start"} </button>
    </div>
  )
}
