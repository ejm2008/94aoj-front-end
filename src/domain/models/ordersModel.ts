export type OrdersModel = {
    orderNumber: string;
    createdAt: string;
    message: string;
    details: object;
};

export interface OrderContext {
    title: string,
    value: number,
}

export type OrdersParams = {
    items: OrderContext[];
    paymentOption: string;
};