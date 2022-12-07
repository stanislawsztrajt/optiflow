import React from 'react';
import { render } from '@testing-library/react';
import MicrosoftLogin from './microsoft-login';

test('should render MicrosoftLogin', () => {
  const { getByText } = render(<MicrosoftLogin />);

  expect(getByText('')).toBeInTheDocument();
});
  