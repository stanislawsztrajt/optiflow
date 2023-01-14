import React from 'react';
import { render } from '@testing-library/react';
import LostItemList from './lost-item-list';

test('should render LostItemList', () => {
  const { getByText } = render(<LostItemList />);

  expect(getByText('')).toBeInTheDocument();
});
  