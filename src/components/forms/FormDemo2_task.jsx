import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2_task = () => {

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
      <h1>FormDemo2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
         <div>
            <label>Moviename :</label>
            <input type="text" {...register("name")} />
         </div>
         <div>
            <label>Date :</label>
            <input type="number" {...register("year")} />
         </div>
         <div>
            <label>Director :</label>
            <input type="text" {...register("director")} />
         </div>
         <div>
            <label>Genre :</label>
            <br />
            Action<input type='radio' value="action" {...register("genre")} ></input>
            Comady<input type='radio' value="Comady" {...register("genre")} ></input>
            Horror<input type='radio' value="Horror" {...register("genre")} ></input>
            Thriller<input type='radio' value="Thriller" {...register("genre")} ></input>
         </div>
         <div>
            <label>Cast :</label>
            <input type="file" {...register("poster")} />
         </div>
         <div>
            <input type="submit"/>
         </div>

         {
         isSubmited == true && <div>
               <h1>Output : </h1>
               <h2>MovieName : {userdata.name}</h2>
               <h2>Year : {userdata.year}</h2>
               <h2>Director : {userdata.director}</h2>
               <h2>Genre : {userdata.genre}</h2>
               <h2>Poster : <img src={userdata.poster} alt="POSTER IMAGE"/></h2>
            </div>
      }
      </form>
    </div>
  )
}
