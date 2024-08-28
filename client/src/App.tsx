import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const callBackendAPI = async () => {
      console.log('hi')
      try {
        const response = await fetch("http://localhost:3001/", );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log(response)
        const body = await response.json();
        console.log(body)
        // setData(body.message);
      } catch (error ) {
        console.error((error as Error).message);
      }
    };
    callBackendAPI();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p style={{ color: "white" }}>{data}</p>
      </header>
    </div>
  );
}

export default App