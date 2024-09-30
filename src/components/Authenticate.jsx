import { useState } from "react";

const API_AUTH = "https://fsa-jwt-practice.herokuapp.com/authenticate";

export default function Authenticate({ token }) {
  //state vars for API response
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //fetch authorization token from API
  async function sendAuth() {
    try {
      const response = await fetch(API_AUTH, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setSuccess(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  //display authorization button
  //listen for click
  //display success/fail message
  return (
    <>
      <h2>Authenticate</h2>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <button onClick={sendAuth}>Click to Auth</button>
    </>
  );
}
