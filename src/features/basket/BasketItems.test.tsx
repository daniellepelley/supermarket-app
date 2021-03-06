import React from 'react';
import { render, screen } from '@testing-library/react';
import BasketItem from './BasketItem';

const onRemoveProduct = jest.fn();
const defaultProps = {
  item: {
    id: "CODE-1",
    title: "Some Product",
    price: 0.20,
    productCode: "CODE"
  },
  onRemove: onRemoveProduct
};

test('renders a collection of products', () => {
  render(<BasketItem {...defaultProps} />);
  const titleElement = screen.getByText(defaultProps.item.title);
  expect(titleElement).toBeInTheDocument();

  const priceElement = screen.getByText("0.20");
  expect(priceElement).toBeInTheDocument();
});

test('clicking on a product will add it to the basket', () => {
  render(<BasketItem {...defaultProps} />);

  const removeElement = screen.getByText("x");
  removeElement.click();

  expect(onRemoveProduct).toBeCalled();
});