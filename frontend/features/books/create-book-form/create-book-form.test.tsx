import React from 'react';
import { render } from '@testing-library/react';
import CreateBookForm from './create-book-form';

test('should render CreateBookForm', () => {
  const { getByText } = render(<CreateBookForm />);

  expect(getByText('')).toBeInTheDocument();
});
  