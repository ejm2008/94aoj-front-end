import { BeveragesModel } from "../models"

export namespace Beverages {
    export type Model = BeveragesModel;
}

export interface Beverages {
    beverage(): Promise<Beverages.Model>
}