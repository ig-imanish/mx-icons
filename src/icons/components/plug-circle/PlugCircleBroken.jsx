import React from "react";
import Icon from "../../Icon";

export default function PlugCircleBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M12 15.1082V20.1498C12 21.2635 11.0955 22.1875 10.0128 21.9673C5.44193 21.0381 2 16.9659 2 12.0832C2 10.2294 2.49614 8.49247 3.36182 7M16.3641 21.1581C19.7003 19.5239 22 16.0743 22 12.0832C22 6.51441 17.5228 2 12 2C10.1786 2 8.47087 2.49102 7 3.34895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11.8C9 11.3582 9.35817 11 9.8 11H14.2C14.6418 11 15 11.3582 15 11.8V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11.8Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 11V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.5 11V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
