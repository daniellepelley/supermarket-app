import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { IProduct } from '../../store/types/IProduct';

const products: IProduct[] = [{
  title: "Some Product",
  price: 20,
  code: "SOME_PRODUCT",
  unitsToAdd: 1
}];

test('renders a collection of products', () => {

  render(<ProductList products={products} onAddProduct={() => null} />);
  const titleElement = screen.getByText(products[0].title);
  expect(titleElement).toBeInTheDocument();

  const priceElement = screen.getByText("20.00");
  expect(priceElement).toBeInTheDocument();
});

test('clicking on a product will add it to the basket', () => {
  const onAddProduct = jest.fn();
  render(<ProductList products={products} onAddProduct={onAddProduct} />);
  const titleElement = screen.getByText(products[0].title);
  titleElement.click();

  expect(onAddProduct).toBeCalled();
});