import React from 'react';
import { render } from '@testing-library/react';
import BookList from './book-list';

test('should render BookList', () => {
  const { getByText } = render(<BookList />);

  expect(getByText('')).toBeInTheDocument();
});
  