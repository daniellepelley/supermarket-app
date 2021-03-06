import * as React from "react";
import { IProduct } from "../../store/types/IProduct";
import ProductItem from "./ProductItem";
import "./ProductList.css"

type IProductListProps = {
  products: IProduct[],
  onAddProduct: (productCode: string, quantity: number) => void;
}

const ProductList = (props: IProductListProps) => {
  const { products, onAddProduct } = props;

  return <div className="product-list">
    <h1>Product List</h1>
    {products.map(product =>
      <ProductItem key={product.code} product={product} onAdd={() => onAddProduct(product.code, product.unitsToAdd) } />
    )}
  </div>
}

export default ProductList;