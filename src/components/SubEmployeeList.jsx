import React from 'react'
import { TableComponent } from './TableComponent';

export const SubEmployeeList = (props) => {
   console.log("subemplist Props : ", props);
   var columns = ["id","name", "age", "gender", "Status"]
   var users = [
      {id:1, name:"raj", age:21, gender: "male", Status: "Active"},
      {id:2, name:"JAY", age:10, gender: "male", Status: "Inactive"},
      {id:3, name:"JIYA", age:23, gender: "female", Status: "Inactive"},
      {id:4, name:"raj", age:21, gender: "male", Status: "Active"},
   ]
  return (
    <div style={{textAlign: 'center'}}>

      <h1>SubEmployeeList</h1>

      <TableComponent columns={["id","name","age"]} data={props.employees}></TableComponent>
      <TableComponent columns={columns} data={users}></TableComponent>
    </div>
  )
}
