import * as React from "react";
import { IBasket } from "../../store/types/IBasket";
import { IProduct } from "../../store/types/IProduct";
import ProductList from "../products/ProductList";
import BasketItems from "../basket/BasketItems";
import Discounts from "../discounts/Discounts";
import Total from "./Total";
import { mapTotalSavings, mapSubTotal, mapTotal } from "../../mappers/basketItemsMapper";
import "./ShoppingCart.css";

type IShoppingCartProps = {
  basket: IBasket,
  products: IProduct[],
  onAddProduct: (productCode: string, quantity: number) => void;
  onRemoveProduct: (productCode: string, quantity: number) => void;
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
    <div className="receipt-panel">
    <BasketItems basketProducts={basket.items} products={products} onRemoveProduct={onRemoveProduct} />
    <span>-----</span>
    <Total title="Sub Total" value={totals.subTotal} />
    <Discounts discounts={basket.discounts} />
    <span>-----</span>
    <Total title="Total Savings" value={totals.savings * -1} />
    <span>---------------</span>
    <Total title="Total" value={totals.total} />
    </div>
  </div>
}

export default ShoppingCart;