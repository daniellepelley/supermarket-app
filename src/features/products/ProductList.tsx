import * as React from "react";
import { IProduct } from "../../store/types/IProduct";
import ProductItem from "./ProductItem";

type IProductListProps = {
  products: IProduct[],
  onAddProduct: (productCode: string) => void;
}

const ProductList = (props: IProductListProps) => {
  const { products, onAddProduct } = props;

  return <div>
    {products.map(product =>
      <ProductItem key={product.code} product={product} onAdd={onAddProduct} />
    )}
  </div>
}

export default ProductList;