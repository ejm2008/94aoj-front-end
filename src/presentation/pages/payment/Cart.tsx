import React, { useEffect, useState } from "react";
import { Card, CardContent, CardActions, Typography, Button, IconButton } from "@mui/material";
import { Trash2 } from "lucide-react";
import { OrderContext, Orders, Payment, PaymentModel } from "../../../domain";
import { useApp } from "../../context/appContext";

interface CartProps {
  paymentOptions: Payment;
  createOrder: Orders
}

function ShoppingCart({paymentOptions, createOrder}: CartProps) {

  const {items, RemoveOrder, setModo, modo} = useApp()
  const [pagamentos, setPagamentos] = useState<PaymentModel[]>();

  useEffect(() => {
    const getPaymentOptions = async() => {
      const pays = await paymentOptions.pay();
      console.log(pays)
      setPagamentos(pays)
    }  
    getPaymentOptions()
  }, [])


  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.value , 0).toFixed(2);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Carrinho
        </Typography>

        {items.length === 0 ? (
          <Typography color="textSecondary">Seu carrinho está vazio</Typography>
        ) : (
          items.map((item: OrderContext, idx: number) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #ddd" }}>
              <div>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  R$ {item.value.toFixed(2)}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                
                <IconButton color="error" onClick={() => RemoveOrder(item)}>
                  <Trash2 />
                </IconButton>
              </div>
            </div>
          ))
        )}

        {items.length > 0 && (
          <Typography variant="h6" sx={{ mt: 2, textAlign: "right" }}>
            Total: ${calculateTotal()}
          </Typography>
        )}
      </CardContent>
      <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 20}}>
        {pagamentos?.map((val) => (
          <Button 
            sx={{ border: 1, marginRight: 5}}
            onClick={() => setModo(val.text)}
            disabled={val.text === modo}
          >
            {`${val.text}`}
          </Button>
        ))}
      </div>
      <CardActions>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          disabled={items.length === 0 || modo === ''}
          onClick={async () => {
            try {
              await createOrder.order({items, paymentOption: modo})
              alert("Pedido realizado!");
            } catch {
              alert("Erro no pedido!");
            }
          }}
        >
          Fazer pedido
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShoppingCart;
