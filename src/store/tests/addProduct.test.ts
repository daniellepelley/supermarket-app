import { IState } from "../types/IState";
import reducer from "../reducer";
import init from "../reducer/generator";
import { addProduct } from "../actionCreators";
import staticNames from "../staticNames";
import { applyActions } from "./storeTestHelpers";

test("add product to basket", () => {
  const state: IState = init();
  const action = addProduct(staticNames.FACE_MASK, 1);

  const newState = reducer(state, action);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual(staticNames.FACE_MASK);
  expect(newState.basket.items[0].quantity).toEqual(1);
});

test("add 2 of the same product to a basket", () => {
  const state: IState = init();
  const action = addProduct(staticNames.FACE_MASK, 1);

  const newState = applyActions(state, [action, action]);

  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual(staticNames.FACE_MASK);
  expect(newState.basket.items[0].quantity).toEqual(2);
});

test("add 2 different products to a basket", () => {
  const state: IState = init();
  const newState = applyActions(state, [
    addProduct(staticNames.FACE_MASK, 1),
    addProduct(staticNames.TOILET_ROLL, 1),
  ]);

  expect(newState.basket.items.length).toEqual(2);
  expect(newState.basket.items[0].productCode).toEqual(staticNames.FACE_MASK);
  expect(newState.basket.items[0].quantity).toEqual(1);
  expect(newState.basket.items[1].productCode).toEqual(staticNames.TOILET_ROLL);
  expect(newState.basket.items[1].quantity).toEqual(1);
});
