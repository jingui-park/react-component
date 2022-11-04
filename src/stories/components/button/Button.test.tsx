import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders Button', () => {
  render(<Button>click</Button>);
  const ButtonElement = screen.getByText(/click/i);
  expect(ButtonElement).toBeInTheDocument();
});
