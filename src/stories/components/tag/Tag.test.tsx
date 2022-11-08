import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './index';

describe('Tag test', () => {

  test('render Tag', () => {
    render(<Tag>Tag</Tag>);
    expect(screen.getByText(/Tag/i)).toBeInTheDocument();
  });


  test('should support click', () => {
    const onClick = jest.fn();
    const { container } = render(<Tag closable onClose={onClick}>Tag</Tag>);
    const element = container.querySelector("svg")
    fireEvent.click(element)
    expect(onClick).toBeCalled();
  });

})


