import { IState } from "../types/IState";
import { AnyAction } from "redux";
import init from "./generator";

export default (state: IState = init(), action: AnyAction) => {
  switch (action.type) {
    case "BACK":
      return state;
    default:
      return state;
  }
};
