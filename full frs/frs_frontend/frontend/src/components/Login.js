import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = details;
    if (username && password) {
      if (username === "AD001" && password === "AD001") {
        nav("/addflight");
      }
      if (username === "AD002" && password === "AD002") {
        nav("/getflights");
      }
      if (username === "AD003" && password === "AD003") {
        nav("/getflights");
      }
      if (username === "AD004" && password === "AD004") {
        nav("/getflights");
      }
      if (username === "AD005" && password === "AD005") {
        nav("/addRoute");
      }
      if (username === "AD006" && password === "AD006") {
        nav("/getRoute");
      }
      if (username === "AD007" && password === "AD007") {
        nav("/getRoute");
      }
      if (username === "AD008" && password === "AD008") {
        nav("/getRoute");
      }
      if (username === "AD009" && password === "AD009") {
        nav("/addSchedule");
      }
      if (username === "AD010" && password === "AD010") {
        nav("/viewSchedule");
      }
      if (username === "AD011" && password === "AD011") {
        nav("/viewSchedule");
      }
      if (username === "AD012" && password === "AD012") {
        nav("/viewSchedule");
      }
    } else {
      alert("error");
    }
  };

  return (
    <div><h1>SUNDARAM AIRWAYS</h1><br></br><br></br><br></br><br></br>
      <h2>Login</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User name:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={details.username}
                placeholder="username"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={details.password}
                placeholder="password"
                onChange={handleChange}
                required
              ></input>
            </div>
            <br></br>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
