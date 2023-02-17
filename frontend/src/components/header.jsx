import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="App">
      <Link to="/login">
        <button>log in </button>
      </Link>

      <Link to="/signup">
        <button>signup</button>
      </Link>

      <Link to="/welcome">
        <button>welcome</button>
      </Link>
    </div>
  );
}

export default Header;

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


  useEffect(() => {
    Axios.get("http://localhost:3500/getAdmin").then((response) => {
      setListOfUsers(response.data);
      console.log("this the res" + response.data);
    });
  }, []);



      const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3500/api/user").then((response) => {
      setListOfUsers(response.data);
      console.log("this the other" + response.data);
    });
  }, []);
    */
