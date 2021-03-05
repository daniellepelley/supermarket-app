import * as React from "react";
import { IBasketItem } from "../../store/types/IBasketItem";

type IBasketItemProps = {
  item: IBasketItem;
  onRemove: () => void;
}

const BasketItem = (props: IBasketItemProps) => {
  const {
    item,
    onRemove
  } = props;

  return <div className="basket-item">
    <div className="basket-item-title">
      {item.title}
    </div>
    <div className="basket-item-price">
      {item.price}
    </div>
    <div className="basket-item-remove" onClick={onRemove}>
      x
    </div>
  </div>
}

export default BasketItem;