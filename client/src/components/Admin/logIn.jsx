import axios from "axios";
import { useState } from "react";
import "./logIn.css";
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


const path = "https://tess-app.onrender.com";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
const navigate = useHistory();

  const check = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${path}/api/login`, {
        email,
        password,
      });
      navigate.push('/welcome');

      

    } catch (error) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
   
  };

  return (
    <div className="form-container">
      <h2>Log In</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={check} disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default LogIn;
