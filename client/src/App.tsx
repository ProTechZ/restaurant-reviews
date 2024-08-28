import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

export const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

function App() {
  const [data, setData] = useState<string>('');
  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("http://localhost:3001/", {
          method: "GET",
          credentials: "include",
          headers,
        });

        const result = await response.text();

        setData(result)
      } catch (err) {
        console.error(err);
      }
    };

    callBackendAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
