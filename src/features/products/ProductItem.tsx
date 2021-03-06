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
    code
  } = props.product;

  return <div placeholder="fd" className="product-item" onClick={props.onAdd}>
    <div className="product-title">
      {title}
    </div>
    <div className="product-price">
      {toCurrency(price)}
    </div>
    <div className="product-add">
      Add to basket
    </div>
  </div>
}

export default ProductItem;