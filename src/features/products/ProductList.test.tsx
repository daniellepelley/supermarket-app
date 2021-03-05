import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { IProduct } from '../../store/types/IProduct';

test('renders a collection of products', () => {
  const products: IProduct[] = [{
      title: "Some Product",
      price: 20,
      code: "SOME_PRODUCT",
  }]

  render(<ProductList products={products} onAddProduct={() => null} />);
  const titleElement = screen.getByText(products[0].title);
  expect(titleElement).toBeInTheDocument();

  const priceElement = screen.getByText(products[0].price);
  expect(priceElement).toBeInTheDocument();
});

test('clicking on a product will add it to the basket', () => {
  const products: IProduct[] = [{
      title: "Some Product",
      price: 20,
      code: "SOME_CODE",
  }]

  const onAddProduct = jest.fn();
  render(<ProductList products={products} onAddProduct={onAddProduct} />);
  const titleElement = screen.getByText(products[0].title);
  titleElement.click();
 
  expect(onAddProduct).toBeCalledWith("SOME_CODE");
});