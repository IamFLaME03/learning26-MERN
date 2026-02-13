import React, { useState } from 'react'

export const InputDemo2 = () => {
   const [name, setname] = useState("")
   const [gender, setgender] = useState("")
   const [country, setcountry] = useState("")
   const [state, setState] = useState("");
   const [isSubmited, setisSubmited] = useState(false)

   const statesData = {
      india: ["Gujarat", "Maharashtra", "Rajasthan", "Punjab"],
      usa: ["California", "Texas", "Florida", "New York"],
      china: ["Beijing", "Shanghai", "Guangdong"]
   }

   const nameHandler = (event) => {
      setname(event.target.value)

   }
   const genderHandler = (event) => {
      setgender(event.target.value)
   }
   const handleSubmit = () => {
      setisSubmited(true)
   }
   return (
      <div style={{ textAlign: "center" }}>
         <h1>InputDemo2</h1>
         <div>
            <label>NAME:</label>
            <input type='text' onChange={(event) => { nameHandler(event) }} ></input>

         </div>
         <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' value="male" name='gender' onChange={(event) => { genderHandler(event) }}></input>
            <br></br>
            FEMALE : <input type='radio' value="female" name='gender' onChange={(event) => { genderHandler(event) }}></input>


         </div>
         <div>
            <label>COUNTRY</label>
            <select onChange={(event) => { setcountry(event.target.value); setState("") }}>
               <option value="india">INDIA</option>
               <option value="usa">USA</option>
               <option value="china">CHINA</option>
            </select>
         </div>
         {
            country && (
               <div>
                  <label>State</label>
                  <select onChange={(e) => setState(e.target.value)}>
                     <option value="">Select State</option>
                     {
                        statesData[country].map((st) => {
                           return <option key={st} value={st}>{st}</option>
                        })
                     }
                  </select>
               </div>
            )
         }

         <button onClick={handleSubmit}> Submit </button>


         {
            isSubmited == true && <div>Output :

               {name && <h1>Name :{name}</h1>}
               {gender && <h1>Gender : {gender}</h1>}
               {country && <h1>Country :{country}</h1>}
               {state && <h1>State: {state}</h1>}
            </div>
         }


      </div>
   )
}