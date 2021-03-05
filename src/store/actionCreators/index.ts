import Action from "../actions"

const addProduct = (productCode: string, quantity: number): Action =>
    ({ type: "ADD_PRODUCT", productCode, quantity})

const removeProduct = (productCode: string, quantity: number): Action =>
    ({ type: "REMOVE_PRODUCT", productCode, quantity})

export {
    addProduct,
    removeProduct
}