import * as React from "react";
import { IBasket } from "../../store/types/IBasket";
import { IProduct } from "../../store/types/IProduct";
import ProductList from "../products/ProductList";
import BasketItems from "../basket/BasketItems";
import Discounts from "../discounts/Discounts";
import Total from "./Total";
import { mapTotalSavings, mapSubTotal, mapTotal } from "../../mappers/basketItemsMapper";

type IShoppingCartProps = {
  basket: IBasket,
  products: IProduct[],
  onAddProduct: (productCode: string) => void;
  onRemoveProduct: (productCode: string) => void;
}

const ShoppingCart = (props: IShoppingCartProps) => {
  const { products, basket, onAddProduct, onRemoveProduct } = props;

  const totals = {
    savings: mapTotalSavings(basket.discounts),
    subTotal: mapSubTotal(basket.items, products),
    total: mapTotal(basket.items, products, basket.discounts)
  }

  return <div>
    <ProductList products={products} onAddProduct={onAddProduct} />
    <BasketItems basketProducts={basket.items} products={products} onRemoveProduct={onRemoveProduct} />
    <Total value={totals.subTotal} />
    <Discounts discounts={basket.discounts} />
    <Total value={totals.savings} />
    <Total value={totals.total} />
  </div>
}

export default ShoppingCart;