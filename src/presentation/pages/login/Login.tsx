import React from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header";
import Body from "./Body/Body";

function Login({ authentication, currentAccount, validation }: any) {
  return (
    <Box>
      <Header />
      <Body 
        authentication={authentication} 
        currentAccount={currentAccount} 
        validation={validation} 
      />
    </Box>
  );
}

export default Login;
