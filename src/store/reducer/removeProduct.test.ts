import { IState } from "../types/IState";
import reducer from ".";
import init from "./generator";
import { removeProduct } from "../actionCreators";

test("remove a product from basket when there is 1 of that product", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: "FOO",
          quantity: 1,
        },
      ],
    },
  };

  const action = removeProduct("FOO", 1);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(0);
});

test("remove a product from basket when there are 2 of the same product", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: "FOO",
          quantity: 2,
        },
      ],
    },
  };

  const action = removeProduct("FOO", 1);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual("FOO");
  expect(newState.basket.items[0].quantity).toEqual(1);
});

test("remove a product from basket when there are several products", () => {
  const state: IState = {
    ...init(),
    basket: {
      items: [
        {
          productCode: "FOO",
          quantity: 2,
        },
        {
          productCode: "BAR",
          quantity: 1,
        },
      ],
    },
  };

  const action1 = removeProduct("FOO", 1);
  const action2 = removeProduct("BAR", 1);

  const state2 = reducer(state, action1);
  const newState = reducer(state2, action2);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual("FOO");
  expect(newState.basket.items[0].quantity).toEqual(1);
});
