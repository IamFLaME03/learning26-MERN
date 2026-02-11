import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

   const {register, handleSubmit} = useForm()
   const [userdata, setUserdata] = useState({})
   const [isSubmited, setisSubmited] = useState(false)

   const submitHandler = (data) => {
      console.log(data);
      setUserdata(data)
      setisSubmited(true)
      
   }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
         <div>
            <label>firstName : </label>
            <input type='text' {...register("firstname")} ></input>
         </div>
         <div>
            <label>lastName : </label>
            <input type='text' {...register("lastname")} ></input>
         </div>
         <div>
            <label>Age : </label>
            <input type='number' {...register("age")} ></input>
         </div>
         <div>
            <label>Gender : </label>
            <br />
            Male :<input type='radio' value="male" {...register("gender")} ></input>
            Female :<input type='radio' value="female" {...register("gender")} ></input>
         </div>
         <div>
            <label>Hobbies :</label>
            Cricket:<input type='checkbox' value="cricket" {...register("hobbies")}></input>
            Painting:<input type='checkbox' value="painting" {...register("hobbies")}></input>
            travel:<input type='checkbox' value="travel" {...register("hobbies")}></input>
         </div>
         <div>
            <input type="submit"/>
         </div>
      </form>


      {
         isSubmited == true && <div>
               <h1>Output : </h1>
               <h2>firstName : {userdata.firstname}</h2>
               <h2>lastName : {userdata.lastname}</h2>
               <h2>Age : {userdata.age}</h2>
               <h2>Gender : {userdata.gender}</h2>
               <h2>Hobbies : {
                  userdata.hobbies?.map((hobby) => {
                     return <span>{hobby}  </span>
                  })
               }</h2>
            </div>

      }

    </div>
  )
}
