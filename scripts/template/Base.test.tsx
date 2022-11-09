import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Base from './index';

describe('Base test', () => {

  test('render Base', () => {
    render(<Base>Base</Base>);
    expect(screen.getByText(/Base/i)).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Base>Base</Base>);
    const linkElement = screen.getByText(/Base/i)
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled();
  });
})


