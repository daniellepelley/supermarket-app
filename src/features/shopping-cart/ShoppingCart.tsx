import * as React from "react";
import { IBasket } from "../../store/types/IBasket";
import { IProduct } from "../../store/types/IProduct";
import ProductList from "../products/ProductList";
import BasketItems from "../basket/BasketItems";
import SubTotal from "../basket/SubTotal";
import Discounts from "../discounts/Discounts";
import { IAppliedDiscount } from "../../store/types/IAppliedDiscount";

type IShoppingCartProps = {
  basket: IBasket,
  products: IProduct[],
  onAddProduct: (productCode: string) => void;
  onRemoveProduct: (productCode: string) => void;
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const { products, basket, onAddProduct, onRemoveProduct } = props;

  return <div>
    <ProductList products={products} onAddProduct={onAddProduct} />
    <BasketItems basketProducts={basket.items} products={products} onRemoveProduct={onRemoveProduct} />
    <SubTotal basketProducts={basket.items} products={products} />
    <Discounts discounts={basket.discounts} />
  </div>
}

export default ShoppingCart;