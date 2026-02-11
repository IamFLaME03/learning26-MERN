import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

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
      <h1>FormDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
         <div>
            <label>Employee Id :</label>
            <input type="number" {...register("id")} />
         </div>
         <div>
            <label>Employee Name :</label>
            <input type="text" {...register("name")} />
         </div>
         <div>
            <label>Age :</label>
            <input type="number" {...register("age")} />
         </div>
         <div>
            <label>Gender :</label>
            <br />
            Male<input type='radio' value="male" {...register("gender")} ></input>
            Female<input type='radio' value="female" {...register("gender")} ></input>
         </div>
         <div>
            <label>Department :</label>
            HR:<input type='radio' value="human resource" {...register("department")}></input>
            Accounting:<input type='radio' value="accounting" {...register("department")}></input>
            Marketing:<input type='radio' value="marketing" {...register("department")}></input>
            Sales:<input type='radio' value="sales" {...register("department")}></input>
         </div>
         <div>
            <input type="submit"/>
         </div>

         {
         isSubmited == true && <div>
               <h1>Output : </h1>
               <h2>Employee Id : {userdata.id}</h2>
               <h2>Employee Name : {userdata.name}</h2>
               <h2>Age : {userdata.age}</h2>
               <h2>Gender : {userdata.gender}</h2>
               <h2>Depatment : {userdata.department}</h2>
            </div>
      }
      </form>
    </div>
  )
}
