import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import imagem from "../../../assets/imagem-login.png";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  authentication: {
    auth: (params: { login: string; password: string }) => Promise<any>;
  };
  currentAccount: {
    set: (account: any) => void;
  };
  validation: {
    validate: (field: string, value: string) => string;
  };
}

function Body({ authentication, currentAccount, validation }: LoginProps) {
  const styles = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [valid, setValid] = useState(true);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFieldError(validation.validate(name, value));
    setValid(!validation.validate(name, value));
  };

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const params = {
      login: email,
      password: password,
    };

    try {
      const response = await authentication.auth(params);
      currentAccount.set(response);
      alert("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao realizar o Login");
      console.error(error);
    }
  };

  return (
    <form onSubmit={login}>
      <Grid container>
        <Grid item sm={12} md={6}>
          <Box component="img" src={imagem} sx={styles.imagem} />
        </Grid>
        <Grid item sm={12} md={6} sx={styles.centralizar}>
          <Grid sx={styles.h1} item md={12}>
            <Typography sx={styles.typography} variant="h5">
              Seja bem-vindo
            </Typography>
          </Grid>
          <Grid item md={12}>
            <TextField
              sx={styles.TextField}
              label="Email"
              id="email"
              name="email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                changeValue(e);
              }}
              error={!!fieldError}
              helperText={fieldError}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              sx={styles.TextField}
              label="Senha"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                changeValue(e);
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <Button
              sx={styles.botao}
              type="submit"
              size="large"
              variant="contained"
              disabled={!valid}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default Body;
