import React, { useEffect, useState } from "react";
import { API } from "../service/Service";

function AddFlight() {
  const flightID = window.location.pathname.split("/")[2];

  // const [flightID1, setFlightID] = useState();
  const [flights, setFlights] = useState({});

  useEffect(() => {
    if (flightID) {
      API.getFlightById(flightID).then((res) => {
        setFlights({
          flightID: res.flightID,
          flightName: res.flightName,
          seatingCapacity: res.seatingCapacity,
          reservationCapacity: res.reservationCapacity,
        });
      });
    }
  }, [flightID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(flights));
    if (flightID) {
      API.updateFlight(flights).then((res) =>
        alert("Flight updated successfully")
      );
    } else {
      API.post(flights).then((res) => alert("Flight Added Successfully"));
    }
  };

  return (
    <div>
      <h1>ADD FLIGHT</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Flight Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Flight Name"
                defaultValue={flights.flightName}
                onChange={(e) =>
                  setFlights({ ...flights, flightName: e.target.value })
                }
              ></input>
            </div>
            <div className="form-group">
              <label>Flight Seating Capacity:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Seating Capacity"
                defaultValue={flights.seatingCapacity}
                onChange={(e) =>
                  setFlights({ ...flights, seatingCapacity: e.target.value })
                }
              ></input>
            </div>
            <div className="form-group">
              <label>Enter Reservation Capacity:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Reservation Capacity"
                defaultValue={flights.reservationCapacity}
                onChange={(e) =>
                  setFlights({
                    ...flights,
                    reservationCapacity: e.target.value,
                  })
                }
              ></input>
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Submit"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFlight;
