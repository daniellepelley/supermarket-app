import { IState } from '../types/IState';
import reducer from '../reducer';
import Action from '../actions';

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
