import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

const API = "https://fsa-jwt-practice.herokuapp.com/signup/";

function App() {
  //state token vars
  const [token, setToken] = useState("");
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
