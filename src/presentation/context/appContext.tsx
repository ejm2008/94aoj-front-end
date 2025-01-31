import React, { createContext, useContext, useState } from "react";
import { OrderContext, OrdersParams } from "../../domain";

interface AppContextValues {
    cart: OrdersParams;
    items: OrderContext[];
    AddOrder: (v: OrderContext) => void;
    RemoveOrder: (v: OrderContext) => void;
    modo: string;
    setModo:(v: string) => void;
}


const AppContext = createContext<AppContextValues>({} as AppContextValues)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<OrdersParams>({} as OrdersParams)
    const [items, setItems] = useState<OrderContext[]>([])
    const [modo, setModo] = useState<string>('')

    function AddOrder(order: OrderContext) {
        setItems(curr => Array.from(new Set([...curr, order])))
    }

    function RemoveOrder(order: OrderContext) {
        setItems(curr => curr.filter(ord => ord.title !== order.title))
    }

    return (
        <AppContext.Provider
            value={{
                cart, 
                items, 
                modo, 
                setModo,
                AddOrder, 
                RemoveOrder,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    const context = useContext(AppContext);
    return context;
}
