import React from 'react';
import { render } from '@testing-library/react';
import PrivateLessonItem from './private-lesson-item';

test('should render PrivateLessonItem', () => {
  const { getByText } = render(<PrivateLessonItem />);

  expect(getByText('')).toBeInTheDocument();
});
  