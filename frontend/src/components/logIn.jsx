import axios from "axios";
import { useState, useEffect } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
const path = "https://tess-app.onrender.com";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const check = async () => {
 
    console.log(email);
    console.log(password);

  
     await axios.post(`${path}/api/login`, {
        email,
        password,
      }).then(()=>{
        navigate("/welcome")
      }

      );
      console.log(1);

      

  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={check}> log in</button>
      </div>
    </div>
  );
}

export default LogIn;
