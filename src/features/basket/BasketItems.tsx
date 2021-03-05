import * as React from "react";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";
import BasketItem from "../basket/BasketItem";
import {map} from "./basketItemsMapper";

type IBasketItemsProps = {
  products: IProduct[],
  basketProducts: IBasketProduct[],
  onRemoveProduct: (productCode: string) => void;
}

const BasketItems = (props: IBasketItemsProps) => {
  const { products, basketProducts, onRemoveProduct } = props;

  const items = map(basketProducts, products);

  return <div>
    {items.map(item =>
      <BasketItem key={item.id} item={item} onRemove={() => onRemoveProduct(item.productCode)} />
    )}tem
  </div>
}

export default BasketItems;