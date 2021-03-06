import * as React from "react";
import toCurrency from "../../mappers/toCurrency";
import { IBasketItem } from "../../store/types/IBasketItem";

type IUnitBasketItemProps = {
  item: IBasketItem;
  onRemove: () => void;
}

const UnitBasketItem = (props: IUnitBasketItemProps) => {
  const {
    item,
    onRemove
  } = props;

  return <div className="basket-item">
    <div className="basket-item-title">
      {item.title}
    </div>
    <div>
      <div className="basket-item-title">
        {item.unitsBreakdown}
      </div>
      <div className="basket-item-price">
        {toCurrency(item.price)}
      </div>
      <div className="basket-item-remove" title="Remove" onClick={onRemove}>
        x
    </div>
    </div>
  </div>
}

export default UnitBasketItem;