import { IState } from '../types/IState';
import reducer from './';
import init from './generator';
import { addProduct } from "../actionCreators"

test('add product to basket', () => {
  const state: IState = init();
  const action = addProduct("FOO", 1);

  const newState = reducer(state, action);
  
  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual("FOO");
  expect(newState.basket.items[0].quantity).toEqual(1);
});

test('add 2 of the same product to a basket', () => {
  const state: IState = init();
  const action = addProduct("FOO", 1);

  const state2 = reducer(state, action);
  const newState = reducer(state2, action);
  
  expect(newState.basket.items.length).toEqual(1);
  expect(newState.basket.items[0].productCode).toEqual("FOO");
  expect(newState.basket.items[0].quantity).toEqual(2);
});

test('add 2 different products to a basket', () => {
  const state: IState = init();
  const action1 = addProduct("FOO", 1);
  const action2 = addProduct("BAR", 1);

  const state2 = reducer(state, action1);
  const newState = reducer(state2, action2);
  
  expect(newState.basket.items.length).toEqual(2);
  expect(newState.basket.items[0].productCode).toEqual("FOO");
  expect(newState.basket.items[0].quantity).toEqual(1);
  expect(newState.basket.items[1].productCode).toEqual("BAR");
  expect(newState.basket.items[1].quantity).toEqual(1);
});