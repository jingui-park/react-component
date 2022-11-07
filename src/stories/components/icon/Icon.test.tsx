import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Icon from './index';

describe('Icon test', () => {

  test('render Icon', () => {
    const { container } = render(<Icon type="pin" size={32} />);
    expect(container.querySelector(".ant-icon")).toBeInTheDocument();
  });


  test('custom className Icon', () => {
    const { container } = render(<Icon type="pin" className="cool" size={32} />);
    expect(container.querySelector(".cool")).toBeInTheDocument();
  });


  test("Icon Click", () => {
    const fn = jest.fn()
    const { container } = render(<Icon type="pin" className="cool" size={32} onClick={fn} />);
    const iconElement = container.querySelector("svg")
    fireEvent.click(iconElement)
    expect(fn).toBeCalled();
  })
})


