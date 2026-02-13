import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
   const {register, handleSubmit, formState:{errors}} = useForm()

   const submitHandler = (data) => {
      console.log(data);
   }

   const validationSchema = {
      nameValidator: {
         required:{
            value: true,
            message: "Name is Required*"
         }
      },
      contactValidator : {
         required: {
            value: true,
            message: "Contact is Required*"
         },
         pattern: {
            value: /^[6-9]{1}[0-9]{9}$/,
            message: "Invalid Contact"
         }
      },
      promocodeValidator : {
         required: {
            value: true,
            message: "PromoCode is Required*"
         },
         validate: (params) => {
            // console.log("promo params", params);
            return params == '2026' || "Invalid Promocode*"
         }
      },
      hobbiesValidator : {
         required: {
            value: true,
            message: "Hobbies are Required*"
         },
         validate: (params)=>{
            return params.length>=2 || "At least 2 hobbies are required"
         }
      }

   }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>FormDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}> 
         <div>
            <label>Name :</label>
            <input type="text" {...register("name", validationSchema.nameValidator)} />
            {errors.name?.message}
         </div>
         <div>
            <label>Contact :</label>
            <input type="text" {...register("contact", validationSchema.contactValidator)} />
            {errors.contact?.message}
         </div>
         <div>
            <label>Promocode</label>
            <input type="text" {...register("promocode", validationSchema.promocodeValidator)} />
            {errors.promocode?.message}
         </div>
         <div>
            <label>Hobbies : </label>
            Cricket <input type='checkbox' {...register("hobbies", validationSchema.hobbiesValidator)}></input>
            Travel <input type='checkbox' {...register("hobbies", validationSchema.hobbiesValidator)}></input>
            Scrolling <input type='checkbox' {...register("hobbies", validationSchema.hobbiesValidator)}></input>
            <p className='text-danger'> {errors.hobbies?.message} </p>
         </div>
         <div>
            <input type="submit" />
         </div>
      </form>
    </div>
  )
}
