import React, { useState } from 'react'
import classnames from 'classnames';
import "./style/tag.scss"
import Icon from '../icon'
interface TagProps {
  children?: React.ReactElement | string;
  className?: string;
  closable?: boolean;
  onClose?: Function;
  color?: "success" | "processing" | "error" | "warning" | "default";
}

export default function Tag(props: TagProps) {

  const { children, className, color = "default", closable = false, onClose } = props

  const customColor = color && color.match(/^#/);
  const cls = classnames({
    'ant-tag': true,
    [`ant-tag-${color}`]: !!color && !customColor,
    [className as string]: !!className
  })

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    onClose && onClose(e)
    if (!e.defaultPrevented) {
      setVisible(false);
    }
  }

  const [visible, setVisible] = useState(true)

  if (!visible) return null;

  return (
    <div className={cls}>
      <span>{children}</span>
      {
        closable && <Icon type='close' style={{ marginLeft: 5 }} size={10} onClick={handleClose} />
      }
    </div>
  )
  // return (
  //   <>
  //     {
  //       !visible ? null : <div className={cls}>
  //         {children}
  //         {
  //           closable && <Icon type='close' style={{ marginLeft: 5 }} size={10} onClick={handleClose} />
  //         }
  //       </div>
  //     }
  //   </>
  // )
}
