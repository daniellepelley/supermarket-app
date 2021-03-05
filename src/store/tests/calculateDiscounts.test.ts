import { IState } from "../types/IState";
import reducer from "../reducer";
import init from "../reducer/generator";
import { addProduct } from "../actionCreators";
import staticNames from "../staticNames";
import { applyActions } from "./storeTestHelpers";

test("add 1 product to basket, no discounts", () => {
  const state: IState = init();
  const action = addProduct(staticNames.FACE_MASK, 1);

  const newState = reducer(state, action);

  expect(newState.basket.discounts.length).toEqual(0);
});

test("add 2 products to basket with a single discounts", () => {
  const state: IState = init();
  const action = addProduct(staticNames.FACE_MASK, 2);

  const newState = reducer(state, action);

  expect(newState.basket.discounts.length).toEqual(1);
  expect(newState.basket.discounts[0].discount).toEqual(1);
  expect(newState.basket.discounts[0].title).toEqual(state.discounts[0].title);
});

test("add multiple products to basket with several discounts", () => {
  const state: IState = init();

  const newState = applyActions(state, [
    addProduct(staticNames.FACE_MASK, 13),
    addProduct(staticNames.TOILET_ROLL, 15),
  ]);

  expect(newState.basket.discounts.length).toEqual(2);
  expect(newState.basket.discounts[0].discount).toEqual(6);
  expect(newState.basket.discounts[0].title).toEqual(state.discounts[0].title);
  expect(newState.basket.discounts[0].discount).toEqual(6);
  expect(newState.basket.discounts[1].title).toEqual(state.discounts[1].title);
  expect(newState.basket.discounts[1].discount).toEqual(1.3);
});
