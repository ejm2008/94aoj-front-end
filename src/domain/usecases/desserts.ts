import { DessertsModel } from "../models"

export namespace Desserts {
    export type Model = DessertsModel;
}

export interface Desserts {
    dessert(): Promise<Desserts.Model>
}