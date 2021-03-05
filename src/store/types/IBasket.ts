import { IBasketProduct } from "./IBasketProduct";
import { IAppliedDiscount } from "./IAppliedDiscount";

export interface IBasket {
    discounts: IAppliedDiscount[];
    items: IBasketProduct[];
}