import * as React from "react";
import toCurrency from "../../mappers/toCurrency";
import { IBasketItem } from "../../store/types/IBasketItem";
import SimpleBasketItem from "./SimpleBasketItem";
import UnitBasketItem from "./UnitBasketItem";

type IBasketItemProps = {
  item: IBasketItem;
  onRemove: () => void;
}

const BasketItem = (props: IBasketItemProps) => {
  const {
    item,
    onRemove
  } = props;
  return item.unitsBreakdown
  ? <UnitBasketItem item={item} onRemove={onRemove} />
  : <SimpleBasketItem item={item} onRemove={onRemove} />

}

export default BasketItem;