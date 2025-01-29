import React, { useEffect, useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, IconButton, TextField } from "@mui/material";
import { Trash2 } from "lucide-react";
import { Payment, PaymentModel } from "../../../domain";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  paymentOptions: Payment
}

function ShoppingCart({paymentOptions}: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Classic Hamburger", price: 8.99, quantity: 2 },
    { id: 2, name: "Cheeseburger", price: 9.99, quantity: 1 },
    { id: 3, name: "Fries", price: 3.99, quantity: 3 },
  ]);

  const [pagamentos, setPagamentos] = useState<PaymentModel[]>();

  useEffect(() => {
    const getPaymentOptions = async() => {
      const pays = await paymentOptions.pay();
      console.log(pays)
      setPagamentos(pays)
    }  
    getPaymentOptions()
  })

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Carrinho
        </Typography>

        {cartItems.length === 0 ? (
          <Typography color="textSecondary">Seu carrinho está vazio</Typography>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #ddd" }}>
              <div>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  R$ {item.price.toFixed(2)}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  type="number"
                  size="small"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  inputProps={{ min: 1 }}
                  sx={{ width: 60, marginRight: 1 }}
                />
                <IconButton color="error" onClick={() => removeItem(item.id)}>
                  <Trash2 />
                </IconButton>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <Typography variant="h6" sx={{ mt: 2, textAlign: "right" }}>
            Total: ${calculateTotal()}
          </Typography>
        )}
      </CardContent>
      <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 20}}>
        {pagamentos?.map((val) => (
          <Button sx={{ border: 1, marginRight: 5}}>{`${val.text}`}</Button>
        ))}
      </div>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth disabled={cartItems.length === 0}>
          Prosseguir para o pagamento
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShoppingCart;
