import React, { useEffect, useState } from "react";
import { API } from "../service/Service";
import { Link } from "react-router-dom";
import "./File.css";

function RouteList() {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    API.getRoute().then((res) => setRoute(res));
  }, []);
  console.log(route);

  const deleteRoute = (id) => {
    let routeID = window.confirm(`do you want to delete${id}`);
    if (routeID) {
      API.deleRoute(id).then((res) =>
        setRoute(route.filter((item) => item.routeID !== id))
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
            <th>Route ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Fare</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {route.map((rou) => {
            return (
              <tr key={rou.routeID}>
                <td>{rou.routeID}</td>
                <td>{rou.source}</td>
                <td>{rou.destination}</td>
                <td>{rou.distance}</td>
                <td>{rou.fare}</td>
                <td>
                  <Link to={`/editRoute/${rou.routeID}`}>EDIT</Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteRoute(rou.routeID);
                    }}
                  >
                    DELETE
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

export default RouteList;
