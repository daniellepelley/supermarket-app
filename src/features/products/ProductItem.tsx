import * as React from "react";
import { IProduct } from "../../store/types/IProduct";
import toCurrency from "../../mappers/toCurrency";

type IProductItemProps = {
  product: IProduct,
  onAdd: () => void;
}

const ProductItem = (props: IProductItemProps) => {
  const {
    price,
    title,
    unitsToAdd,
    unitTitle
  } = props.product;

  const productTitle = unitTitle
    ? `${title} (${unitsToAdd.toFixed(3)} ${unitTitle})`
    : title;

  const productPrice = unitTitle
    ? `@ ${price} per ${unitTitle}`
    : toCurrency(price);

  return <div className="product-item" onClick={props.onAdd}>
    <div className="product-title">
      {productTitle}
    </div>
    <div className="product-price">
      {productPrice}
    </div>
    <div className="product-add">
      Add to basket
    </div>
  </div>
}

export default ProductItem;