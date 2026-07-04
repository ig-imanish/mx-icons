import React from "react";
import Icon from "../../Icon";

export default function HomeLampLinear({
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
      <path d="M9 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.96167 7.44451C5.57058 5.0991 5.87503 3.9264 6.66114 3.15144C6.88904 2.92678 7.14306 2.73028 7.41778 2.56616C8.36541 2 9.57699 2 12.0002 2C14.4233 2 15.6349 2 16.5825 2.56616C16.8572 2.73028 17.1113 2.92678 17.3392 3.15144C18.1253 3.9264 18.4297 5.0991 19.0386 7.44451L19.1229 7.76898C19.9507 10.9576 20.3646 12.5519 19.6128 13.6719C19.5378 13.7837 19.4554 13.8902 19.3661 13.9909C18.4709 15 16.8237 15 13.5294 15H10.4709C7.1766 15 5.52945 15 4.63423 13.9909C4.54494 13.8902 4.46252 13.7837 4.38754 13.6719C3.63573 12.5519 4.04963 10.9576 4.87744 7.76897L4.96167 7.44451Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17.5 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
