import * as React from "react";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";
import BasketItem from "../basket/BasketItem";
import { mapBasketItems } from "../../mappers/basketItemsMapper";
import "./BasketItems.css";

type IBasketItemsProps = {
  products: IProduct[],
  basketProducts: IBasketProduct[],
  onRemoveProduct: (productCode: string, quantity: number) => void;
}

const BasketItems = (props: IBasketItemsProps) => {
  const { products, basketProducts, onRemoveProduct } = props;

  const onRemove = (productCode: string) => {
    const quantity = products.filter(product => product.code === productCode)[0].unitsToAdd;
    onRemoveProduct(productCode, quantity);    
  }

  const items = mapBasketItems(basketProducts, products);

  return <div>
    {items.map(item =>
      <BasketItem key={item.id} item={item} onRemove={() => onRemove(item.productCode)} />
    )}
  </div>
}

export default BasketItems;