import { IState } from "../types/IState";
import init from "./generator";
import { AnyAction } from "redux";
import Action from "../actions";
import { IBasketItem } from "../types/IBasketItem";

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
      return items.filter((item) =>
        item.productCode !== productCode
      );
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

export default (state: IState = init(), anyAction: AnyAction): IState => {
  const action = anyAction as Action;

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: {
          items: addItem(
            action.productCode,
            action.quantity,
            state.basket.items
          ),
        },
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: {
          items: removeItem(
            action.productCode,
            action.quantity,
            state.basket.items
          ),
        },
      };
    default:
      return state;
  }
};
