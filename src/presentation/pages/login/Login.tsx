import React from "react";
import { Box } from "@mui/material";
import Body from "./Body/Body";

function Login({ authentication, currentAccount, validation }: any) {
  return (
    <Box>
      <Body 
        authentication={authentication} 
        currentAccount={currentAccount} 
        validation={validation} 
      />
    </Box>
  );
}

export default Login;
