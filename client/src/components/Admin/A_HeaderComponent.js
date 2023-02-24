import React from "react"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function A_Header (){
    return( 
<div> 
  <nav className="navbar navbar-dark bg-dark navbar-expand">
    <h2><a className="navbar-brand">LogiProto: Administrator</a></h2>
    <div>
      <ul className="navbar-nav mr-auto">

      <li className="nav-item">
          <h3><a className="nav-link" href="/logIn">Log In</a></h3>
        </li>

        <li className="nav-item">
          <h3><a className="nav-link" href="/welcome">Welcome</a></h3>
        </li>
      
        <li className="nav-item">
          <h3><a className="nav-link" href="/A_Inventar">Inventar</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/A_Bestillinger">Bestillinger</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/A_Tellelister">Tellelister</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/A_Dokumentasjon">Dokumentasjon</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/OmOss">Om Oss</a></h3>
        </li>
        
      </ul>
    </div>
</nav>

</div>
          
       
              
       


        )
}

export default A_Header;

/*
Gammel Kode

<a class="nav-link" Link to= '/A_inventar' onClick={() => { window.location.href = '/A_Inventar'}}>Inventar</a>
      
      
              <a class="nav-link" Link to= 'A_Bestillinger' onClick={() => { window.location.href = '/A_Bestillinger'}}>Bestillinger</a>
              <a class="nav-link" Link to= 'A_Tellelister' onClick={() => { window.location.href = '/A_Tellelister'}}>Tellelister</a>
              <a class="nav-link" Link to= 'A_Dokumentasjon' onClick={() => { window.location.href = '/A_Dokumentasjon'}}>Dokumentasjon</a>
              <a class="nav-link" Link to='/OmOss' onClick={() => { window.location.href = '/OmOss' }}>Om Oss</a>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <a class="navbar-brand">Logi: Håndterminal</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" style={{ display: "flex", justifyContent: "center" }}>

            <li class="nav-item active">
              <button>
                <a class="nav-link" Link to= '/A_inventar' onClick={() => { window.location.href = '/A_Inventar'}}>Inventar</a>
              </button>
            </li>

            <li class="nav-item">
              <button>
              <a class="nav-link" Link to= 'A_Bestillinger' onClick={() => { window.location.href = '/A_Bestillinger'}}>Bestillinger</a>
              </button>
            </li>

            <li class="nav-item">
              <button>
              <a class="nav-link" Link to= 'A_Tellelister' onClick={() => { window.location.href = '/A_Tellelister'}}>Tellelister</a>
              </button>
            </li>

            <li class="nav-item">
              <button>
                <a class="nav-link" Link to= 'A_Dokumentasjon' onClick={() => { window.location.href = '/A_Dokumentasjon'}}>Dokumentasjon</a>
              </button>
            </li>

            <li class="nav-item">
              <button>
                <a class="nav-link" Link to='/OmOss' onClick={() => { window.location.href = '/OmOss' }}>Om Oss</a>
              </button>
            </li>


          </ul>

        </div>
      </nav>











Inventar
Bestillinger
Tellelister
Dokumentasjon
Brukere
OmOss
*/

/*
<a class="nav-link" Link to='B_Bestill' onClick={() => { window.location.href = '/B_Bestill' }}>Bestill</a>

<a class="nav-link" Link to= 'A_inventar' onClick={() => { window.location.href = '/A_Inventar'}}>Inventar</a>
<a class="nav-link" Link to= 'A_Bestillinger' onClick={() => { window.location.href = '/A_Bestillinger'}}>Invetar</a>
<a class="nav-link" Link to= 'A_Tellelister' onClick={() => { window.location.href = '/A_Tellelister'}}>Invetar</a>
<a class="nav-link" Link to= 'A_Dokumentasjon' onClick={() => { window.location.href = '/A_Dokumentasjon'}}>Invetar</a>
<a class="nav-link" Link to= 'OmOss' onClick={() => { window.location.href = '/OmOss'}}>Invetar</a>


<button class="button"><span><Link to='/A_Bestillinger'onClick={() => {window.location.href='/A_Bestillinger'}}>Aktive Bestillinger</Link></span></button>
            <button class="button"><span><Link to='/A_Tellelister'onClick={() => {window.location.href='/A_Tellelister'}}>Tellelister</Link></span></button>
            <button class="button"><span><Link to='/A_Dokumentasjon'onClick={() => {window.location.href='/A_Dokumentasjon'}}>Dokumentasjon</Link></span></button>
            <button class="button"><span><Link to='/OmOss'onClick={() => {window.location.href='/OmOss'}}>Om Oss</Link></span></button>
        </div>
*/