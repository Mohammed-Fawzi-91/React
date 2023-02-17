/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
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






const Welcome = () => {
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
        setTimeout(()=>{
          window.location.reload();


        },2000)

      })
      .catch((err) => console.log(err));

      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <input type="number" onChange={(event) => {
            setYear(event.target.value)}} />
        <button type="submit">Upload</button>
        <p>{data}</p>
        <div>{getData()}</div>
       
      </form>


    
 
   
    </div>
  );
};
export default Welcome;



