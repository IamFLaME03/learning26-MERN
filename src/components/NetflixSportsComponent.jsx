import React from "react";
import { Link } from "react-router-dom";

export const NetflixSportsComponent = () => {
  var teams = [
    { teamId: 1, name: "CSK" },
    { teamId: 2, name: "MI" },
    { teamId: 3, name: "GT" },
    { teamId: 4, name: "RCB" },
    { teamId: 5, name: "KKR" },
    { teamId: 6, name: "RR" },
    { teamId: 7, name: "SRH" },
    { teamId: 8, name: "DC" },
    { teamId: 9, name: "PBKS" },
    { teamId: 10, name: "LSG" },
  ];
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Sports Component</h1>

      <table className="table table-warning">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => {
            return (
              <tr>
                <td>{team.teamId}</td>
                <td>
                  <Link to={`/teamdetails/${team.name}`}>{team.name}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
