import { IBasketItem } from "./IBasketItem";
import { IAppliedDiscount } from "./IAppliedDiscount";

export interface IBasket {
    discounts: IAppliedDiscount[];
    items: IBasketItem[];
}