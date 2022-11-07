import React from 'react';
import classNames from 'classnames'
// import "./style/button.css"
// import "./style/button.css";
import "./style/button.scss"

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "default" | "dashed" | "text" | "link";
  className?: string;
  size?: "large" | "small" | "default";
  children?: React.ReactNode;
  // backgroundColor?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  // 这里还有很多事件，onMouseOver onMouseEnter
  // 比较常见的写上面 => 不要这么写。不能这么写单测语法会报错，但是能通过，我们需要让 BaseButtonPorps 继承
  // [key: string]: any;
}

const SizeMap = {
  large: "lg",
  small: "sm",
  default: "default"
}

const Button = (props: BaseButtonProps) => {
  const { children, type, className, size = "default", style, onClick, onBlur, ...others } = props

  const cls = classNames({
    "ant-btn": true,
    [`ant-btn-${type}`]: !!type,
    [className as string]: !!className,
    [`ant-btn-${SizeMap[size]}`]: size,
  })
  return (
    <button className={cls} style={style} onClick={onClick} onBlur={onBlur} {...others}>
      {children}
    </button>
  )
}

export default Button
