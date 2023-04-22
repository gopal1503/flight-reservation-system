import React, { useEffect, useState } from "react";
import { API } from "../service/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./File.css";

function ScheduleList() {
  const [schedules, setSchedule] = useState([]);
  useEffect(() => {
    API.getSchedules().then((res) => setSchedule(res));
  }, []);
  console.log(schedules);
  const deleteSchedule = (id) => {
    let scheduleID = window.confirm(`do you want to delete${id}`);
    if (scheduleID) {
      API.deleteSchedule(id).then((res) =>
        setSchedule(schedules.filter((data) => data.scheduleID !== id))
      );
    } else {
      return;
    }
  };

  return (
    <div>
      <table className="table table-bordered" id="css">
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Available Days</th>
            <th>Departure Time</th>
            <th>Travel Duration</th>
            <th>Flight ID</th>
            <th>Route ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((sch) => {
            return (
              <tr key={sch.scheduleID}>
                <td>{sch.scheduleID}</td>
                <td>{sch.availableDays}</td>
                <td>{sch.departureTime}</td>
                <td>{sch.travelDuration}</td>
                <td>{sch.flightBean.flightID}</td>
                <td>{sch.routeBean.routeID}</td>
                <td>
                  <Link to={`/editSchedule/${sch.scheduleID}`}>Edit</Link>
                </td>
                <td>
                  <button className="btn btn-danger"
                    onClick={() => {
                      deleteSchedule(sch.scheduleID);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;
