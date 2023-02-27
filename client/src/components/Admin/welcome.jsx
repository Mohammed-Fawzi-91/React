/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "./Welcome.css";
import { withRouter } from 'react-router-dom';

const path = "https://tess-app.onrender.com";




const getData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(`${path}/api/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>year</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.year}</td>
            <td>
              <a href={`${path}/api/download/${item._id}`}>Download</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};






const Welcome = ({ history }) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [year, setYear] = useState();

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if(!file || !year){
      setData("missing the file or the year ")
    }else {
       
    
    const formData = new FormData();
    formData.append("file", file);
     formData.append("year", year);
     console.log(formData)
     axios
     .post(`${path}/api/add`, formData)
     .then((res) => {
       setData(res.data);
       setTimeout(() => {
         history.push('/welcome'); // navigate to the welcome page
       }, 2000);
     })
     .catch((err) => console.log(err));
 };

      
  };

  return (
    <div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <h3>Upload a file</h3>
        <div className="form-group">
          <label htmlFor="fileInput">Select a file:</label>
          <input
            type="file"
            className="form-control-file"
            id="fileInput"
            onChange={handleFileUpload}
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearInput">Enter the year:</label>
          <input
            type="number"
            className="form-control"
            id="yearInput"
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
        <p className="text-danger">{data}</p>
      </form>

      <div className="table-container">{getData()}</div>
    </div>
  );
};

export default withRouter(Welcome);



