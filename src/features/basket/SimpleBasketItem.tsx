import * as React from "react";
import toCurrency from "../../mappers/toCurrency";
import { IBasketItem } from "../../store/types/IBasketItem";

type ISimpleBasketItemProps = {
  item: IBasketItem;
  onRemove: () => void;
}

const SimpleBasketItem = (props: ISimpleBasketItemProps) => {
  const {
    item,
    onRemove
  } = props;

  return <div className="basket-item">
    <div className="basket-item-title">
      {item.title}
    </div>
    <div className="basket-item-price">
      {toCurrency(item.price)}
    </div>
    <div className="basket-item-remove" onClick={onRemove}>
      x
    </div>
  </div>
}

export default SimpleBasketItem;