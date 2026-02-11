import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

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
      <h1>FormDemo4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
         <div>
            <label>Car Model :</label>
            <input type="text" {...register("model")} />
         </div>
         <div>
            <label>Company:</label>
            Tata:<input type='checkbox' value="tata" {...register("company")}></input>
            BMW:<input type='checkbox' value="bmw" {...register("company")}></input>
            Pagani:<input type='checkbox' value="pagani" {...register("company")}></input>
         </div>
         <div>
            <label>Color :</label>
            <input type="text" {...register("color")} />
         </div>
         <div>
            <label>Fuel type :</label>
            <br />
            Diesel<input type='radio' value="diesel" {...register("fueltype")} ></input>
            Petrol<input type='radio' value="petrol" {...register("fueltype")} ></input>
            CNG<input type='radio' value="cng" {...register("fueltype")} ></input>
            Electric<input type='radio' value="electric" {...register("fueltype")} ></input>
         </div>
         <div>
            <label>Price :</label>
            <input type="number" {...register("price")} />
         </div>
         <div>
            <input type="submit"/>
         </div>

         {
         isSubmited == true && <div>
               <h1>Output : </h1>
               <h2>Model : {userdata.model}</h2>
               <h2>Comany : {userdata.company}</h2>
               <h2>Color : {userdata.color}</h2>
               <h2>Fuel Type : {userdata.fueltype}</h2>
               <h2>Price : {userdata.price}</h2>
            </div>
      }
      </form>
    </div>
  )
}
