import Action from "../actions"

const addProduct = (productCode: string, quantity: number): Action =>
    ({ type: "ADD_PRODUCT", productCode, quantity})

export {
    addProduct
}