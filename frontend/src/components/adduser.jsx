import Axios from "axios";
import { useState } from "react";

function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ddser = () => {
    Axios.post("http://localhost:3500/api/signup", {
      name,
      email,
      password,
    }).then((response) => {
      alert("done");
    });
  };

  return (
    <div className="adduser">
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
        <button onClick={ddser}>add info</button>
      </div>
    </div>
  );
}

export default Adduser;
