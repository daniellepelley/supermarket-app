import { AnyAction } from "redux";

export interface IAddProductAction extends AnyAction {
    type: "ADD_PRODUCT",
    productCode: string
}

type Action = IAddProductAction

export default Action;