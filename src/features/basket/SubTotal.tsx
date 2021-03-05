import * as React from "react";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";
import { mapSubTotal } from "./basketItemsMapper";

type ISubTotalProps = {
  basketProducts: IBasketProduct[],
  products: IProduct[],
}

const SubTotal = (props: ISubTotalProps) => {
  const { basketProducts, products } = props;

  return <div>
    {mapSubTotal(basketProducts, products)}
  </div>
}

export default SubTotal;