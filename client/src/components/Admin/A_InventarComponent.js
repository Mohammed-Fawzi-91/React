/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useState, useEffect } from 'react';


function A_Inventar() {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    axios.get('https://tess-app.onrender.com/api/v1/terminals')
      .then(response => {
        setTerminals(response.data.terminal);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Terminals</h1>
      <ul>
        {terminals.map(terminal => (
          <li key={terminal._id}>
            <h2>{terminal.id}</h2>
            <p>{terminal.available}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default A_Inventar;

/*
<ul>
        {terminals.map(terminal => (
          <li key={terminal._id}>
            <h2>{terminal.id}</h2>
            <p>{terminal.available}</p>
          </li>
        ))}
      </ul>
*/