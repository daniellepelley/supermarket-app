import { IState } from "../types/IState";
import reducer from "../reducer";
import init from "../reducer/generator";
import { removeProduct } from "../actionCreators";
import staticNames from "../staticNames";
import { applyActions } from "./storeTestHelpers";

test("remove a product from basket when there is 1 of that product", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: staticNames.FACE_MASK,
          quantity: 1,
        },
      ],
      discounts: [],
    },
  };

  const action = removeProduct(staticNames.FACE_MASK, 1);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(0);
});

test("remove a product from basket when there are 2 of the same product", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: staticNames.FACE_MASK,
          quantity: 2,
        },
      ],
      discounts: [],
    },
  };

  const action = removeProduct(staticNames.FACE_MASK, 1);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual(staticNames.FACE_MASK);
  expect(newState.basket.items[0].quantity).toEqual(1);
});

test("remove a product from basket when there are several products", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: staticNames.FACE_MASK,
          quantity: 2,
        },
        {
          productCode: staticNames.TOILET_ROLL,
          quantity: 1,
        },
      ],
      discounts: [],
    },
  };

  const newState = applyActions(state, [
    removeProduct(staticNames.FACE_MASK, 1),
    removeProduct(staticNames.TOILET_ROLL, 1),
  ]);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual(staticNames.FACE_MASK);
  expect(newState.basket.items[0].quantity).toEqual(1);
});

test("remove a product with a unitTitle", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: staticNames.HAND_SANITIZER,
          quantity: 0.175,
        },
      ],
      discounts: [],
    },
  };

  const action = removeProduct(staticNames.HAND_SANITIZER, 0.175);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(0);
});