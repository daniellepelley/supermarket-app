import { IState } from '../types/IState';
import reducer from '../reducer';
import init from '../reducer/generator';
import { addProduct } from "../actionCreators"
import staticNames from "../staticNames";
import Action from '../actions';

test('add 1 product to basket, no discounts', () => {
  const state: IState = init();
  const action = addProduct(staticNames.FACE_MASK, 1);

  const newState = reducer(state, action);
  
  expect(newState.basket.discounts.length).toEqual(0);
});

const recApplyActions = (state: IState, actions: Action[]) : IState => {
  const nextAction = actions.shift();
  if (!nextAction) {
    return state;
  }

  const newState = reducer(state, nextAction);
  return recApplyActions(newState, actions)  
}

const applyActions = (state: IState, actions: Action[]) => {
  return recApplyActions(state, [...actions]);
}

export {
  applyActions
}
