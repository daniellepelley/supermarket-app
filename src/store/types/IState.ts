import { IBasket } from "./IBasket";
import { IDiscount } from "./IDiscount";
import { IProduct } from "./IProduct";

export interface IState {
    products: IProduct[];
    discounts: IDiscount[];
    basket: IBasket;
}