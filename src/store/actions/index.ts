import { AnyAction } from "redux";

export interface IAddProductAction extends AnyAction {
    type: "ADD_PRODUCT",
    productCode: string
}

export interface IRemoveProductAction extends AnyAction {
    type: "REMOVE_PRODUCT",
    productCode: string
}

type Action =
    IAddProductAction |
    IRemoveProductAction

export default Action;