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

