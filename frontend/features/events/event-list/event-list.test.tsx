import React from 'react';
import { render } from '@testing-library/react';
import EventList from './event-list';

test('should render EventList', () => {
  const { getByText } = render(<EventList />);

  expect(getByText('')).toBeInTheDocument();
});
  