import { OrdersModel, OrdersParams } from "../models"

export namespace Orders {
  export type Params = OrdersParams
  export type Model = OrdersModel
}

export interface Orders {
  order(params: Orders.Params): Promise<Orders.Model>
}