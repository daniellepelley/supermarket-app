import { IState } from "../types/IState";
import init from "./generator";
import { AnyAction } from "redux";
import Action from "../actions";
import { IBasketItem } from "../types/IBasketItem";
import { IDiscount } from "../types/IDiscount";
import { IAppliedDiscount } from "../types/IAppliedDiscount";

const addItem = (
  productCode: string,
  quantity: number,
  items: IBasketItem[]
): IBasketItem[] => {
  const existingItem = items.filter(
    (item) => item.productCode === productCode
  )[0];
  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity + quantity,
    };
    return items.map((item) =>
      item.productCode === updatedItem.productCode ? updatedItem : item
    );
  }
  return [
    ...items,
    {
      productCode,
      quantity,
    },
  ];
};

const removeItem = (
  productCode: string,
  quantity: number,
  items: IBasketItem[]
): IBasketItem[] => {
  const existingItem = items.filter(
    (item) => item.productCode === productCode
  )[0];
  if (existingItem) {
    if (existingItem.quantity === 1) {
      return items.filter((item) => item.productCode !== productCode);
    }

    const updatedItem = {
      ...existingItem,
      quantity: existingItem.quantity - quantity,
    };
    return items.map((item) =>
      item.productCode === updatedItem.productCode ? updatedItem : item
    );
  }
  return [...items];
};

const calculateDiscounts = (items: IBasketItem[], discounts: IDiscount[]) : IAppliedDiscount[] => {
    return discounts.map(discount => {
        const products = items.filter(item => item.productCode === discount.productCode)[0];

        if (!products) {
            return null;
        }

        const numberOfDiscounts = Math.floor(products.quantity / discount.threshold);
        
        if (numberOfDiscounts === 0) {
            return null; 
        }        

        return {
            title: discount.title,
            discount: numberOfDiscounts * discount.discount
        }
    })
    .filter(x => x) as IAppliedDiscount[]
}

const modifyItems = (state: IState, items: IBasketItem[]) => {
      return {
        ...state,
        basket: {
          items,
          discounts: calculateDiscounts(items, state.discounts),
        },
      };
}

export default (state: IState = init(), anyAction: AnyAction): IState => {
  const action = anyAction as Action;

  switch (action.type) {
    case "ADD_PRODUCT":
      return modifyItems(state, addItem(
        action.productCode,
        action.quantity,
        state.basket.items
      ));
    case "REMOVE_PRODUCT":
        return modifyItems(state, removeItem(
            action.productCode,
            action.quantity,
            state.basket.items
          ));
    default:
      return state;
  }
};
