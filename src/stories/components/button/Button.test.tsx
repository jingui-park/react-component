import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

describe('Buuton test', () => {

  test('render Button', () => {
    render(<Button>click</Button>);
    const ButtonElement = screen.getByText(/click/i);
    expect(ButtonElement).toBeInTheDocument();
  });

  test('render Default Button', () => {
    const { container } = render(<Button type="default">click</Button>);
    expect(container.querySelector(".ant-btn-default")).toBeInTheDocument();
  });

  test('render Primary Button', () => {
    const { container } = render(<Button type="primary">click</Button>);
    expect(container.querySelector(".ant-btn-primary")).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Button type="primary" onClick={onClick}>click</Button>);
    const linkElement = screen.getByText(/click/i)
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled();
  });

  test('should support blur', () => {
    const onBlur = jest.fn();
    render(<Button type="primary" onBlur={onBlur}>click</Button>);
    const linkElement = screen.getByText(/click/i)
    fireEvent.blur(linkElement)
    expect(onBlur).toBeCalled();
  });

  test('should support focus', () => {
    const onFocus = jest.fn();
    render(<Button type="primary" onFocus={onFocus}>click</Button>);
    const linkElement = screen.getByText(/click/i)
    fireEvent.focus(linkElement)
    expect(onFocus).toBeCalled();
  });

  test('small btn', () => {
    const { container } = render(<Button size="small">click</Button>);

    const smallSizeBtn = container.querySelector(".ant-btn-sm")
    expect(smallSizeBtn).toBeInTheDocument();
  });
})


