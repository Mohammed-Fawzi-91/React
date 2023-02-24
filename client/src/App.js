import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBruker from './components/MainComponent'
import MainAdmin from './components/MainComponentAdmin'
import { BrowserRouter } from 'react-router-dom';
import A_Brukere from './components/Admin/A_BrukereComponent';


//LEGG INN VALG: BRUKER ELLER ADMIN HER FOR PROTOTYPE, BYTTES MED IP FUNKSJON ETTERHVERT
//Dummy metode kan forbedres med å sjekke storage (Cookies) for å lagre valget
//var aksess;
//do{
//var aksess = prompt("1 for Brukere, 2 for admin");} while (aksess == "0");

function App() {
  //if (aksess == "1"){
  
  /*
  return (
    <div className="App">
      <BrowserRouter>
      <MainBruker/>
      </BrowserRouter>
    </div>
  );
  */
 //FJERN /* KOMMENTAR HER FOR Å LASTE INN BRUKERSIDE

  //}
//else{
  

  return (
    <div className="App">
      <BrowserRouter>
      <MainAdmin/>
      </BrowserRouter>
    </div>
  );
  
 //FJERN /* KOMMENTAR HER FOR Å LASTE INN ADMINSIDE

//}
}

export default App;
