import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
   const {register, handleSubmit, formState:{errors}, watch} = useForm()
   const password = watch("password")

   const submitHandler = (data) => {
      console.log(data);
   }
   const validationSchema = {
      passwordValidator: {
         required: {
            value: true,
            message: "Password is required"
         },
      },
      confirmPasswordValidator: {
         required: {
            value: true,
            message: "Confirm Password is required"
         },
         validate: (params) =>{
            return params == password || "confirm password not matched"
         }
      }
   }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>FormDemo4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
         <div>
            <label>Password :</label>
            <input type="password" {...register("password", validationSchema.passwordValidator)}/>
            {errors.password?.message}
         </div>
         <div>
            <label>Confirm Password :</label>
            <input type="password" {...register("confirmpassword", validationSchema.confirmPasswordValidator)}/>
            {errors.confirmpassword?.message}
         </div>
         <div>
            <input type="submit" />
         </div>

      </form>
    </div>
  )
}
