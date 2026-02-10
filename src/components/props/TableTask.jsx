import React from 'react'
import { TableComponent } from '../TableComponent'
import { SubTableTask } from './SubTableTask'

export const TableTask = () => {

   var table1_columns = ["id","name", "age", "gender", "Status"]
   var users = [
      {id:1, name:"raj", age:21, gender: "male", Status: "Active"},
      {id:2, name:"JAY", age:10, gender: "male", Status: "Inactive"},
      {id:3, name:"JIYA", age:23, gender: "female", Status: "Inactive"},
      {id:4, name:"raj", age:21, gender: "male", Status: "Active"},
   ]

   var table2_columns = ["id", "name", "pop", "AQI"]
   var cities = [
      {id:1, name:"ahemdabad", pop: 8000000, AQI: 302},
      {id:2, name:"delhi", pop: 10000000, AQI: 422},
      {id:3, name:"dehradun", pop: 3000000, AQI: 152}
   ]

  return (
    <div style={{textAlign: 'center'}}>
      <h1>TableTask</h1>
      <TableComponent columns={table1_columns} data={users}></TableComponent>

      <SubTableTask columns={table2_columns} data={cities}></SubTableTask>


    </div>
  )
}
