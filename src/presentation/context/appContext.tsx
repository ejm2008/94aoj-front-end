import React, { createContext, useContext, useState } from "react";
import { OrdersParams } from "../../domain";

interface AppContextValues {
    cart: OrdersParams;
    items: OrderContext[];
    AddOrder: (v: OrderContext) => void;
    RemoveOrder: (v: OrderContext) => void;
}

export interface OrderContext {
    title: string,
    value: number,
}

const AppContext = createContext<AppContextValues>({} as AppContextValues)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<OrdersParams>({} as OrdersParams)
    const [items, setItems] = useState<OrderContext[]>([])

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