import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

function App() {
  //state token vars
  const [token, setToken] = useState("");
  //pass token to components, call functions, display on page
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
