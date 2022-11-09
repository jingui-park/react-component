import React from 'react'
import "./style/index.scss"
import classnames from 'classnames'

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Base(props: BaseProps) {
  const { children, className, style = {}, onClick } = props
  const cls = classnames({
    'ant-xx': true,
    [className as string]: !!className
  })

  const _style = { ...style };
  return (
    <div className={cls} onClick={onClick} style={_style}>{children}</div>
  )
}
