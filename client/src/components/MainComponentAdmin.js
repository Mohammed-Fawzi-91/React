//Import IF == Admin Else Import Bruker?
import React from 'react'

//ADMIN SIDER
import A_Bestillinger from './Admin/A_BestillingerComponent';
import A_Brukere from './Admin/A_BrukereComponent';
import A_Dokumentasjon from './Admin/A_DokumentasjonComponent';
import A_Header from './Admin/A_HeaderComponent';
import A_Inventar from './Admin/A_InventarComponent';
import A_Tellelister from './Admin/A_TellelisterComponent';
import LogIn from './Admin/logIn';
import Welcome from './Admin/welcome';

//GENERISKE SIDER
import Footer from './FooterComponent';
import OmOss from './OmOssComponent';

import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';

//TODO: Opprette en variabel for å tilknytte brukerID, deretter skiftes ruting til enten B_ eller A_ Header
//Også en mulighet å lage 2 main funksjoner her og sette spørringen i App.js
//TODO: Variabel tilknyttet Redirect
function MainAdmin (){
        return(
            <React.Fragment>
        <A_Header/> 
        <BrowserRouter>
        <Switch>
        <Route path='/logIn' component={LogIn}/>
        <Route path='/welcome' component={Welcome}/>

        <Route path='/A_Inventar' component={A_Inventar}/>
            <Route path='/A_Bestillinger' component={A_Bestillinger}/>
            <Route path='/A_Tellelister' component={A_Tellelister}/>
            <Route path='/A_Dokumentasjon' component={A_Dokumentasjon}/>
            <Route path='/A_Brukere' component={A_Brukere}/>
            <Route path='/OmOss' component={OmOss}/>

        </Switch>
        </BrowserRouter>
        <hr/>       
        <Footer/>
            </React.Fragment>
        )
}

export default MainAdmin;

/*
Inventar
Bestillinger
Tellelister
Dokumentasjon
Brukere
OmOss
*/