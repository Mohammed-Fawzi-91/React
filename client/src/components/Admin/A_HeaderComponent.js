import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function A_Header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <h2>
          <Link to="/" className="navbar-brand">
            LogiProto: Administrator
          </Link>
        </h2>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <h3>
                <Link to="/logIn" className="nav-link">
                  Log In
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/welcome" className="nav-link">
                  Welcome
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/A_Inventar" className="nav-link">
                  Inventar
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/A_Bestillinger" className="nav-link">
                  Bestillinger
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/A_Tellelister" className="nav-link">
                  Tellelister
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/A_Dokumentasjon" className="nav-link">
                  Dokumentasjon
                </Link>
              </h3>
            </li>
            <li className="nav-item">
              <h3>
                <Link to="/OmOss" className="nav-link">
                  Om Oss
                </Link>
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default A_Header;