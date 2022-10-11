import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import LogIn from "./pages/LogIn";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
      {/* <LogIn/> */}
      <NavBar/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
