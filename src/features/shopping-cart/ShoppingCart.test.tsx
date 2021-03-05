import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

test('renders learn react link', () => {
  render(<ShoppingCart message="foo" />);
  const linkElement = screen.getByText("foo");
  expect(linkElement).toBeInTheDocument();
});
