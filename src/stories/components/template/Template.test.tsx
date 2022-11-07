import React from 'react';
import { render, screen } from '@testing-library/react';
import Template from './index';

describe('Icon test', () => {

  test('render Icon', () => {
    render(<Template />);
    expect(screen.getByText(/Template/i)).toBeInTheDocument();
  });


})


