import React from "react";
import { Box } from "@mui/material";
import Header from "./Header/index";
import Body from "./Body/index";

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
