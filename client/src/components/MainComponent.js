//Import IF == Admin Else Import Bruker?
import React from 'react'


//BRUKER SIDER
import B_AktiveBestillinger from './Bruker/B_AktiveBestillingerComponent';
import B_Header from './Bruker/B_HeaderComponent';
import B_Tellelister from './Bruker/B_TellelisterComponent';
import B_Veiledninger from './Bruker/B_VeiledningerComponent';
import B_Bestill from './Bruker/B_BestillComponent'

//GENERISKE SIDER
import Footer from './FooterComponent';
import OmOss from './OmOssComponent';

import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';

//TODO: Opprette en variabel for å tilknytte brukerID, deretter skiftes ruting til enten B_ eller A_ Header
//Også en mulighet å lage 2 main funksjoner her og sette spørringen i App.js
//TODO: Variabel tilknyttet Redirect
function MainBruker (){
        return(
            <React.Fragment>
        <B_Header/> 
        <BrowserRouter>
        <Switch>
            <Route path='/B_Bestill' component={B_Bestill}/>
            <Route path='/B_AktiveBestillinger' component={B_AktiveBestillinger}/>
            <Route path='/B_Tellelister' component={B_Tellelister}/>
            <Route path='/B_Veiledninger' component={B_Veiledninger}/>
            <Route path='/OmOss' component={OmOss}/>

            <Redirect to="/B_Bestill"/> 
        </Switch>
        </BrowserRouter>
        <hr/>      
        <Footer/>
            </React.Fragment>
        )
}

export default withRouter(MainBruker);