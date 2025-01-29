import React from 'react';
import Cart from '../../../../presentation/pages/payment/Cart';
import { MakePayment } from '../../usecases/PaymentFactory';

export default function CartFactory() {
    return (
            <Cart paymentOptions={MakePayment()}/>
    )
}