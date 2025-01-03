export type OrdersModel = {
    orderNumber: string;
    createdAt: string;
    message: string;
    details: object;
};

export type OrdersParams = {
    items: [
        {
            title: string,
            value: number,
        }
    ];
    paymentOption: string;
};