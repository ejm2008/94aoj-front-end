import { CategoriesModel } from "../models"

export namespace Categories {
    export type Model = CategoriesModel;
}

export interface Categories {
    category(): Promise<Categories.Model>
}