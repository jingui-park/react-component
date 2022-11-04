import React from 'react';
import classNames from 'classnames'
// import "./style/button.css"
import "./style/button.css";


interface BaseButtonProps {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  className?: string;
  children?: React.ReactNode;
  // backgroundColor?: string;
  style?: React.CSSProperties;
}

const Button = (props: BaseButtonProps) => {
  const { children, type, className, style } = props

  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: !!type,
    [className as string]: !!className
  })
  return (
    <button className={cls} style={style}>
      {children}
    </button>
  )
}

export default Button
