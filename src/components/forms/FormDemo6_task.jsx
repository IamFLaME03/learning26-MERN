import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo6_task = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm({ mode: "onChange" });

   const password = watch("password") || "";

   const submitHandler = (data) => {
      console.log(data);
      console.log("Capital letter validated:", capValidate);
      console.log("Digit validation:", digitValidate);
   };

   const validationSchema = {
      nameValidator: {
         required: {
            value: true,
            message: "Name is required*",
         },
      },
      ageValidator: {
         required: {
            value: true,
            message: "Name is required*",
         },
         min: {
            value: 12,
            message: "Minimum 12 year age is allowed",
         },
         max: {
            value: 100,
            message: "Maximum 100 year age is allowed",
         },
      },
      addressValidator: {
         required: {
            value: true,
            message: "Name is required*",
         },
         minLength: {
            value: 10,
            message: "Minimum 10 Character is required",
         },
         maxLength: {
            value: 30,
            message: "Maximum 30 Character is allowed",
         },
      },
      passwordValidator: {
         required: {
            value: true,
            message: "Password is required",
         },
      },
      confirmPasswordValidator: {
         required: {
            value: true,
            message: "Confirm Password is required",
         },
         validate: (params) => {
            return params == password || "confirm password not matched";
         },
      },
   };

   const capValidate = /[A-Z]/.test(password);
   const smallValidate = /[a-z]/.test(password);
   const digitValidate = /\d/.test(password);
   const specialValidate = /[^A-Za-z0-9]/.test(password);
   const min8Validate = password.length >= 8;

   return (
      <div style={{ textAlign: "center" }}>
         <h1>FormDemo 6 Task</h1>
         <form onSubmit={handleSubmit(submitHandler)}>
            <div>
               <label>Name: </label>
               <input
                  type="text"
                  {...register("name", validationSchema.nameValidator)}
               />
               {errors.name?.message}
            </div>
            <div>
               <label>Age: </label>
               <input
                  type="number"
                  {...register("age", validationSchema.ageValidator)}
               />
               {errors.age?.message}
            </div>
            <div>
               <label>Address: </label>
               <input
                  type="text"
                  {...register("address", validationSchema.addressValidator)}
               />
               {errors.address?.message}
            </div>
            <div>
               <label>Password :</label>
               <input
                  type="password"
                  {...register("password", validationSchema.passwordValidator)}
               />
               {errors.password?.message}
            </div>
            <div>
               <label>Confirm Password :</label>
               <input
                  type="password"
                  {...register(
                     "confirmPassword",
                     validationSchema.confirmPasswordValidator,
                  )}
               />
               {errors.confirmPassword?.message}
            </div>
            <div>
               <h5>--- Note ---</h5>
               <p style={{ color: capValidate ? "green" : "red" }}>
                  Minimum 1 Capital letter required
               </p>
               <p style={{ color: smallValidate ? "green" : "red" }}>
                  Minimum 1 Small letter required
               </p>
               <p style={{ color: digitValidate ? "green" : "red" }}>
                  Minimum 1 Digit required
               </p>
               <p style={{ color: specialValidate ? "green" : "red" }}>
                  Minimum 1 Special character required
               </p>
               <p style={{ color: min8Validate ? "green" : "red" }}>
                  Minimum 8 character required
               </p>
            </div>
            <div>
               <input type="submit" />
            </div>
         </form>
      </div>
   );
};
