import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {
  var title = "Emp List Title";
  var company = {
    name: "SMD",
    year: 2022,
  };
  var employees = [
    { id: 101, name: "parth", age: 23 },
    { id: 102, name: "Akshar", age: 21 },
    { id: 103, name: "Kirtan", age: 22 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee</h1>
      <EmployeeList
        title={title}
        company={company}
        employees={employees}
      ></EmployeeList>
    </div>
  );
};
