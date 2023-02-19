import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";






function Header() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/welcome" && (
        <>
          <Link to="/login">
            <button>log in</button>
          </Link>

        
        </>
      )}

     
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
