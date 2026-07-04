import React from "react";
import Icon from "../../Icon";

export default function BarChairLinear({
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
      <path d="M5.0315 6.93751C4.75731 4.72857 6.30192 2.69766 8.54207 2.32168L8.93963 2.25496C10.9651 1.91501 13.0349 1.91501 15.0604 2.25496L15.4579 2.32168C17.6981 2.69766 19.2427 4.72857 18.9685 6.93751L18.9505 7.08273C18.8855 7.6063 18.4315 8 17.8928 8H6.10719C5.56847 8 5.11452 7.6063 5.04953 7.08273L5.0315 6.93751Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 8L6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 8L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 17H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
