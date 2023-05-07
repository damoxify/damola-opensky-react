import React, { useState, useEffect } from "react";

function API() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

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

  //Post Method
  // const apiPost = async () => {
  //   await fetch("https://opensky-network.org/api", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: inputs.title,
  //       body: inputs.body,
  //       userId: parseInt(inputs.userId),
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  // const handleChange = (event) => {
  //   event.persist();
  //   setInputs((inputs) => ({
  //     ...inputs,

  //     [event.target.name]: event.target.value,
  //   }));
  // };

  

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