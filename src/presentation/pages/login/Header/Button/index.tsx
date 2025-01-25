import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

function Botao() {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleInicio = () => {
    navigate("/");
  };

  return (
    <Box sx={styles.margem}>
      <Button
        onClick={handleInicio}
        sx={styles.botao}
        size="medium"
        variant="contained"
      >
        Inicio
      </Button>
    </Box>
  );
}

export default Botao;