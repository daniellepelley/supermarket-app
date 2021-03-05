import * as React from "react";
import { IProduct } from "../../store/types/IProduct";

type IProductItemProps = {
  product: IProduct,
  onAdd: (productCode: string) => void;
}

const ProductItem = (props: IProductItemProps) => {
  const {
    price,
    title,
    code
  } = props.product;

  return <div className="product-item" onClick={() => props.onAdd(code)}>
    <div className="product-title">
      {title}
    </div>
    <div className="product-price">
      {price}
    </div>
  </div>
}

export default ProductItem;