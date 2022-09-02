import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import GoogleLogInComponent from "../components/GoogleLogInComponent";

export default function LogIn() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "52ch" },
        display: "flex",
        flexDirection: "column", alignItems: 'center', alignContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3">Login to continue buying</Typography>
      <TextField id="login-form-field" label="Email" variant="standard" sx={{maxWidth: '30ch'}}/>
      <TextField id="pass-form-field" label="Password" variant="standard" type='password' sx={{maxWidth: '30ch'}}/>
      <Typography variant="body2">Don't have an account yet? <a href="#">SignIn</a></Typography>
      <Divider>
        <Typography variant="body2">or</Typography>
      </Divider>
      <GoogleLogInComponent/>
      <img src='https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg' alt='' className="login-image"></img>
    </Box>
  );
}
