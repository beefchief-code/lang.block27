import { useState } from "react";
const API = "https://fsa-jwt-practice.herokuapp.com/signup/";

export default function SignUpForm() {
  //state vars for user, password, error
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    //prevent refresh
    event.preventDefault();
    //api call
    try {
      //if (!response.ok) throw Error(reponse.statusText);  no longer needed? breaks code
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
    //console.log("hello");
  }
  //display form on page, listen for submit
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
