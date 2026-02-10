import React, { useState } from 'react'
import { InputComponent } from './InputComponent'

export const InputDemo1 = () => {
   const [name, setName] = useState("")
   const [location, setLocation] = useState("")

   var nameHandler = (e) => {
      console.log(e.target.value);
      setName(e.target.value)
   }

   var locationHandler = (e) => {
      setLocation(e.target.value)
   }



  return (
    <div style={{textAlign:'center', height:'fullscreen'}}>
      <h1>InputDemo1</h1>
      Name: 
      <input type='text' onChange={(event) => {nameHandler(event)}}></input>
      {name}
      <br></br>
      Location :
      <input type='text' onChange={(e) => {locationHandler(e)}}></input>
      {location}
      <br></br>

      <span>Id :</span>
      <InputComponent type='text'></InputComponent>
      Password : 
      <InputComponent type='password'></InputComponent>
      Contact :
      <InputComponent type='number'></InputComponent>
      Introduction :
      <InputComponent type='text-area'></InputComponent>
      Birthdate :
      <InputComponent type='date'></InputComponent>
      Favourite Color :
      <InputComponent type='color'></InputComponent>
      Age :
      <InputComponent type='range'></InputComponent>
      Search :
      <InputComponent type='search'></InputComponent>
      Time :
      <InputComponent type='time'></InputComponent>
      Address :
      <InputComponent type='text-area'></InputComponent>

    </div>
  )
}
