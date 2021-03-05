import * as React from "react";
import { IBasket } from "../../store/types/IBasket";
import { IDiscount } from "../../store/types/IDiscount";
import { IProduct } from "../../store/types/IProduct";
import ProductList from "../products/ProductList";
import BasketItems from "../basket/BasketItems";

type IShoppingCartProps = {
  basket: IBasket,
  discounts: IDiscount[]
  products: IProduct[],
  onAddProduct: (productCode: string) => void;
  onRemoveProduct: (productCode: string) => void;
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const {products, basket, onAddProduct, onRemoveProduct } = props;

  return <div>
    <ProductList products={products} onAddProduct={onAddProduct}/>
    <BasketItems basketProducts={basket.items} products={products} onRemoveProduct={onRemoveProduct}/>
    </div>
}

export default ShoppingCart;