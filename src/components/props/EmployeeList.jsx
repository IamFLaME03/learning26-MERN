import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const EmployeeList = (props) => {
  console.log("EmpList props : ", props);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EmployeeList</h1>
      {props.title || "Title Not Found"}

      {/* <h4>{props.company}</h4>  // throw error*/}
      <h4>{props.company.name}</h4>
      <h4>{props.company.year}</h4>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubEmployeeList
        title={props.title}
        company={props.company}
        employees={props.employees}
      ></SubEmployeeList>
    </div>
  );
};
