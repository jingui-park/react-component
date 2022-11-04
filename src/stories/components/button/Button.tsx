import React from 'react';
import classNames from 'classnames'
// import "./style/button.css"
import "./style/button.css";


interface BaseButtonProps {
  type?: "primary" | "default";
  className?: string;
  children?: React.ReactNode;
}

const Button = (props: BaseButtonProps) => {
  const { children, type, className } = props

  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: !!type,
    [className as string]: !!className
  })
  return (
    <button className={cls}>
      {children}
    </button>
  )
}

export default Button
