import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import LogIn from "./pages/LogIn";

function App() {
  // const fetchUser = () => {
  //   axios
  //     .get("http://localhost:9590/users")
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchUser()
  // },[])

  return (
    <div className="App">
      <LogIn/>
    </div>
  );
}

export default App;
