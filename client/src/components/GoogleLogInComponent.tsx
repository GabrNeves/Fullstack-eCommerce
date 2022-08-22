import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleLogInComponent() {
  const googleResponseFunction = async (response: any) => {
    console.log(response, "response");

    await axios.post("http://localhost:9590/users/google-authenticate", {
      id_token: response.credential,
    });
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={googleResponseFunction}
        onError={() => {
          console.log("Login failed");
        }}
      />
    </div>
  );
}
