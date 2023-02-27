import React from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import A_Bestillinger from './Admin/A_BestillingerComponent';
import A_Brukere from './Admin/A_BrukereComponent';
import A_Dokumentasjon from './Admin/A_DokumentasjonComponent';
import A_Header from './Admin/A_HeaderComponent';
import A_Inventar from './Admin/A_InventarComponent';
import A_Tellelister from './Admin/A_TellelisterComponent';
import LogIn from './Admin/logIn';
import Welcome from './Admin/welcome';
import Footer from './FooterComponent';
import OmOss from './OmOssComponent';

function MainAdmin() {
    return (
      <React.Fragment>
        <A_Header />
        <Switch>
          <Route path='/logIn' component={LogIn} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/A_Inventar' component={A_Inventar} />
          <Route path='/A_Bestillinger' component={A_Bestillinger} />
          <Route path='/A_Tellelister' component={A_Tellelister} />
          <Route path='/A_Dokumentasjon' component={A_Dokumentasjon} />
          <Route path='/A_Brukere' component={A_Brukere} />
          <Route path='/OmOss' component={OmOss} />
          <Redirect to="/A_Inventar" />
        </Switch>
        <hr />
        <Footer />
      </React.Fragment>
    )
  }
  
export default withRouter(MainAdmin);
