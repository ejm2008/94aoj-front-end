import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, TextField, Grid } from "@mui/material";

const CheckoutScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Pagamento realizado!");
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Dados do recebedor
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Endereço de entrega"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Dados de pagamento</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número do cartão"
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Data de validade"
                name="expiration"
                type="text"
                placeholder="MM/YY"
                value={formData.expiration}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                name="cvv"
                type="text"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <CardActions sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Concluir compra
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default CheckoutScreen;
