import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendTheData = async () => {
    try {
      await Axios.post("http://localhost:3500/api/signup", {
        name,
        email,
        password,
      })
        .catch((err) => {
          return err;
        })
        .then(() => history("/login"));
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="adduser">
      <div>
        <h1>sign up</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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
        <button onClick={sendTheData}>add info</button>
      </div>
    </div>
  );
}

export default SignUp;
