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
  const history = useNavigate();


  const check = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${path}/api/login`, {
        email,
        password,
      });

      const theDataCoin = res.data.theCode;
      //console.log(theDataCoin);
      if (!theDataCoin) {
        throw new Error("Login failed");
      }

      localStorage.setItem("token", theDataCoin);
      history("/welcome");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={check}>add info</button>
      </div>
    </div>
  );
}

export default LogIn;

/*
    export default App;
    const [listOfUsers,setListOfUsers] = useState([]);
    useEffect(()=>{
    Axios.get("http://localhost:3500/getUser").then((response)=>{
        setListOfUsers(response.data);
        console.log(response)

    });


    },[]);


    return (
    <div className="App">
    <div className='user'>
        {listOfUsers.map((user)=>{
            return(
                <div>

                    <h1>Name: {user.name}</h1>
                    </div>

            );


        })};
    </div>
    </div>
    );








        <div className="App">
      <div className="user">
        <table className="table">
          <tr>
            <th>id</th>
            <th>email</th>
            <th>passord</th>
          </tr>
          {listOfUsers.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                {console.log("this is email:" + user.email)}
              </tr>
            );
          })}
          ;
        </table>
      </div>
    </div>




      useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      return console.log("wrong here");
    }

    axios
      .get("http://localhost:3500/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListOfUsers(res.data);
        console.log("User retrieved successfully");
      })
      .catch((err) => {
        console.error("Error retrieving user:", err.message);
      });
  }, []);
    */
