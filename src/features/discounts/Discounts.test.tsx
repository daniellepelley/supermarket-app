import React from 'react';
import { render, screen } from '@testing-library/react';
import Discounts from './Discounts';
import { IAppliedDiscount } from '../../store/types/IAppliedDiscount';

test('renders a collection of products', () => {
  const discounts: IAppliedDiscount[] = [{
    title: "Some discount",
    discount: 1.3
  }]

  render(<Discounts discounts={discounts} />);
  const titleElement = screen.getByText(discounts[0].title);
  expect(titleElement).toBeInTheDocument();
});