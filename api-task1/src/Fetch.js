import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // useEffect needed for fetch as a function is needed
    fetch("https://mocki.io/v1/1260d78b-a105-4107-87ab-ef5b4a6a970f")
      .then((response) => response.json())
      .then((res) => {
        setData(res.Employees);
      });
  }, []); // [] is for single rendering and no [] implies infinite loop

  console.log(data);

  return (
    <div>
      <table border="1px">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Job Title Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Preferred Full Name</th>
            <th>Employee Code</th>
            <th>Region</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((e) => {
                return (
                  <tr>
                    <td>{e.userId}</td>
                    <td>{e.jobTitleName}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.preferredFullName}</td>
                    <td>{e.employeeCode}</td>
                    <td>{e.region}</td>
                    <td>{e.phoneNumber}</td>
                    <td>{e.emailAddress}</td>
                  </tr>
                );
              })
            : "No data found"}
        </tbody>
      </table>
    </div>
  );
}
