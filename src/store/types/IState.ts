import { IBasket } from "./IBasket";
import { IProduct } from "./IProduct";

export interface IState {
    message: string;
    products: IProduct[];
    basket: IBasket;
}