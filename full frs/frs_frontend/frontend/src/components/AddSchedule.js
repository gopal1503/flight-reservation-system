import React, { useEffect, useState } from "react";
import { API } from "../service/Service";
import "bootstrap/dist/css/bootstrap.min.css";

function AddSchedule() {
  const scheduleID = window.location.pathname.split("/")[2];
  console.log(scheduleID);
  const [flight, setFlight] = useState([]);
  const [flightID, setFlightID] = useState();
  const [route, seRoute] = useState([]);
  const [routeID, seRouteID] = useState();
  // const [scheduleID, setScheduleID] = useState();
  const [schedule, setSchedule] = useState({
    scheduleID: 0,
    availableDays: "",
    departureTime: "",
    travelDuration: 0,
    // flightBean: {
    //   flightID: 0,
    //   flightName: "",
    //   seatingCapacity: 0,
    //   reservationCapacity: 0,
    // },
    // routeBean: {
    //   routeID: 0,
    //   source: "",
    //   destination: "",
    //   distance: 0,
    //   fare: 0.0,
    // },
  });
  useEffect(() => {
    API.get().then((res) => setFlight(res));
  }, []);

  useEffect(() => {
    API.getRoute().then((res) => seRoute(res));
  }, []);

  console.log(route);
  useEffect(() => {
    if (flightID) {
      API.getFlightById(flightID).then((res) =>
        setSchedule({
          ...schedule,
          flightBean: {
            flightID: res.flightID,
            flightName: res.flightName,
            seatingCapacity: res.seatingCapacity,
            reservationCapacity: res.reservationCapacity,
          },
        })
      );
    }
  }, [flightID]);
  // console.log(flightID);
  useEffect(() => {
    if (scheduleID) {
      API.scheduleById(scheduleID).then((res) => {
        console.log(schedule);
      });
    }
  }, [scheduleID]);

  //   setSchedule({
  //     scheduleID: res.scheduleID,
  //     availableDays: res.availableDays,
  //     departureTime: res.departureTime,
  //     travelDuration: res.travelDuration,
  //     flightBean: {
  //       flightID: res.flightBean.flightID,
  //       flightName: res.flightBean.flightName,
  //       seatingCapacity: res.flightBean.seatingCapacity,
  //       reservationCapacity: res.flightBean.reservationCapacity,
  //     },
  //     routeBean: {
  //       routeID: res.routeBean.routeID,
  //       source: res.routeBean.source,
  //       destination: res.routeBean.destination,
  //       distance: res.routeBean.distance,
  //       fare: res.routeBean.fare,
  //     },
  //  })
  //):

  // }, [scheduleID]);
  console.log(schedule);
  useEffect(() => {
    if (routeID) {
      API.getRouteById(routeID).then((res) =>
        setSchedule({
          ...schedule,
          routeBean: {
            routeID: res.routeID,
            source: res.source,
            destination: res.destination,
            distance: res.distance,
            fare: res.fare,
          },
        })
      );
    }
  }, [routeID]);
  // console.log(routeID);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schedule);
    console.log(JSON.stringify(schedule));
    if (scheduleID) {
      API.updateSchedule(scheduleID, schedule).then((res) =>
        alert("schedule updated successfully")
      );
      console.log(scheduleID);
    } else {
      API.postSchedule(schedule).then((res) =>
        alert("data submitted successfully")
      );
    }
  };

  const handleselect = (e) => {
    setFlightID(e.target.value);
  };
  const handleselect1 = (e) => {
    seRouteID(e.target.value);
  };
  return (
    <div>
      <h1>ADD SCHEDULE</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Available Days:</label>
              <input
                type="text"
                className="form-control"
                value={schedule.availableDays}
                onChange={(e) =>
                  setSchedule({ ...schedule, availableDays: e.target.value })
                }
              ></input>
            </div>
            <div className="form-group">
              <label>Departure Time:</label>
              <input
                type="text"
                className="form-control"
                value={schedule.departureTime}
                onChange={(e) =>
                  setSchedule({ ...schedule, departureTime: e.target.value })
                }
              ></input>
            </div>
            <div className="form-group">
              <label>Travel Duration:</label>
              <input
                type="text"
                className="form-control"
                value={schedule.travelDuration}
                onChange={(e) =>
                  setSchedule({ ...schedule, travelDuration: e.target.value })
                }
              ></input>
            </div>
            <div className="form-group">
              <label>Select Flight:</label>
              <select className="form-control" onChange={handleselect}>
                <option value={""}>--select flight--</option>
                {flight.map((sche) => {
                  return (
                    <option value={sche.flightID} key={flight.flightID}>
                      {sche.flightName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Select Route:</label>
              <select className="form-control" onChange={handleselect1}>
                <option>--select route--</option>
                {route.map((rout) => {
                  return (
                    <option value={rout.routeID}>
                      {rout.source}
                      <span>-</span>
                      {rout.destination}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSchedule;
