import { IBasket } from "./IBasket";
import { IDiscount } from "./IDiscount";
import { IProduct } from "./IProduct";

export interface IState {
    message: string;
    products: IProduct[];
    discounts: IDiscount[];
    basket: IBasket;
}