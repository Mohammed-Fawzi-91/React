import React from "react"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function B_Header() {
  return (
    <div> 
  <nav className="navbar navbar-dark bg-dark navbar-expand">
    <h2><a className="navbar-brand">LogiProto: BrukerID\\Tentativ</a></h2>
    <div>
      <ul className="navbar-nav mr-auto">
      
        <li className="nav-item">
          <h3><a className="nav-link" href="/B_Bestill">Bestillinger</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="B_AktiveBestillinger">Aktive Bestillinger</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/B_Tellelister">Tellelister</a></h3>
        </li>

        <li className="nav-item">
        <h3><a className="nav-link" href="/B_Veiledninger">Veiledninger</a></h3>
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

export default B_Header;


/*
<a class="nav-link" Link to='B_Bestill' onClick={() => { window.location.href = '/B_Bestill' }}>Bestill</a>
  
                <a class="nav-link" Link to='/B_AktiveBestillinger' onClick={() => { window.location.href = '/B_AktiveBestillinger' }}>Aktive Bestillinger</a>

                <a class="nav-link" Link to='/B_Tellelister' onClick={() => { window.location.href = '/B_Tellelister' }}>Tellelister</a>
 
                <a class="nav-link" Link to='/B_Veiledninger' onClick={() => { window.location.href = '/B_Veiledninger' }}>Veiledninger</a>
       
                <a class="nav-link" Link to='/OmOss' onClick={() => { window.location.href = '/OmOss' }}>Om Oss</a>
              

TODO:
Kopier 1st Button sin stil over til resterende SAMT alle knapper i A_HeaderComp


Tellelister
Veiledning
OmOss
<Switch>
            <Route path='/B_Bestill' component={B_Bestill}/>
            <Route path='/OmOss' component={OmOss}/>
            <Redirect to="/B_Bestill"/> 
        </Switch>

        <Link to='/B_Bestill'onClick={() => {window.location.href='/B_Bestill'}}>Klikk for Bestill Side</Link>


        Gammel kode:
        <div>
        <div class="banner">
        <div class="user-button">
            <button type="button" class="btn btn-primary"><span>user:loc</span></button>
        </div>

        <div class="buttonSet">
        <button type="button" class="btn btn-primary" Link to='B_Bestill' onClick={() => {window.location.href='/B_Bestill'}}>Bestill</button>
        <button type="button" class="btn btn-primary" Link to='/B_AktiveBestillinger'onClick={() => {window.location.href='/B_AktiveBestillinger'}}>Aktive Bestillinger</button>
        <button type="button" class="btn btn-primary" Link to='/B_Tellelister'onClick={() => {window.location.href='/B_Tellelister'}}>Tellelister</button>
        <button type="button" class="btn btn-primary" Link to='/B_Veiledninger'onClick={() => {window.location.href='/B_Veiledninger'}}>Veiledninger</button>
        <button type="button" class="btn btn-primary" Link to='/OmOss'onClick={() => {window.location.href='/OmOss'}}>Om Oss</button>
        </div>
    </div>


    </div>
*/