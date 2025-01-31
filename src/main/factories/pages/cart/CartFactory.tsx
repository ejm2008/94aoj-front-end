import React from 'react';
import Cart from '../../../../presentation/pages/payment/Cart';
import { MakePayment } from '../../usecases/PaymentFactory';
import { MakeOrders } from '../../usecases/OrdersFactory';

export default function CartFactory() {
    return (
            <Cart 
                paymentOptions={MakePayment()}
                createOrder={MakeOrders()}
                />
    )
}