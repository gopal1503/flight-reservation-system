import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
  const [axdata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/1260d78b-a105-4107-87ab-ef5b4a6a970f")
      .then((response) => {
        setData(response.data.Employees);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(axdata);

  return (
    <div>
      <form>
        {axdata
          ? axdata.map((e) => {
              return (
                <>
                  <label>
                    User Id: <input type="text" value={e.userId} disabled />
                  </label>
                  <br />
                  <label>
                    Job Title Name:
                    <input type="text" value={e.jobTitleName} disabled />
                  </label>
                  <br />
                  <label>
                    First Name:
                    <input type="text" value={e.firstName} disabled />
                  </label>
                  <br />
                  <label>
                    Last Name: <input type="text" value={e.lastName} disabled />
                  </label>
                  <br />
                  <label>
                    Preferred Full Name:
                    <input type="text" value={e.preferredFullName} disabled />
                  </label>
                  <br />
                  <label>
                    Employee Code:
                    <input type="text" value={e.employeeCode} disabled />
                  </label>
                  <br />
                  <label>
                    Region: <input type="text" value={e.region} disabled />
                  </label>
                  <br />
                  <label>
                    Phone Number:
                    <input type="text" value={e.phoneNumber} disabled />
                  </label>
                  <br />
                  <label>
                    Email Address:
                    <input type="text" value={e.emailAddress} disabled />
                  </label>
                  <br />
                  <br />
                </>
              );
            })
          : "No data found"}
      </form>
    </div>
  );
}
