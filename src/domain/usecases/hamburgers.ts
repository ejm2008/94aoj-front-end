import { HamburgersModel } from "../models"

export namespace Hamburgers {
    export type Model = HamburgersModel;
}

export interface Hamburgers {
    hamburger(): Promise<Hamburgers.Model>
}