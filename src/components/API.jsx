import React, { useState, useEffect } from "react";

function API() {
  const [data, setData] = useState([]);

  //Get Method
  const apiGet = () => {
    fetch("https://opensky-network.org/api/states/all")
      .then(response => {
        return response.json()
      })
      .then(json => {
        // console.log(json);
        setData(json);
      });
  };    



    useEffect(() => {
      apiGet();
    }, []);

  return (
    <div>
      My API <br />
      <button  onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.length > 0 && (
 
        <ul>
          {data.map(states => (
            <li key={states.id}>
              {states.time}
            </li>
          ))}
        </ul>  
        
      )}

      
    </div>
  );
}

export default API;